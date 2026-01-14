import { useQuery } from "@tanstack/react-query";
import { BottomNavigation } from "@/components/BottomNavigation";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import type { Conversation } from "@shared/schema";

export default function Messages() {
  const { data: conversations, isLoading } = useQuery<Conversation[]>({
    queryKey: ["/api/conversations"],
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center justify-between p-4 bg-[#fcf9f7]">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold flex-1 text-center mr-10 [font-family:'Plus_Jakarta_Sans',Helvetica]">Messages</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4">
        {isLoading ? (
          <div className="space-y-6 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-14 w-14 rounded-full" />
                <div className="flex-1 space-y-2 py-1">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 mt-4">
            {conversations?.map((conv) => (
              <div key={conv.id} className="flex gap-4 cursor-pointer hover-elevate rounded-xl p-1">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={conv.participant2Avatar} alt={conv.participant2Name} />
                  <AvatarFallback>{conv.participant2Name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#1c110c] [font-family:'Plus_Jakarta_Sans',Helvetica]">{conv.participant2Name}</h3>
                  </div>
                  <p className="text-sm text-[#966b4f] line-clamp-2 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    {conv.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}
