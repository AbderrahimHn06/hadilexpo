import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExamplesSection from "@/components/ExamplesSection";
import OrderFormSection from "@/components/OrderFormSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import ImageModal from "@/components/ImageModal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ImageModal/>
      <Navbar />
      <main>
        <HeroSection />
        <ExamplesSection />
        <PortfolioSection />
        <OrderFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
