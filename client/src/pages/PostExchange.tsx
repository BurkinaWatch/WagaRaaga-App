import { ArrowLeftIcon, Heart, MessageCircle, Share2, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PostExchange() {
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
            Post Trade
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4 mt-6 gap-4">
        <div className="flex flex-col gap-1">
          <Input 
            placeholder="What are you offering?" 
            className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] placeholder:text-[#966b4f]"
            data-testid="input-offering"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Textarea 
            placeholder="Description of your item" 
            className="bg-[#f2ede8] border-none rounded-2xl min-h-[160px] p-4 text-[#1c110c] placeholder:text-[#966b4f] resize-none"
            data-testid="textarea-description"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Input 
            placeholder="Price or Trade Value" 
            className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] placeholder:text-[#966b4f]"
            data-testid="input-value"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Select>
            <SelectTrigger className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] data-[placeholder]:text-[#966b4f]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="services">Services</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-2">
          <div className="w-full aspect-video rounded-2xl bg-[#f2ede8] overflow-hidden relative border border-[#f2ede8]">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg bg-white/80 px-4 py-1 rounded-full">
                Accra
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 border-y border-[#f2ede8]">
          <div className="flex items-center gap-1.5">
            <Heart className="w-5 h-5 text-[#966b4f]" />
            <span className="text-[#966b4f] text-sm font-semibold">12</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-5 h-5 text-[#966b4f]" />
            <span className="text-[#966b4f] text-sm font-semibold">5</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Share2 className="w-5 h-5 text-[#966b4f]" />
            <span className="text-[#966b4f] text-sm font-semibold">3</span>
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer">
            <Phone className="w-5 h-5 text-[#966b4f]" />
            <span className="text-[#966b4f] text-sm font-bold">Share</span>
          </div>
        </div>

        <Button 
          className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 mt-4 font-bold text-lg no-default-hover-elevate"
          data-testid="button-post-offer"
        >
          Post Offer
        </Button>
      </div>

      <BottomNavigation />
    </div>
  );
}
