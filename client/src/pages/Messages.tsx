import { ArrowLeftIcon, Bell, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

const notifications = [
  {
    id: 1,
    type: "Market Update",
    content: "New products from local artisans",
    time: "2h",
    icon: Bell,
  },
  {
    id: 2,
    type: "Reservation",
    content: "Your reservation at the Spice Merchant is confirmed",
    time: "4h",
    icon: Calendar,
  },
  {
    id: 3,
    type: "Message",
    content: "A new message from Aisha",
    time: "6h",
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "Market Update",
    content: "Explore new crafts from local artisans",
    time: "1d",
    icon: Bell,
  },
  {
    id: 5,
    type: "Reservation",
    content: "Your reservation at the Weaver's Cafe is confirmed",
    time: "2d",
    icon: Calendar,
  },
  {
    id: 6,
    type: "Message",
    content: "A new message from Kwame",
    time: "3d",
    icon: MessageSquare,
  },
];

export default function Messages() {
  const [, setLocation] = useLocation();

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
            Notifications
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 mt-6">
        <div className="flex flex-col gap-6">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div key={notif.id} className="flex items-start gap-4 cursor-pointer group hover-elevate p-2 rounded-2xl transition-all">
                <div className="w-12 h-12 bg-[#f2ede8] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#1c110c]" />
                </div>
                <div className="flex flex-col flex-1 gap-0.5">
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
                      {notif.type}
                    </span>
                    <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                      {notif.time}
                    </span>
                  </div>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm leading-snug">
                    {notif.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
