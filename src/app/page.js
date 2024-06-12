import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Footer />
    </main>
  );
}
