import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Layout>
      <Nav />

      {/* Hero */}
      <Hero />
      
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
