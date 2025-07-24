import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo
} from "@/components/ui/resizable-navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Game from "./pages/Playground";
import Astrophotography from "./pages/Astrophotography";
import Research from "./pages/Research";
import Events from "./pages/Events";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home as HomeIcon,Telescope as TelescopeIcon, Calendar as CalendarIcon, Users as UsersIcon, Info as InfoIcon, Camera as CameraIcon } from "lucide-react";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navItems = [
    // { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "Astrophotography", link: "/astrophotography" },
    { name: "Research", link: "/research" },
    { name: "The Team", link: "/team" },
    { name: "About Us", link: "/about" },
    // { name: "Playground", link: "/playground" },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          {!isHome && (
            <Navbar className="top-0">
              <NavBody className="" visible={true}>
                <NavbarLogo />
                <NavItems
                  items={navItems}
                  onItemClick={() => setMobileOpen(false)}
                  className=""
                />
              </NavBody>
              <MobileNav className="" visible={true}>
                <MobileNavHeader className="">
                  <NavbarLogo />
                  <MobileNavToggle isOpen={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
                </MobileNavHeader>
                <MobileNavMenu className="" isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
                  {navItems.map((item, idx) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-white font-adastra text-lg rounded hover:bg-gray-100 dark:hover:bg-neutral-800 w-full"
                    >
                      {item.name}
                    </Link>
                  ))}
                </MobileNavMenu>
              </MobileNav>
            </Navbar>
          )}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/astrophotography" element={<Astrophotography />} />
              <Route path="/research" element={<Research />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/playground" element={<Game />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {isHome && (
            <FloatingDock
              items={[
                // { title: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
                { title: "Events", icon: <CalendarIcon className="w-6 h-6" />, href: "/events" },
                { title: "Astrophotography", icon: <CameraIcon className="w-6 h-6" />, href: "/astrophotography" },
                { title: "Research", icon: <TelescopeIcon className="w-6 h-6" />, href: "/research" },
                { title: "The Team", icon: <UsersIcon className="w-6 h-6" />, href: "/team" },
                { title: "About Us", icon: <InfoIcon className="w-6 h-6" />, href: "/about" },
              ]}
              desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-16 z-50 shadow-lg"
              mobileClassName=""
            />
          )}
          {!isHome && <Footer />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
