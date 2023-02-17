import "./App.css";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </main>
    </>
  );
}

export default App;
