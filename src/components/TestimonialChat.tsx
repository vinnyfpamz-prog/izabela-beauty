import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialChatProps {
  name: string;
  message: string;
  avatar?: string;
  rating?: number;
}

export const TestimonialChat = ({
  name,
  message,
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=",
  rating = 5,
}: TestimonialChatProps) => {
  return (
    <div className="animate-slide-up">
      {/* Message bubble */}
      <div className="flex items-start gap-3 px-4">
        <img
          src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
          alt={name}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-secondary object-cover"
        />
        <Card className="flex-1 bg-secondary/10 border-secondary/20">
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-primary text-sm">{name}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{message}</p>
            <span className="mt-2 block text-xs text-muted-foreground">
              {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};
