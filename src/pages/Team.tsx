import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Award, GraduationCap } from "lucide-react";

const Team = () => {
  const executiveBoard = [
    {
      name: "Sarah Chen",
      role: "President",
      year: "Senior",
      major: "Astrophysics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face",
      bio: "Sarah has been with Ad Astra since her freshman year and has led our exoplanet research team. She's passionate about making astronomy accessible to everyone and plans to pursue a PhD in observational astronomy.",
      achievements: ["NASA USRP Intern 2023", "Outstanding Student Researcher Award", "Published 3 peer-reviewed papers"],
      interests: ["Exoplanet Detection", "Variable Stars", "Science Communication"],
      contact: {
        email: "sarah.chen@university.edu",
        github: "sarahc-astro",
        linkedin: "sarah-chen-astro"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Vice President",
      year: "Junior",
      major: "Physics & Astronomy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Emily specializes in computational astrophysics and leads our galaxy simulation projects. She's known for her innovative approach to data analysis and mentoring new members.",
      achievements: ["NSF Research Fellowship", "Best Poster at AAS Meeting", "Developed automated photometry pipeline"],
      interests: ["Galaxy Formation", "Dark Matter", "Machine Learning in Astronomy"],
      contact: {
        email: "emily.rodriguez@university.edu",
        github: "emily-cosmo",
        linkedin: "emily-rodriguez-physics"
      }
    },
    {
      name: "Alex Kim",
      role: "Secretary & Treasurer",
      year: "Sophomore",
      major: "Astrophysics & Computer Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Alex manages our club's finances and documentation while pursuing research in asteroid dynamics. Their programming skills have been invaluable for our data analysis projects.",
      achievements: ["Dean's List 3 semesters", "Developed club management software", "Minor Planet Center contributor"],
      interests: ["Near-Earth Asteroids", "Orbital Mechanics", "Software Development"],
      contact: {
        email: "alex.kim@university.edu",
        github: "alexkim-astro",
        linkedin: "alex-kim-cs"
      }
    },
    {
      name: "Marcus Thompson",
      role: "Outreach Coordinator",
      year: "Junior",
      major: "Astronomy Education",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Marcus coordinates our public outreach programs and educational initiatives. He's passionate about science education and plans to become a planetarium director.",
      achievements: ["Volunteer of the Year - City Science Museum", "Created educational curriculum", "Organized 20+ school visits"],
      interests: ["Science Education", "Public Astronomy", "Planetarium Shows"],
      contact: {
        email: "marcus.thompson@university.edu",
        linkedin: "marcus-thompson-edu"
      }
    }
  ];

  const facultyAdvisors = [
    {
      name: "Dr. Michael Torres",
      role: "Faculty Advisor",
      department: "Department of Physics & Astronomy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Torres is a professor of observational astronomy specializing in stellar evolution and binary star systems. He has been the club's advisor since 2019 and provides invaluable guidance on research projects.",
      specialties: ["Stellar Evolution", "Binary Stars", "Observational Techniques"],
      education: ["PhD Astronomy - Harvard University", "MS Physics - MIT"],
      contact: {
        email: "mtorres@university.edu"
      }
    },
    {
      name: "Dr. Lisa Patel", 
      role: "Research Advisor",
      department: "Department of Physics & Astronomy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Patel is an expert in computational astrophysics and helps guide our theoretical research projects. Her work on galaxy formation simulations has earned international recognition.",
      specialties: ["Galaxy Formation", "Computational Astrophysics", "Dark Matter Simulations"],
      education: ["PhD Astrophysics - Caltech", "BS Physics - UC Berkeley"],
      contact: {
        email: "lpatel@university.edu"
      }
    }
  ];

  const researchLeads = [
    {
      name: "Jordan Williams",
      role: "Astrophotography Team Lead",
      year: "Senior",
      major: "Physics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Deep Sky Photography", "Image Processing", "Equipment Maintenance"]
    },
    {
      name: "Maya Sharma",
      role: "Variable Star Research Lead",
      year: "Junior", 
      major: "Astronomy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["Photometric Analysis", "Statistical Methods", "Database Management"]
    },
    {
      name: "David Chen",
      role: "Exoplanet Team Lead",
      year: "Senior",
      major: "Astrophysics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Transit Photometry", "Radial Velocity", "Follow-up Observations"]
    },
    {
      name: "Sofia Gonzalez",
      role: "Public Outreach Lead",
      year: "Sophomore",
      major: "Astronomy Education",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face",
      specialties: ["Event Planning", "Educational Content", "Community Engagement"]
    }
  ];

  const alumni = [
    {
      name: "Dr. James Liu",
      graduationYear: "2022",
      currentPosition: "Postdoc Researcher - Space Telescope Science Institute",
      contribution: "Led the development of our automated observation pipeline"
    },
    {
      name: "Rachel Martinez",
      graduationYear: "2021", 
      currentPosition: "Data Scientist - SpaceX",
      contribution: "Established our first international research collaboration"
    },
    {
      name: "Ahmed Hassan",
      graduationYear: "2020",
      currentPosition: "PhD Student - Stanford University",
      contribution: "Founded our astrophotography program"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            MEET THE TEAM
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Our diverse team of students and faculty work together to explore the cosmos, 
            conduct research, and share the wonder of astronomy with our community.
          </p>
        </div>

        {/* Executive Board */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Executive Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveBoard.map((member, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{member.year}</Badge>
                        <Badge variant="outline">{member.major}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Research Interests:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.interests.map((interest, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                    {member.contact.github && (
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </Button>
                    )}
                    {member.contact.linkedin && (
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Faculty Advisors */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Faculty Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((advisor, index) => (
              <Card key={index} className="bg-card border-border p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground">{advisor.name}</h3>
                    <p className="text-primary font-medium">{advisor.role}</p>
                    <p className="text-sm text-muted-foreground">{advisor.department}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {advisor.bio}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {advisor.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Education:</h4>
                  <ul className="space-y-1">
                    {advisor.education.map((edu, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Team Leads */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Research Team Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchLeads.map((lead, index) => (
              <Card key={index} className="bg-card border-border p-6 text-center">
                <img 
                  src={lead.image} 
                  alt={lead.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg text-foreground mb-1">{lead.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{lead.role}</p>
                <div className="flex justify-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">{lead.year}</Badge>
                  <Badge variant="outline" className="text-xs">{lead.major}</Badge>
                </div>
                <div className="space-y-1">
                  {lead.specialties.map((specialty, idx) => (
                    <span key={idx} className="block text-xs text-muted-foreground">
                      {specialty}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Notable Alumni */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Notable Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((alum, index) => (
              <Card key={index} className="bg-card border-border p-6 text-center">
                <h3 className="font-semibold text-lg text-foreground mb-2">{alum.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">Class of {alum.graduationYear}</p>
                <p className="text-muted-foreground text-sm mb-3">{alum.currentPosition}</p>
                <p className="text-xs text-muted-foreground italic">"{alum.contribution}"</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our community. Whether you're 
              interested in leadership roles, research opportunities, or just want to help with events, 
              there's a place for you in Ad Astra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply for Leadership
              </Button>
              <Button size="lg" variant="outline">
                Join Research Team
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;