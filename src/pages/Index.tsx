import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import DeliveryInfo from "@/components/DeliveryInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <DeliveryInfo />
      <Footer />
    </div>
  );
};

export default Index;
