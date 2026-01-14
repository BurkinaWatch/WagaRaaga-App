import { ArrowLeftIcon, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const exchangeOffer = {
  id: "ex-1",
  trader: {
    name: "Aisha",
    role: "Trader",
    rating: 4.8,
    reviews: 120,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150",
  },
  item: {
    name: "Handwoven Basket",
    image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=100",
  },
  value: "$50",
  desiredExchange: "Beaded Jewelry",
  location: "Accra",
  description: "I'm offering a handwoven basket in exchange for beaded jewelry. The basket is made with traditional techniques and high-quality materials. I'm open to discussing different styles and values of jewelry.",
};

export default function ExchangeDetails() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 p-0 absolute left-4" 
          onClick={() => setLocation("/exchange")}
          data-testid="button-back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
        </Button>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Exchange Details
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 mt-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Avatar className="w-32 h-32 border-4 border-white shadow-sm">
            <AvatarImage src={exchangeOffer.trader.avatar} />
            <AvatarFallback><User className="w-16 h-16" /></AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center">
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-2xl">
              {exchangeOffer.trader.name}
            </h2>
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-base">
              {exchangeOffer.trader.role}
            </p>
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
              {exchangeOffer.trader.rating} • {exchangeOffer.trader.reviews} reviews
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl">
            Exchange Offer
          </h3>

          <div className="flex items-center gap-4 p-3 bg-white rounded-2xl shadow-sm border border-[#f2ede8]">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f2ede8]">
              <img src={exchangeOffer.item.image} alt={exchangeOffer.item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-sm uppercase tracking-wider opacity-60">
                Item
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-base">
                {exchangeOffer.item.name}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#f2ede8]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base opacity-80">Value</span>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">{exchangeOffer.value}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#f2ede8]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base opacity-80">Desired Exchange</span>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">{exchangeOffer.desiredExchange}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-[#f2ede8]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base opacity-80">Location</span>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">{exchangeOffer.location}</span>
          </div>

          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base leading-relaxed mt-2">
            {exchangeOffer.description}
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Button 
            className="flex-1 bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 font-bold text-lg no-default-hover-elevate"
            data-testid="button-contact"
          >
            Contact
          </Button>
          <Button 
            variant="ghost"
            className="flex-1 bg-[#f2ede8] text-[#1c110c] rounded-2xl h-14 font-bold text-lg no-default-hover-elevate"
            data-testid="button-express-interest"
          >
            Express Interest
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
