import { ArrowLeftIcon, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7]">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Link href="/">
          <Button variant="ghost" size="icon" className="h-12 w-12 p-0 absolute left-4">
            <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Log In
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full">
        <div className="flex flex-col gap-4 p-4 mt-4">
          <div className="w-full">
            <Input
              type="email"
              placeholder="Email"
              className="h-16 bg-[#f2ede8] border-0 rounded-2xl text-[#1c110c] placeholder:text-[#966b4f] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base px-6 focus-visible:ring-1 focus-visible:ring-[#e87a30]"
            />
          </div>
          <div className="w-full">
            <Input
              type="password"
              placeholder="Password"
              className="h-16 bg-[#f2ede8] border-0 rounded-2xl text-[#1c110c] placeholder:text-[#966b4f] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base px-6 focus-visible:ring-1 focus-visible:ring-[#e87a30]"
            />
          </div>

          <div className="flex justify-start px-2">
            <button className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm hover:underline transition-all">
              Forgot Password?
            </button>
          </div>

          <div className="mt-4">
            <Button className="w-full h-14 bg-[#e87a30] hover:bg-[#d66a20] rounded-2xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#fcf9f7] text-lg transition-colors">
              Log In
            </Button>
          </div>

          <div className="flex flex-col items-center mt-2">
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm text-center">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-[#1c110c] font-semibold cursor-pointer hover:underline">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pb-10 flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-6">
            <Twitter className="w-6 h-6 text-[#966b4f] cursor-pointer hover:text-[#1c110c] transition-colors" />
            <Instagram className="w-6 h-6 text-[#966b4f] cursor-pointer hover:text-[#1c110c] transition-colors" />
            <Facebook className="w-6 h-6 text-[#966b4f] cursor-pointer hover:text-[#1c110c] transition-colors" />
          </div>

          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm text-center">
            @2024 WagaRaaga
          </p>
        </div>
      </div>
    </div>
  );
}
