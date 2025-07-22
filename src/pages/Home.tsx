import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Telescope, BookOpen, Rocket, Home as HomeIcon, Users as UsersIcon, Camera as CameraIcon, Calendar as CalendarIcon, Info as InfoIcon } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeAttractorsBackground } from "@/components/ui/three-attractors-background";

// Import all the generated images
import heroNebula from "@/assets/hero-nebula.jpg";
import galaxy1 from "@/assets/galaxy-1.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import saturn from "@/assets/saturn.jpg";
import earth from "@/assets/earth.jpg";
import moon from "@/assets/moon.jpg";

const Home = () => {
  const photographsOfMonth = [
    { image: galaxy1, title: "Andromeda Galaxy", photographer: "Sarah Chen" },
    { image: nebula1, title: "Orion Nebula", photographer: "Mike Rodriguez" },
    { image: saturn, title: "Saturn Rings", photographer: "Alex Kim" },
    { image: earth, title: "Earth from ISS", photographer: "NASA Archives" },
    { image: moon, title: "Lunar Surface", photographer: "Emily Watson" },
  ];

  const upcomingEvents = [
    {
      date: "15",
      month: "MAR",
      title: "Stargazing Night",
      description: "Join us for an evening of celestial observation",
      image: moon,
      link: "/events"
    },
    {
      date: "22",
      month: "MAR", 
      title: "Guest Lecture: Black Holes",
      description: "Dr. Johnson discusses recent black hole discoveries",
      image: nebula1,
      link: "/events"
    },
    {
      date: "05",
      month: "APR",
      title: "Astrophotography Workshop",
      description: "Learn techniques for capturing the night sky",
      image: galaxy1,
      link: "/events"
    },
    {
      date: "18",
      month: "APR",
      title: "Planetary Alignment",
      description: "Observe the rare planetary alignment event",
      image: saturn,
      link: "/events"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Torres",
      role: "Faculty Advisor", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Alex Kim",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-start text-left overflow-hidden"
      >
        <ThreeAttractorsBackground />
        <div className="relative z-10 max-w-4xl mx-0 px-4">
          <h1 className="font-nasalization font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide text-left">
            AD ASTRA
          </h1>
          <p className="font-nasalization text-xl md:text-2xl text-gray-200 mb-4 font-light text-left">
            Astronomy & Astrophysics Club
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-0 text-left">
            Explore the vast void and uncover the cosmos
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg text-left"
          >
            <Link to="/about">Join Our Journey</Link>
          </Button>
        </div>
      </section>
      {/* Dock at the bottom */}
      <FloatingDock
        items={[
          { title: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
          { title: "Events", icon: <CalendarIcon className="w-6 h-6" />, href: "/events" },
          { title: "Team", icon: <UsersIcon className="w-6 h-6" />, href: "/team" },
          { title: "Astrophotography", icon: <CameraIcon className="w-6 h-6" />, href: "/astrophotography" },
          { title: "About", icon: <InfoIcon className="w-6 h-6" />, href: "/about" },
        ]}
        desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-4 z-50 shadow-lg"
        mobileClassName="fixed bottom-4 right-4 z-50 shadow-lg"
      />
    </div>
  );
};

export default Home;