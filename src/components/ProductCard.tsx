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
    <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-gray-100">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`${model} ${storage}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
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
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold text-brand-orange">
              R{price.toLocaleString()}
            </span>
          </div>
          
          <Button 
            onClick={handleWhatsAppOrder}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-lg transition-all duration-300"
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