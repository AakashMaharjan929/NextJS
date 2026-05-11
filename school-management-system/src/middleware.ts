import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { routeAccessMap } from './lib/settings'

const matchers = Object.entries(routeAccessMap).map(([routePattern, allowedRoles]) => ({
  matcher: createRouteMatcher([routePattern]),
  allowedRoles,
  pattern: routePattern,
}))

// Specific routes first
matchers.sort((a, b) => {
  const specificA = !a.pattern.includes('(.*)')
  const specificB = !b.pattern.includes('(.*)')
  return specificB ? 1 : specificA ? -1 : 0
})

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, userId } = await auth()
  
  // ←←← THIS IS THE IMPORTANT CHANGE ←←←
  const metadata = sessionClaims?.metadata as { role?: string } | undefined
  const role = metadata?.role

  console.log("🔐 Current Role:", role)
  console.log("📍 Path:", req.nextUrl.pathname)
  console.log("🧾 Custom Metadata:", metadata)
  console.log("Full sessionClaims:", sessionClaims)

  if (!userId) {
    if (matchers.some(({ matcher }) => matcher(req))) {
      return (await auth()).redirectToSignIn()
    }
    return NextResponse.next()
  }

  if (!role) {
    console.log("⚠️ Role still missing")
    return NextResponse.next()   // temporary
  }

  // Route protection
  for (const { matcher, allowedRoles, pattern } of matchers) {
    if (matcher(req)) {
      console.log(`🔍 Matched: ${pattern} | Allowed:`, allowedRoles)

      if (!allowedRoles.includes(role)) {
        console.log(`⛔ DENIED → Redirecting ${role} to /${role}`)
        return NextResponse.redirect(new URL(`/${role}`, req.url))
      }

      console.log("✅ Access GRANTED")
      break
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}