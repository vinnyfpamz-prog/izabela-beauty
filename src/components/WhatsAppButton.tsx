import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "floating";
}

export const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de saber mais sobre os produtos Dornelas.",
  className = "",
  children,
  variant = "default"
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white ${className}`}
    >
      {children || (
        <>
          <MessageCircle className="mr-2 h-5 w-5" />
          Falar no WhatsApp
        </>
      )}
    </Button>
  );
};
