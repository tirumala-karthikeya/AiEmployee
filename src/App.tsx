import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HomePage/HeroSection";
import CompanyCarousel from "./components/HomePage/CompanyCarousel";
import AIWorkforce from "./components/HomePage/AIWorkForce";
import TrustComponent from "./components/HomePage/TrustComponent";
import AccurateComponent from "./components/HomePage/AccurateComponent";

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <HeroSection />
        <CompanyCarousel />
        <AIWorkforce/>
        <TrustComponent/>
        <AccurateComponent/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
