import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

const reservations = {
  upcoming: [
    {
      id: 1,
      name: "Handwoven Basket",
      seller: "Aisha",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 2,
      name: "Kente Cloth",
      seller: "Kwame",
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1590736962002-8686a347895e?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 3,
      name: "Beaded Necklace",
      seller: "Fatima",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=100",
    },
  ],
  past: [
    {
      id: 4,
      name: "Carved Mask",
      seller: "Musa",
      status: "Cancelled",
      image: "https://images.unsplash.com/photo-1549488497-2567954000cf?auto=format&fit=crop&q=80&w=100",
    },
  ],
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    Pending: "text-[#966b4f]",
    Confirmed: "text-[#1c110c]",
    Cancelled: "text-[#966b4f]",
  };

  return (
    <span className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-sm ${styles[status] || "text-[#966b4f]"}`}>
      {status}
    </span>
  );
};

export default function MyReservations() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 p-0 absolute left-4" 
          onClick={() => setLocation("/profile")}
          data-testid="button-back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
        </Button>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            My Reservations
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 mt-6">
        <section className="mb-8">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Upcoming
          </h2>
          <div className="flex flex-col gap-6">
            {reservations.upcoming.map((res) => (
              <div key={res.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f2ede8]">
                    <img src={res.image} alt={res.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">{res.name}</span>
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm leading-tight">Seller: {res.seller}</span>
                  </div>
                </div>
                <StatusBadge status={res.status} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Past
          </h2>
          <div className="flex flex-col gap-6">
            {reservations.past.map((res) => (
              <div key={res.id} className="flex items-center justify-between opacity-70">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden grayscale bg-[#f2ede8]">
                    <img src={res.image} alt={res.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">{res.name}</span>
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm leading-tight">Seller: {res.seller}</span>
                  </div>
                </div>
                <StatusBadge status={res.status} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}
