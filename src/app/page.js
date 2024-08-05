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
          content="Jasa Custom Clearance Ekspor Impor dan Ekspedisi general cargo Door to Door di Indonesia"
        />
        <meta property="og:title" content="Sadawira Yasa Utama" />
        <meta
          property="og:description"
          content="Jasa Custom Clearance Ekspor Impor dan Ekspedisi general cargo Door to Door di Indonesia"
        />
        <meta property="og:image" content="/images/logo.png" />
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
