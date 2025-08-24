import { User, Settings, Heart, Calendar, Trophy, Star, GamepadIcon, UserPlus, Users, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const userStats = {
  gamesInWishlist: 12,
  completedGames: 45,
  hoursPlayed: 320,
  averageRating: 8.7,
  remindersSet: 5,
  friendsFollowing: 23,
};

const recentActivity = [
  {
    id: 1,
    action: "Dodao na wishlist",
    game: "Cyberpunk 2077: Phantom Liberty",
    time: "Pre 2 sata",
  },
  {
    id: 2,
    action: "Ocenio",
    game: "Elden Ring",
    rating: 9.5,
    time: "Pre 1 dan",
  },
  {
    id: 3,
    action: "Postavio podsetnik",
    game: "GTA VI",
    time: "Pre 3 dana",
  },
];

const favoriteGenres = ["RPG", "Akcija", "Strategija", "Simulacija"];

const suggestedFriends = [
  {
    id: 1,
    name: "Ana Jovanović",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b68fcf65?w=100&h=100&fit=crop",
    level: 12,
    sharedGames: 8,
    mutualFriends: 3,
  },
  {
    id: 2,
    name: "Stefan Nikolić",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    level: 18,
    sharedGames: 12,
    mutualFriends: 5,
  },
  {
    id: 3,
    name: "Milica Stojanović",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    level: 9,
    sharedGames: 6,
    mutualFriends: 2,
  },
  {
    id: 4,
    name: "Nenad Petrović",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    level: 14,
    sharedGames: 15,
    mutualFriends: 7,
  },
];

export default function Profile() {
  const [showFriendSearch, setShowFriendSearch] = useState(false);
  const [addedFriends, setAddedFriends] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleFindFriends = () => {
    setShowFriendSearch(true);
    toast({
      title: "Pretražujemo prijatelje... 🔍",
      description: "Našli smo gamere sa sličnim interesovanjima!",
    });
  };

  const filteredFriends = suggestedFriends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFriend = (friendId: number, friendName: string) => {
    setAddedFriends(prev => [...prev, friendId]);
    toast({
      title: "Zahtev za prijateljstvo poslat! 👥",
      description: `Poslali ste zahtev za prijateljstvo ${friendName}.`,
    });
  };

  return (
    <div className="min-h-screen p-4">
      {/* Profile Header */}
      <Card className="gradient-card p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" />
            <AvatarFallback>
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Marko Petrović
            </h1>
            <p className="text-muted-foreground">Gaming entuzijasta</p>
            <div className="flex items-center gap-2 mt-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Level 15 Gamer</span>
            </div>
          </div>
          
          <Button size="sm" variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Podešavanja
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="gradient-card p-4 text-center">
          <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold">{userStats.gamesInWishlist}</div>
          <div className="text-sm text-muted-foreground">U wishlisti</div>
        </Card>
        
        <Card className="gradient-card p-4 text-center">
          <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold">{userStats.remindersSet}</div>
          <div className="text-sm text-muted-foreground">Podsetnika</div>
        </Card>
        
        <Card className="gradient-card p-4 text-center">
          <GamepadIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold">{userStats.completedGames}</div>
          <div className="text-sm text-muted-foreground">Završenih</div>
        </Card>
        
        <Card className="gradient-card p-4 text-center">
          <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold">{userStats.averageRating}</div>
          <div className="text-sm text-muted-foreground">Prosek ocena</div>
        </Card>
      </div>

      {/* Favorite Genres */}
      <Card className="gradient-card p-4 mb-6">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Omiljeni žanrovi
        </h3>
        <div className="flex flex-wrap gap-2">
          {favoriteGenres.map((genre) => (
            <Badge key={genre} className="gradient-primary">
              {genre}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="gradient-card p-4">
        <h3 className="font-semibold mb-4">Nedavna aktivnost</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.game}
                  {activity.rating && (
                    <span className="ml-2 text-primary">★ {activity.rating}</span>
                  )}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <Button className="w-full gradient-primary" size="lg">
          <Heart className="h-5 w-5 mr-2" />
          Upravljaj wishlistom
        </Button>
        
        <Button variant="outline" className="w-full" size="lg" onClick={handleFindFriends}>
          <User className="h-5 w-5 mr-2" />
          Pronađi prijatelje
        </Button>
      </div>

      {/* Friend Search Modal */}
      <Dialog open={showFriendSearch} onOpenChange={setShowFriendSearch}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Pronađi prijatelje
            </DialogTitle>
          </DialogHeader>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pretraži po imenu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Friends List */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {filteredFriends.map((friend) => (
              <div key={friend.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{friend.name}</h4>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      Level {friend.level}
                    </span>
                    <span>{friend.sharedGames} zajedničkih</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  variant={addedFriends.includes(friend.id) ? "secondary" : "default"}
                  disabled={addedFriends.includes(friend.id)}
                  onClick={() => handleAddFriend(friend.id, friend.name)}
                >
                  {addedFriends.includes(friend.id) ? (
                    <>
                      <Users className="h-3 w-3 mr-1" />
                      Poslato
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-3 w-3 mr-1" />
                      Dodaj
                    </>
                  )}
                </Button>
              </div>
            ))}
            
            {filteredFriends.length === 0 && searchQuery && (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Nema rezultata za "{searchQuery}"</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}