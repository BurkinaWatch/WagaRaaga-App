import { ArrowLeftIcon, CameraIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formFields = [
  { id: "fullName", placeholder: "Full Name", type: "input" },
  { id: "email", placeholder: "Email", type: "input" },
  { id: "phoneNumber", placeholder: "Phone Number", type: "input" },
];

const socialIcons = [
  { alt: "Social icon 1" },
  { alt: "Social icon 2" },
  { alt: "Social icon 3" },
];

export default function SignUp() {
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
            Sign Up
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full">
        <div className="flex h-20 items-center gap-4 px-4 py-0 relative w-full bg-[#fcf9f7]">
          <div className="relative w-12 h-12 bg-[#f2ede8] rounded-full flex items-center justify-center">
            <CameraIcon className="w-6 h-6 text-[#966b4f]" />
          </div>

          <div className="flex flex-col items-start relative flex-1 grow">
            <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c110c] text-base tracking-[0] leading-6">
              Upload Profile Picture
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          {formFields.map((field) => (
            <div key={field.id} className="w-full">
              <Input
                placeholder={field.placeholder}
                className="h-16 bg-[#f2ede8] border-0 rounded-2xl text-[#1c110c] placeholder:text-[#966b4f] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base px-6 focus-visible:ring-1 focus-visible:ring-[#e87a30]"
              />
            </div>
          ))}

          <div className="mt-4">
            <Button className="w-full h-14 bg-[#e87a30] hover:bg-[#d66a20] rounded-2xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#fcf9f7] text-lg transition-colors">
              Sign Up
            </Button>
          </div>

          <div className="flex flex-col items-center mt-2">
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm text-center">
              Already have an account?{" "}
              <Link href="/">
                <span className="text-[#1c110c] font-semibold cursor-pointer hover:underline">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pb-10 flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-4">
            {socialIcons.map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-[#f2ede8] rounded-2xl flex items-center justify-center hover:bg-[#e8e2dd] cursor-pointer transition-colors"
              >
                <div className="w-6 h-6 bg-[#966b4f] rounded-lg" />
              </div>
            ))}
          </div>

          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm text-center">
            @2024 WagaRaaga
          </p>
        </div>
      </div>
    </div>
  );
};
