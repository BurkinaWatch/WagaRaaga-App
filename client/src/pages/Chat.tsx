import { useQuery } from "@tanstack/react-query";
import { useLocation, Link, useParams } from "wouter";
import { ChevronLeft, Phone, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import type { Message, Conversation } from "@shared/schema";
import { cn } from "@/lib/utils";

export default function Chat() {
  const params = useParams() as any;
  const id = params?.id;

  const { data: conversation } = useQuery<Conversation>({
    queryKey: [`/api/conversations/${id}`],
  });

  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: [`/api/conversations/${id}/messages`],
  });

  return (
    <div className="flex flex-col h-screen bg-[#fcf9f7]">
      <header className="flex items-center justify-between p-4 bg-[#fcf9f7] border-b border-transparent">
        <Link href="/messages">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold flex-1 text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
          {conversation?.participant2Name || "Chat"}
        </h1>
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-20 w-3/4 rounded-2xl" />
            <Skeleton className="h-20 w-3/4 rounded-2xl ml-auto" />
          </div>
        ) : (
          messages?.map((msg) => {
            const isMe = msg.senderId === "demo";
            return (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col gap-1 max-w-[85%]",
                  isMe ? "ml-auto items-end" : "mr-auto items-start"
                )}
              >
                <span className="text-xs text-muted-foreground px-1">
                  {isMe ? "You" : conversation?.participant2Name}
                </span>
                <div className="flex items-end gap-2">
                  {!isMe && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={conversation?.participant2Avatar} />
                      <AvatarFallback>{conversation?.participant2Name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "px-4 py-3 rounded-2xl text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] whitespace-pre-wrap",
                      isMe
                        ? "bg-[#e87a30] text-white rounded-br-none"
                        : "bg-[#f2ede8] text-[#1c110c] rounded-bl-none"
                    )}
                  >
                    {msg.content}
                  </div>
                  {isMe && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            );
          })
        )}
      </main>

      <div className="px-4 pb-4">
        <div className="relative">
          <Input
            placeholder="Write a message"
            className="bg-[#f2ede8] border-none rounded-2xl h-12 pr-12 text-[#1c110c] placeholder:text-[#966b4f] [font-family:'Plus_Jakarta_Sans',Helvetica]"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#966b4f]"
          >
            <ImageIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
