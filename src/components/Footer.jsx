import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-7 md:mx-24 pt-10 flex flex-col md:flex-row items-start justify-between border-b-2 border-gray-700 pb-10">
        <div className="w-full md:w-5/12">
          <h3 className="text-2xl text-white mb-3">Lokasi</h3>
          <p className="text-gray-500">
            Jl. Patriot VII Cluster Grand Setiamekar No.1, Setiamekar, Kec.
            Tambun Sel., Bekasi Timur, Jawa Barat 17111
          </p>
          <Image
            src="/images/map.png"
            width={300}
            height={300}
            alt="map"
            className="mt-5 md:mt-10"
          />
        </div>
        <div className="mt-10 md:mt-0 w-full md:w-5/12 lg:w-3/12">
          <h3 className="text-2xl text-white mb-3">Kontak Kami</h3>
          <div className="text-gray-500 text-sm flex flex-col space-y-1 mb-5">
            <Link href="https://wa.me/6281234567890">WhatsApp 1</Link>
            <Link href="https://wa.me/6281234567899">WhatsApp 2</Link>
            <Link href="#">Gmail</Link>
          </div>
          <SocialMedia />
        </div>
      </div>
      <span className="text-center text-gray-400 block text-xs py-3">
        @2024 PT Sadawira Yasa Utama
      </span>
    </footer>
  );
}
