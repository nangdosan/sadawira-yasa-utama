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
          <Link
            href="https://www.google.com/maps/dir//Jl.+Patriot+VII+Cluster+Grand+Setiamekar+No.1,+Setiamekar,+Kec.+Tambun+Sel.,+Bekasi+Timur,+Jawa+Barat+17111/@-6.247799,106.9526749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e698f52dcd726fd:0x59db923427070071!2m2!1d107.0350768!2d-6.2478054?entry=ttu"
            target="_blank"
          >
            <Image
              src="/images/map.png"
              width={300}
              height={300}
              alt="map"
              className="mt-5 md:mt-10"
            />
          </Link>
        </div>
        <div className="mt-10 md:mt-0 w-full md:w-5/12 lg:w-3/12">
          <h3 className="text-2xl text-white mb-3">Kontak Kami</h3>
          <div className="text-gray-500 text-sm flex flex-col space-y-1 mb-5">
            <Link href="https://wa.me/6281239848060">WhatsApp 1</Link>
            <Link href="https://wa.me/6281357117899">WhatsApp 2</Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sadawirayasautama.gmail.com">
              Gmail
            </Link>
          </div>
          <SocialMedia />
        </div>
      </div>
      <span className="text-center text-gray-400 block text-xs py-3">
        @2024 | Sadawira Yasa Utama
      </span>
    </footer>
  );
}
