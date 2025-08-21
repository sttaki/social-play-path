import { useState } from "react";
import { Search as SearchIcon, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { Badge } from "@/components/ui/badge";
import { useGameActions } from "@/hooks/useGameActions";

const genres = ["FPS", "RPG", "Akcija", "Strategija", "Adventure", "Sport"];
const platforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobilni"];

const searchResults = [
  {
    id: 1,
    title: "Counter-Strike 2",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 9.2,
    genre: "FPS",
    platform: "PC, Steam",
  },
  {
    id: 2,
    title: "Valorant",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 8.9,
    genre: "FPS",
    platform: "PC",
  },
  {
    id: 3,
    title: "Call of Duty: Modern Warfare III",
    cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop",
    rating: 8.8,
    genre: "FPS",
    platform: "PC, PS5, Xbox",
  },
  {
    id: 4,
    title: "Apex Legends",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    rating: 8.7,
    genre: "FPS",
    platform: "PC, PS5, Xbox",
  },
  {
    id: 5,
    title: "The Legend of Zelda: Tears of the Kingdom",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 9.6,
    genre: "Adventure",
    platform: "Nintendo Switch",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 8.5,
    genre: "RPG",
    platform: "PC, PS5, Xbox",
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const { toggleWishlist, toggleReminder, getGameState } = useGameActions();

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          Pretraga igara
        </h1>
        
        {/* Search Input */}
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Unesite naziv igre..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card/50 backdrop-blur border-border/50"
          />
        </div>

        {/* Filters */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Filteri</span>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-sm font-medium mb-2">Žanrovi</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge 
                  key={genre}
                  variant={selectedGenres.includes(genre) ? "default" : "secondary"}
                  className="cursor-pointer transition-smooth hover:scale-105"
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-medium mb-2">Platforme</h3>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <Badge 
                  key={platform}
                  variant={selectedPlatforms.includes(platform) ? "default" : "secondary"}
                  className="cursor-pointer transition-smooth hover:scale-105"
                  onClick={() => togglePlatform(platform)}
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Rezultati pretrage ({searchResults.length})</h2>
        <div className="grid grid-cols-1 gap-4">
          {searchResults.map((game) => {
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
      </div>
    </div>
  );
}