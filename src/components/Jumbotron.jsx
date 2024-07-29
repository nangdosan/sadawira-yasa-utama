import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <section id="#" className="relative h-[662px] mt-7 md:mt-0">
      <div className="relative w-full h-full">
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          priority
          quality={100}
          fill
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/banner-mobile.png"
          alt="Banner Image"
          priority
          quality={100}
          fill
          className="object-cover md:hidden"
        />
      </div>
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-start px-7 md:px-24 z-10 w-full md:w-6/12 lg:7/12">
        <h1 className="text-4xl font-bold font-playfair mb-4">
          Dari Darat ke Laut, Kami Menghubungkan Bisnis Anda ke Seluruh
          Indonesia
        </h1>
        <p className="tracking-wide leading-5 mb-7">
          PT Sadawira Yasa Utama adalah perusahaan jasa Custom Clearance Ekspor
          Impor dan Ekspedisi general cargo Door to Door di Indonesia, dengan
          layanan cepat dan terpercaya.
        </p>
        <SocialMedia />
        <Link
          href="#tentang-kami"
          className="mt-10 -ml-2 w-56 py-3 text-center bg-black text-white scale-90 hover:scale-95 transition-all duration-200 hover:shadow-xl rounded-lg"
        >
          Pelajari Lebih Lanjut
        </Link>
      </div>
    </section>
  );
}
