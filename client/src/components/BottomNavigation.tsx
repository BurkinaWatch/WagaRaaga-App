import { Home, ArrowLeftRight, Banknote, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: ArrowLeftRight, label: "Exchange", path: "/exchange" },
  { icon: Banknote, label: "Loan", path: "/loan" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNavigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#fcf9f7] border-t border-[#f2ede8] px-4 py-2">
      <div className="flex items-center justify-around max-w-[480px] mx-auto">
        {navItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} href={item.path}>
              <button className="flex flex-col items-center gap-1 py-2 px-3">
                <Icon 
                  className={`w-6 h-6 ${isActive ? "text-[#e87a30]" : "text-[#966b4f]"}`} 
                />
                <span 
                  className={`[font-family:'Plus_Jakarta_Sans',Helvetica] text-xs ${
                    isActive ? "text-[#e87a30] font-semibold" : "text-[#966b4f] font-normal"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
