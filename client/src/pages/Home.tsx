import { BottomNavigation } from "@/components/BottomNavigation";
import { Search, ShoppingCart, Plus, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["All", "Fashion", "Food", "Handicrafts", "Electronics"];

const trendingProducts = [
  {
    id: 1,
    name: "Vibrant Ankara Prints",
    image: "https://images.unsplash.com/photo-1590736962002-8686a347895e?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "Hand-Carved Masks",
    image: "https://images.unsplash.com/photo-1549488497-2567954000cf?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    name: "Exotic Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300",
  },
];

const activeZones = [
  {
    id: 1,
    name: "Bustling Market Square",
    description: "Explore the heart of the market",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "Artisan Alley",
    description: "Discover unique handcrafted goods",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=300",
  },
];

const reservations = [
  {
    id: 1,
    name: "Basket Weaving Workshop",
    description: "Reserve your spot",
    image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "Ankara Sewing Session",
    description: "Book your session",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=300",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center justify-between pt-6 pb-4 px-4 w-full bg-[#fcf9f7]">
        <div className="flex-1 text-center ml-12">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl tracking-tight">
            Marketplace
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Bell className="w-6 h-6 text-[#1c110c]" />
            </Button>
          </Link>
          <Link href="/add-product">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Plus className="w-6 h-6 text-[#1c110c]" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ShoppingCart className="w-6 h-6 text-[#1c110c]" />
          </Button>
        </div>
      </header>

      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#966b4f]" />
          <Input 
            placeholder="Search for products" 
            className="bg-[#f2ede8] border-none rounded-2xl h-14 pl-12 pr-4 text-[#1c110c] placeholder:text-[#966b4f]"
          />
        </div>
      </div>

      <div className="flex overflow-x-auto gap-3 px-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <Button 
            key={cat} 
            variant="ghost" 
            className={`rounded-xl h-10 px-6 whitespace-nowrap bg-[#f2ede8] text-[#1c110c] font-semibold text-sm hover:bg-[#e8c4b8] no-default-hover-elevate ${
              cat === "All" ? "bg-[#e87a30] text-white hover:bg-[#e87a30]" : ""
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      <main className="flex-1 flex flex-col gap-10 px-4">
        {/* Trending Products */}
        <section>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl mb-4">
            Trending Products
          </h2>
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            {trendingProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="min-w-[160px] flex flex-col gap-2 cursor-pointer group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#f2ede8]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-sm line-clamp-2">
                    {product.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Active Zones */}
        <section>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl mb-4">
            Active Zones
          </h2>
          <div className="flex flex-col gap-4">
            {activeZones.map((zone) => (
              <div key={zone.id} className="flex items-center gap-4 bg-transparent rounded-2xl">
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
                    {zone.name}
                  </h3>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                    {zone.description}
                  </p>
                  <Button variant="ghost" className="bg-[#f2ede8] text-[#1c110c] rounded-xl h-9 px-6 w-fit mt-1 text-sm no-default-hover-elevate">
                    View
                  </Button>
                </div>
                <div className="w-32 h-24 rounded-2xl overflow-hidden bg-[#f2ede8]">
                  <img src={zone.image} alt={zone.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reservations */}
        <section>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl mb-4">
            Reservations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {reservations.map((res) => (
              <div key={res.id} className="flex flex-col gap-2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#f2ede8]">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-sm">
                    {res.name}
                  </span>
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-xs">
                    {res.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}
