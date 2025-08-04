import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Solutions from "./components/solutions";
import IdealPerfil from "./components/idealPerfil";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <IdealPerfil />
      <Contact />
      <Footer />
    </main>
  );
}
