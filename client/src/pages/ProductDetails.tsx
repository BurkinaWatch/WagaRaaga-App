import { ArrowLeftIcon, Share2, Heart, MessageCircle, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const product = {
  id: "basket-1",
  name: "Handwoven Market Basket",
  description: "This vibrant, handwoven basket is perfect for carrying goods or adding a touch of African artistry to your home. Made with natural fibers and dyed with traditional techniques.",
  image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=600",
  seller: {
    name: "Aisha's Crafts",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100",
  },
  stats: {
    likes: 23,
    comments: 5,
    shares: 12,
    bookmarks: 8,
  },
  comments: [
    {
      id: 1,
      user: "Kwame",
      time: "2d",
      content: "Beautiful basket! The colors are stunning.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 2,
      user: "----",
      time: "1d",
      content: "hhv",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    },
  ],
};

export default function ProductDetails() {
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
            Product Details
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto">
        <div className="w-full aspect-square bg-[#f2ede8] overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-2xl">
              {product.name}
            </h2>
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">
              Seller
            </h3>
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={product.seller.avatar} />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
                  {product.seller.name}
                </span>
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                  {product.seller.location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-y border-[#f2ede8]">
            <div className="flex items-center gap-1.5">
              <Heart className="w-5 h-5 text-[#966b4f]" />
              <span className="text-[#966b4f] text-sm">{product.stats.likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-5 h-5 text-[#966b4f]" />
              <span className="text-[#966b4f] text-sm">{product.stats.comments}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Share2 className="w-5 h-5 text-[#966b4f]" />
              <span className="text-[#966b4f] text-sm">{product.stats.shares}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bookmark className="w-5 h-5 text-[#966b4f]" />
              <span className="text-[#966b4f] text-sm">{product.stats.bookmarks}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg">
              Comments
            </h3>
            <div className="flex flex-col gap-4">
              {product.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-sm">
                        {comment.user}
                      </span>
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-xs">
                        {comment.time}
                      </span>
                    </div>
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-sm">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 left-0 right-0 px-4 py-3 bg-[#fcf9f7] border-t border-[#f2ede8] z-10">
        <div className="max-w-[480px] mx-auto flex gap-3">
          <Link href="/reservation-confirmed" className="flex-1">
            <Button variant="ghost" className="w-full bg-[#f2ede8] text-[#1c110c] rounded-2xl h-12 font-bold no-default-hover-elevate">
              Reserve
            </Button>
          </Link>
          <Link href="/confirm-payment" className="flex-[2]">
            <Button className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-12 font-bold no-default-hover-elevate">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
