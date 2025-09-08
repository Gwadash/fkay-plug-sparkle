import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Smartphone, HardDrive } from "lucide-react";

interface ProductCardProps {
  model: string;
  storage: string;
  price: number;
  condition: "brand-new" | "pre-owned";
  image?: string;
}

const ProductCard = ({ model, storage, price, condition, image }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in the ${condition === "brand-new" ? "Brand New" : "Pre-owned"} ${model} ${storage} for R${price.toLocaleString()}`;
    window.open(`https://wa.me/27717273856?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 w-full md:max-w-xs mx-auto">
      {image && (
        <div className="h-64 overflow-hidden flex items-center justify-center">
          <img 
            src={image} 
            alt={`${model} ${storage}`}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-6">
          <Badge 
            className={condition === "brand-new" ? "bg-brand-orange text-white rounded-full px-3 py-1" : "bg-blue-500 text-white rounded-full px-3 py-1"}
          >
            {condition === "brand-new" ? "BRAND NEW" : "PRE-OWNED"}
          </Badge>
          <div className="p-2 bg-brand-orange/10 rounded border border-brand-orange/20">
            <Smartphone className="h-4 w-4 text-brand-orange" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {model}
        </h3>
        
        <div className="flex items-center gap-2 mb-6 text-gray-500">
          <HardDrive className="h-4 w-4" />
          <span className="text-sm font-medium">{storage}</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <span className="text-2xl md:text-3xl font-bold text-brand-orange">
              R{price.toLocaleString()}
            </span>
          </div>
          
          <Button 
            onClick={handleWhatsAppOrder}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-4 md:px-6 py-2 rounded-lg transition-all duration-300 w-full md:w-auto text-sm md:text-base"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Order Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;