import { ChevronLeft, Search, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNavigation } from "@/components/BottomNavigation";

const faqItems = [
  {
    title: "General Inquiries",
    description: "Find answers to common questions",
  },
  {
    title: "Payment Support",
    description: "Learn about our payment methods",
  },
  {
    title: "Order Assistance",
    description: "Get help with your orders",
  },
];

const contactItems = [
  {
    title: "Contact Form",
    description: "Submit a support request",
  },
  {
    title: "Social Media Support",
    description: "Connect with us on social media",
  },
];

export default function HelpSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-24">
      <header className="flex items-center justify-between p-4 bg-[#fcf9f7]">
        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6 text-[#1c110c]" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold flex-1 text-center mr-10 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#1c110c]">
          Help & Support
        </h1>
      </header>

      <main className="flex-1 px-4 overflow-y-auto">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#966b4f]" />
          <Input
            placeholder="Search for help"
            className="bg-[#f2ede8] border-none rounded-2xl h-14 pl-12 pr-4 text-[#1c110c] placeholder:text-[#966b4f] [font-family:'Plus_Jakarta_Sans',Helvetica]"
          />
        </div>

        <section className="mb-8">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.title} className="flex items-center justify-between group cursor-pointer">
                <div className="flex flex-col">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1c110c]" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Contact Us
          </h2>
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-center justify-between group cursor-pointer">
                <div className="flex flex-col">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1c110c]" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}
