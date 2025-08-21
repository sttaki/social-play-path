import { Heart, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface GameCardProps {
  title: string;
  cover: string;
  rating: number;
  releaseDate?: string;
  genre: string;
  platform: string;
  isWishlisted?: boolean;
  isUpcoming?: boolean;
  onWishlistToggle?: (title: string, isWishlisted: boolean) => void;
  onReminderToggle?: (title: string, hasReminder: boolean) => void;
  hasReminder?: boolean;
}

export function GameCard({ 
  title, 
  cover, 
  rating, 
  releaseDate, 
  genre, 
  platform, 
  isWishlisted = false,
  isUpcoming = false,
  onWishlistToggle,
  onReminderToggle,
  hasReminder = false
}: GameCardProps) {
  const { toast } = useToast();

  const handleWishlistClick = () => {
    const newWishlistState = !isWishlisted;
    onWishlistToggle?.(title, newWishlistState);
    
    toast({
      title: newWishlistState ? "Dodato na wishlist! ❤️" : "Uklonjeno sa wishlist",
      description: `${title} je ${newWishlistState ? 'dodato na' : 'uklonjeno sa'} vašu listu želja.`,
    });
  };

  const handleReminderClick = () => {
    const newReminderState = !hasReminder;
    onReminderToggle?.(title, newReminderState);
    
    toast({
      title: newReminderState ? "Podsetnik postavljen! 📅" : "Podsetnik uklonjen",
      description: `${newReminderState ? 'Podsetićemo vas kada' : 'Nećemo više da vas podsetimo za'} ${title} ${newReminderState ? 'izađe' : ''}.`,
    });
  };
  return (
    <Card className="gradient-card shadow-card border-border/50 transition-spring hover:scale-105 hover:shadow-elevated">
      <div className="relative">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button 
            size="sm" 
            variant={isWishlisted ? "default" : "secondary"} 
            className="h-8 w-8 p-0 transition-all hover:scale-110" 
            onClick={handleWishlistClick}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
          </Button>
          {isUpcoming && (
            <Button 
              size="sm" 
              variant={hasReminder ? "default" : "secondary"} 
              className="h-8 w-8 p-0 transition-all hover:scale-110"
              onClick={handleReminderClick}
            >
              <Calendar className={`h-4 w-4 ${hasReminder ? 'text-blue-500' : ''}`} />
            </Button>
          )}
        </div>
        {isUpcoming && (
          <Badge className="absolute bottom-2 left-2 gradient-primary">
            Uskoro
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <Badge variant="secondary">{genre}</Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{platform}</span>
          {releaseDate && (
            <span className="text-sm text-muted-foreground">{releaseDate}</span>
          )}
        </div>
      </div>
    </Card>
  );
}