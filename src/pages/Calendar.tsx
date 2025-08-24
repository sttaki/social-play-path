import { Calendar as CalendarIcon, Bell, Clock, Star, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { format, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";

// Game releases with specific dates
const gameReleases = [
  {
    id: 1,
    title: "Tekken 8",
    date: new Date(2026, 1, 26), // January 26, 2026
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
    platform: "PC, PS5, Xbox",
    hasReminder: true,
  },
  {
    id: 2,
    title: "Granblue Fantasy Relink", 
    date: new Date(2026, 1, 1), // February 1, 2026
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop",
    platform: "PS5, PC",
    hasReminder: false,
  },
  {
    id: 3,
    title: "Helldivers 2",
    date: new Date(2026, 1, 8), // February 8, 2026
    cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&h=100&fit=crop",
    platform: "PS5, PC", 
    hasReminder: true,
  },
  {
    id: 4,
    title: "Final Fantasy VII Rebirth",
    date: new Date(2026, 1, 28), // February 28, 2026
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    platform: "PS5 Ekskluzivno",
    hasReminder: true,
  },
  {
    id: 5,
    title: "Call of Duty: Black Ops 6",
    date: new Date(2026, 7, 29), // August 29, 2026
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop",
    platform: "PC, PS5, Xbox",
    hasReminder: false,
  },
];

const upcomingReleases = [
  {
    id: 1,
    title: "Tekken 8",
    releaseDate: "26. januar 2026",
    daysLeft: 380,
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
    platform: "PC, PS5, Xbox",
    hasReminder: true,
  },
  {
    id: 2,
    title: "Granblue Fantasy Relink",
    releaseDate: "1. februar 2026",
    daysLeft: 386,
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop",
    platform: "PS5, PC",
    hasReminder: false,
  },
  {
    id: 3,
    title: "Helldivers 2",
    releaseDate: "8. februar 2026",
    daysLeft: 393,
    cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&h=100&fit=crop",
    platform: "PS5, PC",
    hasReminder: true,
  },
  {
    id: 4,
    title: "Final Fantasy VII Rebirth",
    releaseDate: "28. februar 2026",
    daysLeft: 413,
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
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const getGamesForDate = (date: Date) => {
    return gameReleases.filter(game => isSameDay(game.date, date));
  };

  const hasGameOnDate = (date: Date) => {
    return gameReleases.some(game => isSameDay(game.date, date));
  };

  const selectedDateGames = selectedDate ? getGamesForDate(selectedDate) : [];

  return (
    <div className="min-h-screen p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Kalendar igara
          </h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-2" />
              Lista
            </Button>
            <Button
              variant={viewMode === 'calendar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('calendar')}
            >
              <Grid className="h-4 w-4 mr-2" />
              Kalendar
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Pratite datume izlaska i postavite podseetnike
        </p>
      </div>

      {viewMode === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar */}
          <Card className="gradient-card p-6">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className={cn("pointer-events-auto")}
              modifiers={{
                hasGame: (date) => hasGameOnDate(date)
              }}
              modifiersStyles={{
                hasGame: {
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  borderRadius: '6px'
                }
              }}
            />
          </Card>

          {/* Selected Date Games */}
          <Card className="gradient-card p-6">
            <h3 className="text-lg font-semibold mb-4">
              {selectedDate ? format(selectedDate, 'dd. MMMM yyyy') : 'Izaberite datum'}
            </h3>
            
            {selectedDateGames.length > 0 ? (
              <div className="space-y-3">
                {selectedDateGames.map((game) => (
                  <div key={game.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/50">
                    <img 
                      src={game.cover} 
                      alt={game.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{game.title}</h4>
                      <p className="text-sm text-muted-foreground">{game.platform}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant={game.hasReminder ? "default" : "outline"}
                    >
                      {game.hasReminder ? (
                        <Bell className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Nema zakazanih igara za ovaj datum</p>
              </div>
            )}
          </Card>
        </div>
      ) : (
        <>
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
        </>
      )}

      {/* Quick Actions */}
      <div className="fixed bottom-24 right-4">
        <Button 
          className="gradient-primary shadow-elevated h-14 w-14 rounded-full"
          onClick={() => setViewMode(viewMode === 'calendar' ? 'list' : 'calendar')}
        >
          {viewMode === 'calendar' ? <List className="h-6 w-6" /> : <CalendarIcon className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  );
}