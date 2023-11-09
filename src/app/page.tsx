import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-center font-bold"> Hi </h1>
      <Link href="api/auth/signin">SignIn</Link>
    </main>
  );
}
