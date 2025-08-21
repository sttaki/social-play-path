import { User, Settings, Heart, Calendar, Trophy, Star, GamepadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default function Profile() {
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
        
        <Button variant="outline" className="w-full" size="lg">
          <User className="h-5 w-5 mr-2" />
          Pronađi prijatelje
        </Button>
      </div>
    </div>
  );
}