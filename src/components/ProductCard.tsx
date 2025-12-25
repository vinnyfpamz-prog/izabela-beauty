import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import { ProductImageModal } from "./ProductImageModal";

interface ProductCardProps {
  name: string;
  price?: string;
  description: string;
  image: string;
  benefits?: string[];
  category?: string;
  onBuyClick: () => void;
}

export const ProductCard = ({
  name,
  price,
  description,
  image,
  benefits = [],
  category,
  onBuyClick,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg card-shadow animate-fade-in">
      <CardHeader className="p-0">
        <ProductImageModal image={image} name={name}>
          <div className="relative aspect-square overflow-hidden bg-muted cursor-pointer">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {category && (
              <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                {category}
              </Badge>
            )}
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold">4.9</span>
            </div>
          </div>
        </ProductImageModal>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        {benefits.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onBuyClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Quero esse
        </Button>
      </CardFooter>
    </Card>
  );
};
