import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Astrophotography from "./pages/Astrophotography";
import Research from "./pages/Research";
import Events from "./pages/Events";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home as HomeIcon,Telescope as TelescopeIcon, Calendar as CalendarIcon, Users as UsersIcon, Info as InfoIcon, Camera as CameraIcon } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          {!isHome && <Navigation />}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/astrophotography" element={<Astrophotography />} />
              <Route path="/research" element={<Research />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {isHome && (
            <FloatingDock
              items={[
                { title: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
                { title: "Events", icon: <CalendarIcon className="w-6 h-6" />, href: "/events" },
                { title: "Team", icon: <UsersIcon className="w-6 h-6" />, href: "/team" },
                { title: "Research", icon: <TelescopeIcon className="w-6 h-6" />, href: "/research" },
                { title: "Astrophotography", icon: <CameraIcon className="w-6 h-6" />, href: "/astrophotography" },
                { title: "About", icon: <InfoIcon className="w-6 h-6" />, href: "/about" },
              ]}
              desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-16 z-50 shadow-lg"
              mobileClassName="fixed bottom-16 right-4 z-50 shadow-lg"
            />
          )}
          {!isHome && <Footer />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
