import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex p-4 bg-slate-300 space-x-2">
        <p>Blog</p>
        <Link href="/" className="underline">
          Home
        </Link>
        <Link href="/post/list" className="underline">
          Posts
        </Link>
      </div>
      <main className="p-4">{children}</main>
    </>
  );
}
