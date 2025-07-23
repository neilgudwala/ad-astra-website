import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import images
import galaxy1 from "@/assets/galaxy-1.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import saturn from "@/assets/saturn.jpg";
import earth from "@/assets/earth.jpg";
import moon from "@/assets/moon.jpg";

const Astrophotography = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Galaxies", "Nebulae", "Planets", "Deep Space"];

  const photos = [
    {
      id: 1,
      title: "Andromeda Galaxy",
      image: galaxy1,
      category: "Galaxies",
      photographer: "Sarah Chen",
      date: "March 2024",
      description: "A stunning capture of our nearest galactic neighbor, showcasing its spiral structure and cosmic dust lanes.",
      equipment: "Celestron EdgeHD 11\", ZWO ASI2600MC Pro"
    },
    {
      id: 2,
      title: "Orion Nebula",
      image: nebula1,
      category: "Nebulae",
      photographer: "Mike Rodriguez",
      date: "February 2024",
      description: "The jewel of the winter sky, revealing the stellar nursery where new stars are born.",
      equipment: "Takahashi FSQ-106ED, SBIG STL-11000M"
    },
    {
      id: 3,
      title: "Saturn's Majesty",
      image: saturn,
      category: "Planets",
      photographer: "Alex Kim",
      date: "January 2024",
      description: "A detailed view of Saturn showing its intricate ring system and atmospheric bands.",
      equipment: "Celestron C14 SCT, ZWO ASI290MM"
    },
    {
      id: 4,
      title: "Earth from Space",
      image: earth,
      category: "Planets",
      photographer: "NASA Archives",
      date: "December 2023",
      description: "Our beautiful home planet as seen from the International Space Station.",
      equipment: "ISS Nikon D5, 400mm lens"
    },
    {
      id: 5,
      title: "Lunar Landscape",
      image: moon,
      category: "Planets",
      photographer: "Emily Watson",
      date: "March 2024",
      description: "A high-resolution mosaic of the lunar surface revealing intricate crater details.",
      equipment: "Celestron C11 SCT, QHY5III-462C"
    },
    {
      id: 6,
      title: "Milky Way Core",
      image: galaxy1,
      category: "Deep Space",
      photographer: "David Park",
      date: "February 2024",
      description: "The galactic center of our own Milky Way, rich with stars and cosmic dust.",
      equipment: "Canon 5D Mark IV, Samyang 24mm f/1.4"
    }
  ];

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-adastra font-bold text-4xl select-none md:text-5xl text-foreground mb-6">
            ASTROPHOTOGRAPHY GALLERY
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of celestial captures, showcasing the beauty and wonder of the cosmos 
            through the lens of our talented club members.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {photo.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl text-foreground mb-2">{photo.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>by {photo.photographer}</span>
                  <span>{photo.date}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {photo.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground">
                    <strong>Equipment:</strong> {photo.equipment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Share Your Cosmic Captures
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Are you passionate about astrophotography? Join our club and share your images 
              with fellow astronomy enthusiasts. We welcome photographers of all skill levels!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Submit Your Photos
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Astrophotography;