import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FieldNotes from "@/components/FieldNotes";
import Studio from "@/components/Studio";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Pricing />
        <FieldNotes />
        <Studio />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
