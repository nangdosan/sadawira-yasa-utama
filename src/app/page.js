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
