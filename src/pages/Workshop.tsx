import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Telescope as TelescopeIcon, BookOpen, Rocket, Home as HomeIcon, Users as UsersIcon, Camera as CameraIcon, Calendar as CalendarIcon, Info as InfoIcon } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeAttractorsBackground } from "@/components/ui/three-attractors-background";
import React from "react";
import AuroraBackgroundDemo from "@/components/ui/aurora-background-demo";


const dockItems = [
  // { title: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
  { title: "Events", icon: <CalendarIcon className="w-6 h-6" />, href: "/events" },
  { title: "Astrophotography", icon: <CameraIcon className="w-6 h-6" />, href: "/astrophotography" },
  { title: "Research", icon: <TelescopeIcon className="w-6 h-6" />, href: "/research" },
  { title: "The Team", icon: <UsersIcon className="w-6 h-6" />, href: "/team" },
  { title: "About Us", icon: <InfoIcon className="w-6 h-6" />, href: "/about" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background select-none">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
          <div>
            <ThreeAttractorsBackground />
            <div className="absolute inset-0 z-5 bg-black/25  pointer-events-none" />
            {/* Logo positioned at top left */}
            <div className="absolute top-4 left-4 z-10 px-4">
              <h1 className="font-adastra font-bold text-xl md:text-4xl lg:text-3xl text-white tracking-wider text-left">
                CODE THE COSMOS
              </h1>
            </div>
            <div className="absolute top-4 right-4 z-10 px-4">
              <h1 className="font-adastra font-bold text-xl md:text-4xl lg:text-3xl text-white tracking-wider text-left">
                AD ASTRA
              </h1>
            </div>
            {/* <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
              <p className="font-adastra text-xl md:text-2xl text-gray-200 mb-4 font-light text-center">
                Astronomy & Astrophysics Club | BITS Hyderabad
              </p>
              <p className="text-lg md:text-xl text-gray-300/80 mb-8 max-w-2xl mx-auto text-center">
              Scroll to explore the animation
            </p>
            </div> */}
          </div>
      </section>
      
    </div>
  );
};

export default Home;