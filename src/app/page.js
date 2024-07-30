"use client";

import AnimatedComponent from "@/utils/Motion";
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
      <head>
        <title>Sadawira Yasa Utama</title>
        <meta
          name="description"
          content="PT Sadawira Yasa Utama adalah perusahaan jasa Custom Clearance Ekspor Impor dan ekspedisi general cargo yang menyediakan layanan door-to-door ke seluruh Indonesia. Kami mengutamakan kepercayaan, kejujuran, dan ketepatan waktu untuk kepuasan pelanggan."
        />
        <meta
          name="keywords"
          content="Custom Clearance, Ekspor Impor, Ekspedisi General Cargo, Door-to-Door, Transportasi Darat, Transportasi Laut, PT Sadawira Yasa Utama, Layanan Ekspedisi, Kepercayaan, Ketepatan Waktu"
        />
        <meta property="og:title" content="Sadawira Yasa Utama" />
        <meta
          property="og:description"
          content="PT Sadawira Yasa Utama menyediakan layanan Custom Clearance Ekspor Impor dan ekspedisi general cargo dengan layanan door-to-door ke seluruh Indonesia."
        />
        <meta property="og:image" content="/images/logo_full.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Sadawira Yasa Utama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sadawira Yasa Utama" />
        <meta
          name="twitter:description"
          content="PT Sadawira Yasa Utama adalah perusahaan jasa Custom Clearance Ekspor Impor dan ekspedisi general cargo yang menyediakan layanan door-to-door ke seluruh Indonesia."
        />
        <meta name="twitter:image" content="/images/logo_full.png" />
      </head>
      <AnimatedComponent>
        <Navbar />
      </AnimatedComponent>
      <main>
        <AnimatedComponent>
          <Jumbotron />
        </AnimatedComponent>
        <AnimatedComponent>
          <OurPartners />
        </AnimatedComponent>
        <AnimatedComponent>
          <VisionMission />
        </AnimatedComponent>
        <AnimatedComponent>
          <Security />
        </AnimatedComponent>
        <AnimatedComponent>
          <AboutUs />
        </AnimatedComponent>
        <AnimatedComponent>
          <Transport />
        </AnimatedComponent>
        <AnimatedComponent>
          <OurBlog />
        </AnimatedComponent>
      </main>
      <Footer />
    </>
  );
}
