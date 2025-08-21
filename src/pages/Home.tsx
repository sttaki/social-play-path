import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { useGameActions } from "@/hooks/useGameActions";
import heroImage from "@/assets/gaming-hero.jpg";

const featuredGames = [
  {
    id: 1,
    title: "Counter-Strike 2",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 9.2,
    genre: "FPS",
    platform: "PC, Steam",
    isWishlisted: true,
  },
  {
    id: 2,
    title: "Call of Duty: Modern Warfare III",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 8.8,
    genre: "FPS",
    platform: "PC, PS5, Xbox",
  },
  {
    id: 3,
    title: "The Legend of Zelda: Tears of the Kingdom",
    cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop",
    rating: 9.6,
    genre: "Adventure",
    platform: "Nintendo Switch",
  },
];

const upcomingGames = [
  {
    id: 4,
    title: "Call of Duty: Black Ops 6",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    rating: 9.1,
    releaseDate: "29. august 2024",
    genre: "FPS",
    platform: "PC, PS5, Xbox",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Grand Theft Auto VI",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 9.8,
    releaseDate: "2025",
    genre: "Action",
    platform: "PS5, Xbox, PC",
    isUpcoming: true,
  },
];

export default function Home() {
  const { toggleWishlist, toggleReminder, getGameState } = useGameActions();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-gradient-hero flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-2 glow-primary">GameTrack</h1>
          <p className="text-lg opacity-90">Pratite svoje omiljene igre</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Pretraži igre..." 
            className="pl-10 bg-card/50 backdrop-blur border-border/50"
          />
        </div>

        {/* Top Games */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Najbolje ocenjene
            </h2>
            <Button variant="ghost" size="sm">Vidi sve</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {featuredGames.map((game) => {
              const gameState = getGameState(game.title);
              return (
                <GameCard 
                  key={game.id} 
                  {...game} 
                  isWishlisted={gameState.isWishlisted || game.isWishlisted}
                  hasReminder={gameState.hasReminder}
                  onWishlistToggle={toggleWishlist}
                  onReminderToggle={toggleReminder}
                />
              );
            })}
          </div>
        </section>

        {/* Upcoming Games */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Uskoro
            </h2>
            <Button variant="ghost" size="sm">Vidi sve</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {upcomingGames.map((game) => {
              const gameState = getGameState(game.title);
              return (
                <GameCard 
                  key={game.id} 
                  {...game} 
                  isWishlisted={gameState.isWishlisted}
                  hasReminder={gameState.hasReminder}
                  onWishlistToggle={toggleWishlist}
                  onReminderToggle={toggleReminder}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}