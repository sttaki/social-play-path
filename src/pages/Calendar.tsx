import { Calendar as CalendarIcon, Bell, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const upcomingReleases = [
  {
    id: 1,
    title: "Tekken 8",
    releaseDate: "26. januar 2024",
    daysLeft: 15,
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
    platform: "PC, PS5, Xbox",
    hasReminder: true,
  },
  {
    id: 2,
    title: "Granblue Fantasy Relink",
    releaseDate: "1. februar 2024",
    daysLeft: 21,
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop",
    platform: "PS5, PC",
    hasReminder: false,
  },
  {
    id: 3,
    title: "Helldivers 2",
    releaseDate: "8. februar 2024",
    daysLeft: 28,
    cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&h=100&fit=crop",
    platform: "PS5, PC",
    hasReminder: true,
  },
  {
    id: 4,
    title: "Final Fantasy VII Rebirth",
    releaseDate: "29. februar 2024",
    daysLeft: 49,
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    platform: "PS5 Ekskluzivno",
    hasReminder: true,
  },
];

const todayReleases = [
  {
    id: 5,
    title: "Palworld",
    releaseDate: "Danas",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop",
    platform: "PC, Xbox Game Pass",
  },
];

export default function Calendar() {
  return (
    <div className="min-h-screen p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 gradient-primary bg-clip-text text-transparent">
          Kalendar igara
        </h1>
        <p className="text-muted-foreground">
          Pratite datume izlaska i postavite podseetnike
        </p>
      </div>

      {/* Today's Releases */}
      {todayReleases.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Izašlo danas!
          </h2>
          <div className="space-y-3">
            {todayReleases.map((game) => (
              <Card key={game.id} className="gradient-card border-primary/20 p-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={game.cover} 
                    alt={game.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{game.title}</h3>
                    <p className="text-sm text-muted-foreground">{game.platform}</p>
                  </div>
                  <Badge className="gradient-primary animate-pulse">
                    DOSTUPNO
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Releases */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Nadolazeći datumi
        </h2>
        
        <div className="space-y-3">
          {upcomingReleases.map((game) => (
            <Card key={game.id} className="gradient-card p-4 transition-spring hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <img 
                  src={game.cover} 
                  alt={game.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{game.platform}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span>{game.releaseDate}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {game.daysLeft}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">dana</div>
                  
                  <Button 
                    size="sm" 
                    variant={game.hasReminder ? "default" : "outline"}
                    className="h-8"
                  >
                    {game.hasReminder ? (
                      <>
                        <Bell className="h-3 w-3 mr-1" />
                        Aktivno
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Podesi
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <div className="fixed bottom-24 right-4">
        <Button className="gradient-primary shadow-elevated h-14 w-14 rounded-full">
          <CalendarIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}