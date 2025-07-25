import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Telescope as TelescopeIcon, BookOpen, Rocket, Home as HomeIcon, Users as UsersIcon, Camera as CameraIcon, Calendar as CalendarIcon, Info as InfoIcon } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeAttractorsBackground } from "@/components/ui/three-attractors-background";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Navbar, MobileNav, NavbarLogo, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import AuroraBackgroundDemo from "@/components/ui/aurora-background-demo";

// Import all the generated images
import heroNebula from "@/assets/hero-nebula.jpg";
import galaxy1 from "@/assets/galaxy-1.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import saturn from "@/assets/saturn.jpg";
import earth from "@/assets/earth.jpg";
import moon from "@/assets/moon.jpg";

const dockItems = [
  // { title: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
  { title: "Events", icon: <CalendarIcon className="w-6 h-6" />, href: "/events" },
  { title: "Astrophotography", icon: <CameraIcon className="w-6 h-6" />, href: "/astrophotography" },
  { title: "Research", icon: <TelescopeIcon className="w-6 h-6" />, href: "/research" },
  { title: "The Team", icon: <UsersIcon className="w-6 h-6" />, href: "/team" },
  { title: "About Us", icon: <InfoIcon className="w-6 h-6" />, href: "/about" },
];

const Home = () => {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-background select-none">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {isMobile ? (
          <div className="w-full">
          <AuroraBackgroundDemo />
        </div>
        ) : (
          <div>
            <ThreeAttractorsBackground />
            <div className="absolute inset-0 z-5 bg-black/25  pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
              <h1 className="font-adastra font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider text-center">
                AD ASTRA
              </h1>
              <p className="font-adastra text-xl md:text-2xl text-gray-200 mb-4 font-light text-center">
                Astronomy & Astrophysics Club | BITS Hyderabad
              </p>
              <p className="text-lg md:text-xl text-gray-300/80 mb-8 max-w-2xl mx-auto text-center">
              Scroll to explore the animation
            </p>
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full z-20">
          {isMobile ? (
            <MobileNav visible={true} className="">
              <MobileNavHeader className="">
                <NavbarLogo />
                <MobileNavToggle isOpen={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
              </MobileNavHeader>
              <MobileNavMenu className="" isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
                {dockItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-white font-adastra text-lg rounded hover:bg-gray-100 dark:hover:bg-neutral-800 w-full flex items-center gap-2"
                  >
                    {/* {item.icon} */}
                    {item.title}
                  </Link>
                ))}
              </MobileNavMenu>
            </MobileNav>
          ) : (
            <FloatingDock
              items={dockItems}
              desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-16 z-50 shadow-lg"
              mobileClassName=""
            />
          )}
        </div>
      </section>
      
    </div>
  );
};

export default Home;