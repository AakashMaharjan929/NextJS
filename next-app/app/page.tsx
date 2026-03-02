import Link from "next/dist/client/link";
import Image from "next/image";
import ProductCard from "./users/components/productCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
