import { ArrowLeftIcon, Camera, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddProduct() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f7] pb-20">
      <header className="flex items-center pt-4 pb-2 px-4 relative w-full bg-[#fcf9f7]">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 p-0 absolute left-4" 
          onClick={() => setLocation("/home")}
          data-testid="button-back"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#1c110c]" />
        </Button>

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg text-center tracking-[0] leading-[23px]">
            Add Product
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 max-w-[480px] mx-auto w-full px-4 mt-6 gap-4">
        <div className="flex flex-col gap-1">
          <Input 
            placeholder="Product Name" 
            className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] placeholder:text-[#966b4f]"
            data-testid="input-product-name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Textarea 
            placeholder="Description" 
            className="bg-[#f2ede8] border-none rounded-2xl min-h-[160px] p-4 text-[#1c110c] placeholder:text-[#966b4f] resize-none"
            data-testid="textarea-description"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Select>
            <SelectTrigger className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] data-[placeholder]:text-[#966b4f]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <Input 
            placeholder="Price" 
            type="number"
            className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] placeholder:text-[#966b4f]"
            data-testid="input-price"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Select>
            <SelectTrigger className="bg-[#f2ede8] border-none rounded-2xl h-14 px-4 text-[#1c110c] data-[placeholder]:text-[#966b4f]">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-lg mb-4">
            Add Photos
          </h2>
          <div className="border-2 border-dashed border-[#d4a088] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-transparent">
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#1c110c] text-base mb-2">
              Tap to add photos
            </h3>
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#966b4f] text-sm mb-6 max-w-[240px]">
              Showcase your product with high-quality images.
            </p>
            <Button className="bg-[#f2ede8] text-[#1c110c] hover:bg-[#e8c4b8] rounded-2xl px-8 h-12 no-default-hover-elevate" data-testid="button-add-photos">
              Add Photos
            </Button>
          </div>
        </div>

        <Button 
          className="w-full bg-[#e87a30] hover:bg-[#d66a20] text-white rounded-2xl h-14 mt-6 font-bold text-lg no-default-hover-elevate"
          data-testid="button-save-publish"
        >
          Save & Publish
        </Button>
      </div>

      <BottomNavigation />
    </div>
  );
}
