import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Calendar,  MapPin, Telescope, BookOpen, Rocket, Home as HomeIcon, Users as UsersIcon, Camera as CameraIcon, Calendar as CalendarIcon, Info as InfoIcon  } from "lucide-react";


const Research = () => {
  const ongoingProjects = [
    {
      title: "Exoplanet Detection Using Transit Photometry",
      description: "Our team is analyzing light curves from the TESS mission to identify potential exoplanets around nearby stars. We've discovered 3 candidate planets pending confirmation.",
      status: "Ongoing",
      lead: "Ansh Kanotra(2021) & Yash(2024)",
      startDate: "September 2023",
      participants: 8,
      keyFindings: [
        "Developed automated pipeline for light curve analysis",
        "Developed multi-level perceptron to classify exoplanets."
      ]
    },
    {
      title: "Galactic Dark Matter Study via Horn Antenna",
      description: "Utilizing a custom-built horn antenna to observe the 22cm hydrogen line, allowing us to map the rotational velocities of the Milky Way and study the distribution of dark matter in our galaxy.",
      status: "Ongoing",
      lead: "Tulika Devale, Sparsh Batra, Atreyi Dasgupta",
      startDate: "October 2023",
      participants: 6,
      keyFindings: [
        "Constructed and calibrated the horn antenna prototype",
        "Successfully detected hydrogen emission from the galactic plane"
      ]
    },
    {
      title: "Radio Jove: Listening to Jupiter and the Sun",
      description: "Setting up a dual dipole antenna array to monitor and record natural decametric radio emissions from Jupiter's magnetosphere and solar flares.",
      status: "Ongoing",
      lead: "Sparsh Batra",
      startDate: "August 2025",
      participants: 5,
      keyFindings: [
        "Project has been funded by BITS under SIP initiative, currently acquiring necessary equipment.",
      ]
    }
  ];

  const researchAreas = [
    {
      area: "Observational Astronomy",
      icon: "🔭",
      description: "Direct observation and data collection using our campus observatory and remote facilities"
    },
    {
      area: "Computational Astrophysics",
      icon: "💻",
      description: "Numerical simulations and modeling of celestial phenomena and cosmic structures"
    },
    {
      area: "Data Analysis",
      icon: "📊",
      description: "Statistical analysis of astronomical datasets from space missions and ground-based surveys"
    },
    {
      area: "Instrument Development",
      icon: "🔧",
      description: "Design and construction of custom astronomical instruments and detection systems"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-adastra font-bold text-4xl md:text-5xl text-foreground mb-6 select-none">
            RESEARCH & PROJECTS
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Discover the cutting-edge research conducted by our club members. From exoplanet hunting 
            to galaxy formation studies, we're pushing the boundaries of our understanding of the universe.
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-card border-border text-center p-6">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{area.area}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Started {project.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Led by {project.lead}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Findings & Progress:</h4>
                    <ul className="space-y-2">
                      {project.keyFindings.map((finding, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;