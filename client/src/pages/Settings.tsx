import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";

const settingsGroups = [
  {
    title: "Account",
    items: [
      {
        label: "Email",
        subLabel: "Update your email address",
        href: "/settings/email",
      },
      {
        label: "Password",
        subLabel: "Change your password",
        href: "/settings/password",
      },
      {
        label: "Phone Number",
        subLabel: "Update your phone number",
        href: "/settings/phone",
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        label: "Language",
        subLabel: "Choose your preferred language",
        href: "/settings/language",
      },
      {
        label: "Notifications",
        subLabel: "Manage your notification settings",
        href: "/settings/notifications",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help Center",
        subLabel: "Get help and support",
        href: "/settings/help",
      },
      {
        label: "Contact Us",
        subLabel: "Contact us for assistance",
        href: "/settings/contact",
      },
    ],
  },
];

export default function Settings() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-20">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="h-12 w-12 p-0 absolute left-4" data-testid="button-back">
            <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Settings
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4 mt-6">
        {settingsGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-8 last:mb-0">
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
              {group.title}
            </h2>
            <div className="flex flex-col gap-2">
              {group.items.map((item, itemIdx) => (
                <Link key={itemIdx} href={item.href}>
                  <div 
                    className="flex items-center justify-between p-4 bg-transparent hover:bg-[#f2ede8] rounded-2xl cursor-pointer transition-colors group"
                    data-testid={`link-settings-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex flex-col">
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1c110c] text-base">
                        {item.label}
                      </span>
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                        {item.subLabel}
                      </span>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-[#1c110c]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}
