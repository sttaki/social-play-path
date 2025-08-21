import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-card">
      <div className="text-center p-8">
        <div className="text-8xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold mb-2">Strana nije pronađena</h1>
        <p className="text-muted-foreground mb-6">
          Izvinjavamo se, tražena strana ne postoji.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Nazad
          </Button>
          <Button variant="outline" asChild>
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Početna
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
