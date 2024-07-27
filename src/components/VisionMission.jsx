import Image from "next/image";

export default function VisionMission() {
  return (
    <section
      id="visi-misi"
      className="mt-32 w-full flex flex-col items-center justify-center bg-vintage py-20 space-y-5"
    >
      <header className="text-center text-xs space-y-2 w-3/4 md:w-1/2 mb-5 md:mb-10">
        <h3 className="text-amber-600 text-sm">JALAN CEPAT, TUJUAN TEPAT</h3>
        <h1 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-center">
          Mengantar Harapan, Mengirim Kebahagiaan.
        </h1>
      </header>
      <div className="mx-7 md:mx-24 flex flex-col lg:flex-row items-start justify-evenly space-y-10 md:space-x-0">
        <div className="w-full lg:w-4/12">
          <Image src="/images/misi.png" width={400} height={300} />
          <h4 className="text-3xl font-playfair my-2">Misi</h4>
          <p className="leading-6 tracking-wider text-justify">
            PT Sadawira Yasa Utama berkomitmen memberikan solusi dan layanan
            terbaik bagi pelanggan dengan mempermudah proses pengiriman barang,
            menyediakan layanan cepat dan tepat waktu, siap kapan pun
            diperlukan, serta bertanggung jawab penuh hingga barang sampai ke
            tujuan. Kami juga menjamin kualitas terbaik dalam hal teknis dan
            administrasi.
          </p>
        </div>
        <div className="w-full lg:w-4/12">
          <Image src="/images/visi.png" width={400} height={300} />
          <h4 className="text-3xl font-playfair my-2">Visi</h4>
          <p className="leading-6 tracking-wider text-justify">
            Menjadi perusahaan Ekspedisi yang terbaik, utama, dan terpercaya.
          </p>
        </div>
      </div>
    </section>
  );
}
