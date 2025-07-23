import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Telescope, Users, BookOpen, Camera, Award, Calendar, Globe, Rocket } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "Club Founded",
      description: "Ad Astra was established by a group of passionate astronomy students with the vision of making space science accessible to all."
    },
    {
      year: "2019",
      title: "Observatory Built",
      description: "Completed construction of our campus observatory with a 14-inch Celestron telescope and CCD imaging system."
    },
    {
      year: "2020",
      title: "First Research Publication",
      description: "Published our first peer-reviewed paper on variable star observations in collaboration with professional astronomers."
    },
    {
      year: "2021",
      title: "100 Members Milestone",
      description: "Reached 100 active members, becoming one of the largest student organizations on campus."
    },
    {
      year: "2022",
      title: "International Recognition",
      description: "Received the Outstanding Student Astronomy Organization award from the International Astronomical Union."
    },
    {
      year: "2023",
      title: "Partnership Expansion",
      description: "Established partnerships with NASA, ESA, and local planetariums for enhanced learning opportunities."
    },
    {
      year: "2024",
      title: "New Horizons",
      description: "Launched our astrophotography program and began construction of a radio telescope array."
    }
  ];

  const activities = [
    {
      icon: <Telescope className="h-8 w-8 text-primary" />,
      title: "Observational Astronomy",
      description: "Regular stargazing sessions using our campus observatory and portable telescopes. Members learn to identify constellations, planets, and deep-sky objects."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Research Projects",
      description: "Hands-on research opportunities in collaboration with faculty. Projects range from exoplanet detection to galaxy formation studies."
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Astrophotography",
      description: "Learn the art and science of capturing celestial objects. From smartphone photography to advanced CCD imaging techniques."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Guest Lectures",
      description: "Monthly presentations by renowned astronomers, NASA scientists, and industry professionals sharing cutting-edge discoveries."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Public Outreach",
      description: "Educational programs for local schools and community groups, promoting scientific literacy and inspiring the next generation."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Space Missions",
      description: "Track and study current space missions, participate in citizen science projects, and follow the latest space exploration developments."
    }
  ];

  const values = [
    {
      title: "Curiosity",
      description: "We foster an environment where questions are encouraged and exploration is celebrated."
    },
    {
      title: "Collaboration", 
      description: "We believe the best discoveries come from working together across disciplines and experience levels."
    },
    {
      title: "Education",
      description: "We're committed to sharing knowledge and making astronomy accessible to everyone."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to push the boundaries of our understanding."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            ABOUT AD ASTRA
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Per aspera ad astra" - Through hardships to the stars. This ancient Latin phrase embodies our club's 
            spirit of perseverance and dedication to understanding the cosmos.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Ad Astra exists to inspire curiosity about the universe and provide students with hands-on 
                opportunities to explore astronomy and astrophysics. We bridge the gap between theoretical 
                knowledge and practical experience, fostering a community where both beginners and advanced 
                students can pursue their passion for space science. Through observation, research, and 
                education, we aim to contribute meaningfully to our understanding of the cosmos while 
                inspiring the next generation of astronomers and space scientists.
              </p>
            </div>
          </Card>
        </section>

        {/* Our Activities */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-card border-border p-6 text-center">
                <div className="flex justify-center mb-4">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Our History */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 h-full w-0.5 bg-primary/30"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                      <Card className="bg-card border-border p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-display font-bold text-xl text-primary">{milestone.year}</span>
                          <h3 className="font-semibold text-lg text-foreground">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border p-6 text-center">
                <h3 className="font-semibold text-lg text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <Card className="bg-card border-border p-8 md:p-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Research Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Observation Hours</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Publications</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Ready to Explore the Universe?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a complete beginner or an experienced observer, Ad Astra welcomes all 
              who share our passion for astronomy. Join us and become part of a community dedicated 
              to unlocking the mysteries of the cosmos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Become a Member
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;