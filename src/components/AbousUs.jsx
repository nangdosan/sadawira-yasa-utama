import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="tentang-kami"
      className="w-full flex flex-col items-center justify-center bg-vintage py-20 space-y-5 mt-24"
    >
      <header className="text-center text-xs space-y-2 w-full md:w-1/2 mb-3 md:mb-10">
        <h3 className="text-sm text-amber-600">TENTANG KAMI</h3>
        <h1 className="text-3xl font-semibold font-playfair mb-4 mx-7 md:mx-0">
          Kepercayaan dan Keunggulan dalam Jasa <i>Custom Clearance</i> dan
          Ekspedisi
        </h1>
      </header>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center text-justify space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        <p className="prose w-10/12 md:w-4/12">
          PT Sadawira Yasa Utama adalah perusahaan yang bergerak di bidang{" "}
          <span className="underline underline-offset-2">
            jasa Custom Clearance Ekspor Impor dan ekspedisi general cargo
            dengan layanan door-to-door ke beberapa pulau di Indonesia
            menggunakan moda transportasi darat dan laut.
          </span>{" "}
          Kami fokus menjalankan bisnis dengan menjunjung tinggi nilai-nilai
          kepercayaan, kejujuran, tanggung jawab, dan hubungan yang saling
          menguntungkan melalui kerja sama yang win-win solution. Eksekusi
          proses kerja yang cepat dan fleksibel menjadi bagian integral dari
          pelayanan kami.
        </p>
        <p className="prose w-10/12 md:w-4/12">
          Kami berkomitmen untuk memberikan pelayanan maksimal dengan ketepatan
          waktu sebagai standar kinerja, demi kepuasan pelanggan.{" "}
          <span className="underline underline-offset-2">
            Didukung oleh manajemen yang baik dan sumber daya manusia yang
            kompeten, serta pengalaman dan kepercayaan yang diberikan oleh
            pelanggan
          </span>
          , kami berhasil membangun hubungan kemitraan yang sangat baik dengan
          customer. Hal ini menjadi kekuatan dan modal utama bagi kami untuk
          terus eksis dan berkembang dalam menjalankan bisnis.
        </p>
      </div>
      <div className="flex items-center justify-evenly flex-wrap w-full md:w-8/12 gap-5 px-7 md:px-0 pt-10">
        {[...Array(8).keys()].map((i) => (
          <Image
            src={`/images/us/${i + 1}.jpg`}
            key={i}
            width={380}
            height={200}
            className="rounded-lg shadow-lg"
            alt={`Gambar ${i + 1}`}
          />
        ))}
      </div>
      <div className="">
        <Link
          href="https://wa.me/6281357117899"
          target="_blank"
          className="rounded-lg block mt-5 shadow-xl w-40 py-3 text-center scale-90 hover:scale-95 transition-all duration-200 bg-black text-white text-sm font-semibold"
        >
          Hubungi Kami
        </Link>
      </div>
    </section>
  );
}
