import { Heart, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  title: string;
  cover: string;
  rating: number;
  releaseDate?: string;
  genre: string;
  platform: string;
  isWishlisted?: boolean;
  isUpcoming?: boolean;
}

export function GameCard({ 
  title, 
  cover, 
  rating, 
  releaseDate, 
  genre, 
  platform, 
  isWishlisted = false,
  isUpcoming = false 
}: GameCardProps) {
  return (
    <Card className="gradient-card shadow-card border-border/50 transition-spring hover:scale-105 hover:shadow-elevated">
      <div className="relative">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button size="sm" variant={isWishlisted ? "default" : "secondary"} className="h-8 w-8 p-0">
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          {isUpcoming && (
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Calendar className="h-4 w-4" />
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