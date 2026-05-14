# 🎓 School Management System

A modern, full-stack School Management System built with **Next.js 15**, **Tailwind CSS**, **Prisma**, and **Clerk**. This application provides a comprehensive dashboard for administrators, teachers, students, and parents to manage academic activities efficiently.

---

## 📸 Screenshots

| Admin Dashboard | Student Details |
| :---: | :---: |
| ![Admin Dashboard](./public/screenshots/admin-dashboard.png) | ![Student Details](./public/screenshots/student-details.png) |

| Teacher List | Teacher Details |
| :---: | :---: |
| ![Teacher List](./public/screenshots/teacher-list.png) | ![Teacher Details](./public/screenshots/teacher-details.png) |


---

## ✨ Key Features

### 🏢 Multi-Role Dashboards
- **Admin**: Full control over teachers, students, parents, classes, and subjects. View school-wide statistics and announcements.
- **Teacher**: Manage class schedules, track student attendance, and view assigned lessons.
- **Student**: View personal schedules, exam results, assignments, and school events.
- **Parent**: Monitor child's academic performance, attendance records, and upcoming school activities.

### 📚 Academic Management
- **User Management**: Comprehensive CRUD operations for Teachers, Students, and Parents.
- **Class & Subject Handling**: Organize curriculum by linking teachers to subjects and classes.
- **Lesson Scheduling**: Interactive calendar view for tracking weekly lessons and timings.
- **Exams & Assignments**: Create and manage assessments with automated result tracking.
- **Attendance**: Streamlined system for recording student presence.

### 📢 Communication & Events
- **Announcements**: School-wide or class-specific broadcast messages.
- **Event Calendar**: Integrated calendar for tracking school holidays, meetings, and extra-curricular activities.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/) (Role-based access control)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Charts**: [Recharts](https://recharts.org/)
- **Calendars**: [React Big Calendar](https://jquense.github.io/react-big-calendar/)
- **Forms**: React Hook Form & Zod
- **Storage**: Cloudinary (via `next-cloudinary`)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ 
- PostgreSQL database (Local or Cloud like Supabase/Neon)
- Clerk Account

### 2. Clone the Repository
```bash
git clone https://github.com/AakashMaharjan929/NextJS/school-management-system.git
cd school-management-system
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Setup
Create a `.env` file in the root directory and add your credentials:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/school_db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Cloudinary (Optional for Image Uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
```

### 5. Database Migration & Seeding
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 6. Run the Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🐳 Docker Support

You can also run the application using Docker:

```bash
docker-compose up --build
```

---

## 📂 Project Structure

- `src/app`: Next.js App Router (Dashboards, Lists, Auth)
- `src/components`: Reusable UI components (Charts, Forms, Tables)
- `src/lib`: Utility functions and Prisma client
- `prisma`: Database schema and seed scripts
- `public`: Static assets (Icons, Screenshots)

---

Built with ❤️ by [Aakash Maharjan](https://github.com/AakashMaharjan929)
