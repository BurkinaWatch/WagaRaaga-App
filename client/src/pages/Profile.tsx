import { ArrowLeftIcon, Mail, Phone, MapPin, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

const mockUser = {
  name: "Fatou Diop",
  username: "@fatoudiop",
  id: "987654321",
  avatar: null,
  email: "fatou.diop@email.com",
  phone: "+221 77 987 65 43",
  location: "Dakar, Senegal",
};

export default function Profile() {
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
            Profile
          </h1>
        </div>

        <Link href="/settings">
          <Button variant="ghost" size="icon" className="h-12 w-12 p-0 absolute right-4" data-testid="button-settings">
            <SettingsIcon className="w-6 h-6 text-[#1c110c]" />
          </Button>
        </Link>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4">
        <div className="flex flex-col items-center mt-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f5d5c8] to-[#e8c4b8] flex items-center justify-center mb-4 overflow-hidden border-4 border-[#f5d5c8]">
            {mockUser.avatar ? (
              <img 
                src={mockUser.avatar} 
                alt={mockUser.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#d4a088] to-[#c68b6e] flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e8c4b8" />
                      <stop offset="100%" stopColor="#d4a088" />
                    </linearGradient>
                    <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2c1810" />
                      <stop offset="100%" stopColor="#1a0f0a" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="38" r="22" fill="url(#skinGradient)" />
                  <ellipse cx="50" cy="25" rx="20" ry="15" fill="url(#hairGradient)" />
                  <path d="M30 30 Q25 45 30 55" stroke="url(#hairGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M70 30 Q75 45 70 55" stroke="url(#hairGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <ellipse cx="50" cy="85" rx="28" ry="25" fill="#f5f5f5" />
                </svg>
              </div>
            )}
          </div>
          
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-xl mb-1">
            {mockUser.name}
          </h2>
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm mb-1">
            {mockUser.username}
          </p>
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#e87a30] text-sm">
            ID: {mockUser.id}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
            Contact Information
          </h3>
          
          <div className="flex items-start gap-4 p-4 bg-[#f2ede8] rounded-2xl">
            <div className="w-10 h-10 bg-[#fcf9f7] rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#966b4f]" />
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-sm">
                Email
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                {mockUser.email}
              </span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-[#f2ede8] rounded-2xl">
            <div className="w-10 h-10 bg-[#fcf9f7] rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#966b4f]" />
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-sm">
                Phone
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                {mockUser.phone}
              </span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-[#f2ede8] rounded-2xl">
            <div className="w-10 h-10 bg-[#fcf9f7] rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#966b4f]" />
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-sm">
                Location
              </span>
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#e87a30] text-sm">
                {mockUser.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
