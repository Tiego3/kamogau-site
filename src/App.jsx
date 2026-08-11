import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <Layout>
      <ScrollProgress />
      <Nav />

      {/* Hero */}
      <Hero />

      <Marquee />

      {/* Page sections */}
      <Services />
      <About />
      <Stats />
      <Industries />
      <Contact />
    
      {/* Footer */}
      <Footer />
    </Layout>
  );
}
