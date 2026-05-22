import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import HowItWorks from "@/components/HowItWorks";
import WhatIsIncluded from "@/components/WhatIsIncluded";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialBar />
        <HowItWorks />
        <WhatIsIncluded />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
