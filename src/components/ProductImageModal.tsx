import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ProductImageModalProps {
  image: string;
  name: string;
  children: React.ReactNode;
}

export const ProductImageModal = ({ image, name, children }: ProductImageModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain max-h-[90vh]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
