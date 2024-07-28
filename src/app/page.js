"use client";

import Jumbotron from "@/components/Jumbotron";
import OurPartners from "@/components/OurPartners";
import VisionMission from "@/components/VisionMission";
import Security from "@/components/Security";
import AboutUs from "@/components/AbousUs";
import Transport from "@/components/Transport";
import OurBlog from "@/components/OurBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <title>PT. Sadawira Yasa Utama</title>
      <meta
        name="description"
        content="PT Sadawira Yasa Utama adalah perusahaan jasa Custom Clearance Ekspor Impor dan ekspedisi general cargo yang menyediakan layanan door-to-door ke seluruh Indonesia. Kami mengutamakan kepercayaan, kejujuran, dan ketepatan waktu untuk kepuasan pelanggan."
      />
      <meta
        name="keywords"
        content="Custom Clearance, Ekspor Impor, Ekspedisi General Cargo, Door-to-Door, Transportasi Darat, Transportasi Laut, PT Sadawira Yasa Utama, Layanan Ekspedisi, Kepercayaan, Ketepatan Waktu"
      />

      <Navbar />
      <main>
        <Jumbotron />
        <OurPartners />
        <VisionMission />
        <Security />
        <AboutUs />
        <Transport />
        <OurBlog />
        <Footer />
      </main>
    </>
  );
}
