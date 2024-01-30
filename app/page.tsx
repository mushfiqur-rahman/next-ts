import Link from "next/link";
import ProductCard from "./components/Product";

export default function Home() {
  return (
    <main>
      <h2>Hello World</h2>
      <ProductCard />
      <Link href="/users">Users</Link>
    </main>
  );
}
