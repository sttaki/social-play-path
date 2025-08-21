import { NavLink } from "react-router-dom";
import { Home, Heart, User, Search, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Početna" },
  { to: "/search", icon: Search, label: "Pretraga" },
  { to: "/wishlist", icon: Heart, label: "Wishlist" },
  { to: "/calendar", icon: Calendar, label: "Podsetnici" },
  { to: "/profile", icon: User, label: "Profil" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-smooth",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon 
                  className={cn(
                    "h-5 w-5 mb-1 transition-smooth",
                    isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]"
                  )} 
                />
                <span className="text-xs font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}