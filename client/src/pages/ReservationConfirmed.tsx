import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function ReservationConfirmed() {
  const [, setLocation] = useLocation();

  const reservationDetails = {
    product: "Handwoven Basket",
    seller: "Aisha's Crafts",
    date: "July 20, 2024",
    time: "2:00 PM",
    image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=600",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 p-0 absolute left-4" 
          onClick={() => setLocation("/")}
          data-testid="button-back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
        </Button>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Reservation Confirmed
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 mt-6">
        <div className="w-full aspect-square bg-white rounded-3xl p-6 shadow-sm mb-8 border border-[#f2ede8]">
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img 
              src={reservationDetails.image} 
              alt={reservationDetails.product} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-2xl mb-3 leading-tight">
            Your reservation has been successfully placed!
          </h2>
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-base leading-relaxed">
            You'll receive a notification when the seller confirms your reservation.
          </p>
        </div>

        <section className="flex flex-col gap-5 mb-10">
          <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">
            Reservation Details
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">Product</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">{reservationDetails.product}</span>
            </div>

            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">Seller</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">{reservationDetails.seller}</span>
            </div>

            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">Date</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">{reservationDetails.date}</span>
            </div>

            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">Time</span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">{reservationDetails.time}</span>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3">
          <Button 
            className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 font-bold text-lg no-default-hover-elevate"
            onClick={() => setLocation("/my-reservations")}
            data-testid="button-view-reservation"
          >
            View Reservation
          </Button>
          <Button 
            variant="ghost"
            className="w-full bg-[#f2ede8] text-[#1c110c] rounded-2xl h-14 font-bold text-lg no-default-hover-elevate"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            Back to Home
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
