import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, CreditCard } from "lucide-react";

const DeliveryInfo = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            <span className="text-brand-orange">Nationwide</span> Delivery
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Fast, reliable delivery to your doorstep using trusted courier services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="p-3 bg-brand-orange/10 rounded-full w-fit mx-auto mb-4">
              <Truck className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark mb-2">Multiple Couriers</h3>
            <p className="text-brand-gray text-sm">PostNet, Courier Guy & Pep Paxi</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="p-3 bg-brand-orange/10 rounded-full w-fit mx-auto mb-4">
              <Clock className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark mb-2">Fast Delivery</h3>
            <p className="text-brand-gray text-sm">1-3 working days delivery</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="p-3 bg-brand-orange/10 rounded-full w-fit mx-auto mb-4">
              <MapPin className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark mb-2">Gauteng Coverage</h3>
            <p className="text-brand-gray text-sm">Cash on Delivery available</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <div className="p-3 bg-brand-orange/10 rounded-full w-fit mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark mb-2">Flexible Payment</h3>
            <p className="text-brand-gray text-sm">R300 COD fee applies</p>
          </Card>
        </div>

        <div className="bg-gradient-primary text-white p-8 rounded-2xl text-center shadow-hover">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-lg mb-6 text-white/90">
            Contact us via WhatsApp for instant quotes and to place your order
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <span>📱 0717273856</span>
            <span>📱 0606104516</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;