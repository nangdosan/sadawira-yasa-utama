import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Aside({ isAsideOpen }) {
  return (
    <aside
      className={`fixed z-50 inset-0 bg-vintage p-5 flex flex-col gap-2 min-h-full w-64 overflow-auto transition-transform duration-300 transform md:relative md:translate-x-0 ${
        isAsideOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
    >
      <div className="flex flex-col h-[calc(100vh-3rem)]">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex flex-col h-full justify-between mt-5">
          <div className="flex flex-col gap-2">
            <Link href="/">Beranda</Link>
            <Link href="/dashboard">Semua Blog</Link>
            <Link href="/dashboard/create">Buat Blog</Link>
          </div>
          <div>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

{
  /* <aside
  className={`fixed z-50 inset-0 bg-vintage p-5 flex flex-col gap-2 min-h-full w-64 overflow-auto transition-transform duration-300 transform md:relative md:translate-x-0`}
  style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
>
  <div className="flex flex-col h-[calc(100vh-3rem)]">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <div className="flex flex-col h-full justify-between mt-5">
      <div className="flex flex-col gap-2">
        <Link href="/">Beranda</Link>
        <Link href="/dashboard">Semua Blog</Link>
        <Link href="/dashboard/create">Buat Blog</Link>
      </div>
      <div>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </div>
  </div>
</aside>; */
}
