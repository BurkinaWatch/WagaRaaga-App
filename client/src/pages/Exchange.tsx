import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function Exchange() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-20">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Link href="/home">
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

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4">
        <div className="flex flex-col items-center justify-center flex-1">
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-base text-center">
            Exchange coming soon
          </p>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
