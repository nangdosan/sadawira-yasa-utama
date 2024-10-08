"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (navbarRef.current) {
          navbarRef.current.style.backgroundColor = "white";
        }
      } else {
        if (navbarRef.current) {
          navbarRef.current.style.backgroundColor = "transparent";
          navbarRef.current.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`${
          isMenuOpen ? "-z-50" : "z-50"
        } fixed top-0 right-0 left-0 px-7 md:px-24 flex py-2 items-center justify-between transition-all duration-300`}
      >
        <Image src="/images/logo.png" alt="Logo" width={56} height={72} />
        <div className="hidden lg:flex space-x-7 tracking-wide text-sm text-gray-500 ml-14">
          <Link href="/">Beranda</Link>
          <Link href="/#visi-misi">Visi & Misi</Link>
          <Link href="/#tentang-kami">Tentang Kami</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#transport">Armada Transportasi</Link>
        </div>
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/6281239848060"
            target="_blank"
            className="rounded-lg block w-40 py-3 text-center scale-75 bg-black text-white text-sm font-semibold"
          >
            Hubungi Kami
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-10 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 left-0 w-full max-w-sm h-full bg-white z-50 p-10">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none mb-5 z-50 absolute top-4 right-4"
            >
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Beranda
              </Link>
              <Link href="/#visi-misi" onClick={() => setIsMenuOpen(false)}>
                Visi & Misi
              </Link>
              <Link href="/#tentang-kami" onClick={() => setIsMenuOpen(false)}>
                Tentang Kami
              </Link>
              <Link href="/#blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/#transport" onClick={() => setIsMenuOpen(false)}>
                Armada Transportasi
              </Link>
              <Link
                href="https://wa.me/6281239848060"
                target="_blank"
                className="rounded-lg block w-full py-3 mt-10 shadow-xl text-center scale-75 bg-black text-white text-sm font-semibold"
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
