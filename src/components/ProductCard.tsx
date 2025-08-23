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

const ProductCard = ({ model, storage, price, condition }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in the ${condition === "brand-new" ? "Brand New" : "Pre-owned"} ${model} ${storage} for R${price.toLocaleString()}`;
    window.open(`https://wa.me/27717273856?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            variant={condition === "brand-new" ? "default" : "secondary"}
            className={condition === "brand-new" ? "bg-gradient-primary" : "bg-brand-gray text-white"}
          >
            {condition === "brand-new" ? "BRAND NEW" : "PRE-OWNED"}
          </Badge>
          <div className="p-2 bg-brand-orange/10 rounded-full">
            <Smartphone className="h-6 w-6 text-brand-orange" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
          {model}
        </h3>
        
        <div className="flex items-center gap-2 mb-4 text-brand-gray">
          <HardDrive className="h-4 w-4" />
          <span className="text-sm">{storage}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold text-brand-orange">
              R{price.toLocaleString()}
            </span>
          </div>
          
          <Button 
            onClick={handleWhatsAppOrder}
            className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
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