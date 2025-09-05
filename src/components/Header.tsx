import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/27717273856", "_blank");
  };

  return (
    <header className="bg-background shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/e8830936-ee67-45a4-826a-d8f16b50ff86.png" alt="FkayPlug Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-brand-dark">
                FKAY<span className="text-brand-orange">PLUG</span>
              </h1>
              <p className="text-sm text-brand-gray">Quality iPhones</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-brand-gray">
              <Phone className="h-4 w-4 text-brand-orange" />
              <span className="text-sm">0717273856 / 0602270998</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;