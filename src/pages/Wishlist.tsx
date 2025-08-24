import { Heart, Calendar, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { Badge } from "@/components/ui/badge";
import { useGameActions } from "@/hooks/useGameActions";

const wishlistGames = [
  {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 9.2,
    genre: "RPG",
    platform: "PC, PS5, Xbox",
    isWishlisted: true,
  },
  {
    id: 2,
    title: "Grand Theft Auto VI",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    rating: 9.8,
    releaseDate: "2025",
    genre: "Action",
    platform: "PS5, Xbox, PC",
    isUpcoming: true,
    isWishlisted: true,
    trailerUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  },
  {
    id: 3,
    title: "Elder Scrolls VI",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 9.5,
    releaseDate: "TBA",
    genre: "RPG",
    platform: "PC, Xbox",
    isUpcoming: true,
    isWishlisted: true,
  },
];

export default function Wishlist() {
  const { toggleWishlist, toggleReminder, getGameState } = useGameActions();
  
  return (
    <div className="min-h-screen p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 gradient-primary bg-clip-text text-transparent">
          Moja Wishlist
        </h1>
        <p className="text-muted-foreground">
          Pratite igre koje čekate i nikad ne propustite datum izlaska
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="gradient-card p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary">{wishlistGames.length}</div>
          <div className="text-sm text-muted-foreground">Ukupno igara</div>
        </div>
        <div className="gradient-card p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary">
            {wishlistGames.filter(g => g.isUpcoming).length}
          </div>
          <div className="text-sm text-muted-foreground">Uskoro</div>
        </div>
        <div className="gradient-card p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary">
            {wishlistGames.filter(g => !g.isUpcoming).length}
          </div>
          <div className="text-sm text-muted-foreground">Dostupne</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Dodaj u kalendar
        </Button>
        <Button variant="outline" size="sm">
          <Heart className="h-4 w-4 mr-2" />
          Sortiranje
        </Button>
        <Button variant="outline" size="sm">
          <Trash2 className="h-4 w-4 mr-2" />
          Očisti listu
        </Button>
      </div>

      {/* Games List */}
      <div className="space-y-4">
        {wishlistGames.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vaša wishlist je prazna</h3>
            <p className="text-muted-foreground mb-4">
              Dodajte igre koje želite da pratite
            </p>
            <Button>Pronađite igre</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {wishlistGames.map((game) => {
              const gameState = getGameState(game.title);
              return (
                <GameCard 
                  key={game.id} 
                  {...game} 
                  isWishlisted={gameState.isWishlisted !== undefined ? gameState.isWishlisted : game.isWishlisted}
                  hasReminder={gameState.hasReminder}
                  onWishlistToggle={toggleWishlist}
                  onReminderToggle={toggleReminder}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}