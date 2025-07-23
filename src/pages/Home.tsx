import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Telescope, BookOpen, Rocket, Home as HomeIcon, Users as UsersIcon, Camera as CameraIcon, Calendar as CalendarIcon, Info as InfoIcon } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeAttractorsBackground } from "@/components/ui/three-attractors-background";
import React from "react";

// Import all the generated images
import heroNebula from "@/assets/hero-nebula.jpg";
import galaxy1 from "@/assets/galaxy-1.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import saturn from "@/assets/saturn.jpg";
import earth from "@/assets/earth.jpg";
import moon from "@/assets/moon.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background select-none">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <ThreeAttractorsBackground />
        {/* Dulling overlay */}
        <div className="absolute inset-0 z-5 bg-black/25  pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="font-nasalization font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider text-center">
            AD ASTRA
          </h1>
          <p className="font-nasalization text-xl md:text-2xl text-gray-200 mb-4 font-light text-center">
            Astronomy & Astrophysics Club | BITS Hyderabad
          </p>
          <p className="text-lg md:text-xl text-gray-300/80 mb-8 max-w-2xl mx-auto text-center">
            Scroll to explore the animation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;