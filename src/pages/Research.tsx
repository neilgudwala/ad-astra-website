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
      lead: "Dr. Sarah Chen & Emily Rodriguez",
      startDate: "September 2023",
      participants: 8,
      keyFindings: [
        "Identified TOI-4567b candidate with 2.3-day orbital period",
        "Developed automated pipeline for light curve analysis",
        "Collaborated with professional observatories for follow-up"
      ]
    },
    {
      title: "Galaxy Cluster Dynamics Simulation",
      description: "Using computational models to study the formation and evolution of galaxy clusters, with focus on dark matter distribution and merger events.",
      status: "Ongoing",
      lead: "Alex Kim & Dr. Michael Torres",
      startDate: "January 2024",
      participants: 6,
      keyFindings: [
        "Simulated cluster merger with 10^15 solar mass components",
        "Analyzed gravitational lensing effects",
        "Published preliminary results in undergraduate journal"
      ]
    },
    {
      title: "Variable Star Classification Project",
      description: "Systematic observation and classification of variable stars in nearby globular clusters using our campus observatory.",
      status: "Ongoing",
      lead: "Mike Rodriguez & Team",
      startDate: "October 2023",
      participants: 12,
      keyFindings: [
        "Catalogued 47 RR Lyrae variables in M13",
        "Improved period-luminosity relationships",
        "Contributed data to international variable star database"
      ]
    }
  ];

  const completedProjects = [
    {
      title: "Solar Activity and Radio Burst Correlation",
      description: "A comprehensive study of the relationship between solar flare intensity and radio burst characteristics over a full solar cycle.",
      status: "Completed",
      lead: "Dr. Martinez & Previous Team",
      completionDate: "May 2023",
      participants: 10,
      publications: [
        "Solar-Radio Correlations: A Student Perspective (Astronomy Education Review, 2023)",
        "Conference presentation at National Undergraduate Research Conference"
      ]
    },
    {
      title: "Asteroid Lightcurve Analysis",
      description: "Photometric study of near-Earth asteroids to determine rotation periods and shape characteristics.",
      status: "Completed", 
      lead: "Previous Research Team",
      completionDate: "December 2022",
      participants: 15,
      publications: [
        "Minor Planet Bulletin contributions for 12 asteroids",
        "Collaborative observations with international amateur network"
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
            Ongoing Projects
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

        {/* Completed Projects */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Completed Projects
          </h2>
          <div className="space-y-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <Badge variant="secondary">
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
                      <span>Completed {project.completionDate}</span>
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
                    <h4 className="font-semibold text-foreground mb-3">Publications & Presentations:</h4>
                    <ul className="space-y-2">
                      {project.publications.map((pub, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in contributing to real astronomical research? Our club welcomes students 
              of all levels to participate in ongoing projects and develop new research initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Propose a Project
              </Button>
              <Button size="lg" variant="outline">
                View Research Guidelines
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Research;