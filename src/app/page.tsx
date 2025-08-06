import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Solutions from "../components/solutions";
import FirstCustomer from "../components/first-customer";
import Contact from "../components/contact";
import CTA from "../components/cta";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-neutral-900 gap-0 justify-center items-center">
        <Header />
        <Hero />
      </div>
      <About />
      <Solutions />
      <FirstCustomer />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
