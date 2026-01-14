import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Exchange() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-20">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Link href="/">
          <Button variant="ghost" size="icon" className="h-12 w-12 p-0 absolute left-4">
            <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Exchange
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4 mt-6">
        <Link href="/post-exchange">
          <Button className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 font-bold text-lg no-default-hover-elevate">
            Post New Trade
          </Button>
        </Link>
        
        <div className="mt-8 flex flex-col gap-4">
          <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl">
            Recent Offers
          </h3>
          <Link href="/exchange-details/ex-1">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-[#f2ede8] cursor-pointer hover-elevate transition-all">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f2ede8]">
                <img src="https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=100" alt="Item" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">Handwoven Basket</span>
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">Offered by Aisha • Accra</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
