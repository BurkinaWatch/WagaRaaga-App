import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const productDetails = {
  name: "Artisan Craft",
  subName: "Handwoven Basket",
  price: 25.00,
  quantity: 1,
  image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=100",
};

export default function ConfirmPayment() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 p-0 absolute left-4" 
          onClick={() => window.history.back()}
          data-testid="button-back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
        </Button>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Confirm Payment
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 mt-6">
        <section className="mb-8">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Product Details
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#f2ede8]">
              <img src={productDetails.image} alt={productDetails.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">{productDetails.name}</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">{productDetails.subName}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-base">Price</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">${productDetails.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-base">Quantity</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">{productDetails.quantity}</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Payment Method
          </h2>
          <RadioGroup defaultValue="credit-card" className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#f2ede8] shadow-sm">
              <Label htmlFor="credit-card" className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-base flex-1 cursor-pointer">
                Credit Card
              </Label>
              <RadioGroupItem value="credit-card" id="credit-card" className="border-[#e87a30] text-[#e87a30]" />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#f2ede8] shadow-sm">
              <Label htmlFor="mobile-money" className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-base flex-1 cursor-pointer">
                Mobile Money
              </Label>
              <RadioGroupItem value="mobile-money" id="mobile-money" className="border-[#e87a30] text-[#e87a30]" />
            </div>
          </RadioGroup>
        </section>

        <div className="mt-auto mb-4">
          <Button 
            className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 font-bold text-lg no-default-hover-elevate"
            onClick={() => setLocation("/")}
            data-testid="button-confirm-purchase"
          >
            Confirm Purchase
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
