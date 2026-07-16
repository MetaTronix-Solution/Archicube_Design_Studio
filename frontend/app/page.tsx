import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import FeaturedBanner from "@/components/sections/FeaturedBanner";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <FeaturedBanner />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  );
}
