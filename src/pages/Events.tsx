import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Telescope, BookOpen, Camera } from "lucide-react";

import galaxy1 from "@/assets/galaxy-1.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import saturn from "@/assets/saturn.jpg";
import moon from "@/assets/moon.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Stargazing Night: Spring Constellations",
      date: "March 22, 2024",
      time: "8:00 PM - 11:00 PM",
      location: "Campus Observatory",
      type: "Observation",
      image: moon,
      description: "Join us for an evening of constellation viewing as we explore the spring sky. Perfect for beginners!",
      capacity: 25,
      registered: 18,
      features: ["Telescope provided", "Hot cocoa", "Star charts included"]
    },
    {
      title: "Guest Lecture: The Hunt for Exoplanets",
      date: "March 28, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Science Building Auditorium",
      type: "Lecture",
      image: saturn,
      description: "Dr. Elena Vasquez from NASA's Exoplanet Division discusses the latest discoveries in planet hunting.",
      capacity: 100,
      registered: 67,
      features: ["Q&A session", "Research opportunities", "Light refreshments"]
    },
    {
      title: "Astrophotography Workshop",
      date: "April 5, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Photography Lab & Observatory",
      type: "Workshop",
      image: galaxy1,
      description: "Learn the fundamentals of capturing the night sky. Bring your camera or use our equipment!",
      capacity: 15,
      registered: 12,
      features: ["Equipment available", "Image processing tutorial", "Take home prints"]
    },
    {
      title: "Meteor Shower Viewing Party",
      date: "April 22, 2024",
      time: "10:00 PM - 2:00 AM",
      location: "Dark Sky Site (Transportation provided)",
      type: "Special Event",
      image: nebula1,
      description: "Experience the spectacular Lyrid meteor shower away from city lights. Transportation and snacks provided.",
      capacity: 30,
      registered: 24,
      features: ["Transportation included", "Camping chairs", "Midnight snacks", "Photography opportunities"]
    },
    {
      title: "Solar Observation Session",
      date: "May 10, 2024",
      time: "12:00 PM - 3:00 PM",
      location: "Campus Observatory",
      type: "Observation",
      image: saturn,
      description: "Safe solar viewing using specialized telescopes and filters. Learn about solar activity and sunspots.",
      capacity: 20,
      registered: 8,
      features: ["Solar filters provided", "Safety briefing", "Solar activity tracking"]
    }
  ];

  const pastEvents = [
    {
      title: "Lunar Eclipse Viewing",
      date: "February 14, 2024",
      attendees: 45,
      highlights: "Perfect weather conditions allowed for spectacular eclipse photography"
    },
    {
      title: "Winter Constellation Workshop",
      date: "January 20, 2024",
      attendees: 32,
      highlights: "Participants learned to identify major winter constellations and their mythology"
    },
    {
      title: "Guest Speaker: Dr. Maria Santos",
      date: "December 8, 2023",
      attendees: 78,
      highlights: "Fascinating talk on dark matter research and its implications for cosmology"
    },
    {
      title: "Perseid Meteor Shower Camp",
      date: "August 12, 2023",
      attendees: 28,
      highlights: "Overnight camping with peak meteor activity - over 60 meteors observed per hour"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Observation": return <Telescope className="h-4 w-4" />;
      case "Lecture": return <BookOpen className="h-4 w-4" />;
      case "Workshop": return <Camera className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Observation": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Lecture": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Workshop": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            EVENTS | AD ASTRA
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Join us for stargazing sessions, educational workshops, guest lectures, and special cosmic events. 
            All experience levels welcome!
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-80 h-48 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                        <Badge className={getTypeColor(event.type)}>
                          <div className="flex items-center gap-1">
                            {getTypeIcon(event.type)}
                            {event.type}
                          </div>
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.registered}/{event.capacity} registered</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="bg-primary hover:bg-primary/90"
                          disabled={event.registered >= event.capacity}
                        >
                          {event.registered >= event.capacity ? "Event Full" : "Register Now"}
                        </Button>
                        <Button variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Past Events Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.highlights}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-6">
            <h3 className="font-display font-bold text-xl text-foreground mb-4">
              How to Join Events
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Browse upcoming events and find ones that interest you</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Click "Register Now" and fill out the simple registration form</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Receive confirmation email with event details and what to bring</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>Show up and enjoy exploring the cosmos with fellow enthusiasts!</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-6">
            <h3 className="font-display font-bold text-xl text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Never miss an astronomical event! Subscribe to our newsletter for updates on 
              special viewing opportunities, guest speakers, and exclusive member events.
            </p>
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="w-full">
                Follow Our Calendar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;