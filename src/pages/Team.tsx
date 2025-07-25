import { useState } from "react";
import TeamSidebar from "@/components/TeamSidebar";
import TeamMemberCard from "@/components/TeamMemberCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teamData = {
    "2025-26": [
      {
        name: "Neha Bhagwat",
        position: "President",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "sarah.chen@university.edu",
          github: "sarahc-astro",
          linkedin: "sarah-chen-astro"
        }
      },
      {
        name: "Arnav Kulshrestha",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "emily.rodriguez@university.edu",
          github: "emily-cosmo",
          linkedin: "emily-rodriguez-physics"
        }
      },
      {
        name: "Simran Misra",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Rohan Prakash",
        position: "Research Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Tulika Devale",
        position: "Tech Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Avani Asati",
        position: "Astrophotography Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Eeshan Bhandarkar",
        position: "Content & Events Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      }
    ],
    "2024-25": [
      {
        name: "Neil Gudwala",
        position: "President",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Arpan Biswas",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Neha Bhagwat",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Arnav Kulshrestha",
        position: "Astrophotography Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Divyansh Rungta",
        position: "Content Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Siddharth Sastri",
        position: "Research Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Sparsh Batra",
        position: "Project Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Aaditya Bhagat",
        position: "Event Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      }
    ],
    "2023-24": [
      {
        name: "Atreyi Dasgupta",
        position: "President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Divyansh Gangwar",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Neil Gudwala",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2022-23": [
      {
        name: "Manasa SK",
        position: "President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Mehar Chawla",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Ansh Kanotra",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2021-22": [
      {
        name: "KV Sai Tarun",
        position: "President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Mansvi Bhatia",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Atharv Chaba",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Vedagya Saraswat",
        position: "Ex-Officio Finance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2020-21": [
      {
        name: "Hemendra Singh",
        position: "President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Aayush Shah",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Vedagya Saraswat",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2019-20": [
      {
        name: "Yashas Anilkumar",
        position: "President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Sanika Khadkikar",
        position: "Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Rupanshu Soi",
        position: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      }
    ]
  };

  const years = Object.keys(teamData);
  const currentTeam = teamData[selectedYear] || [];
  const topThreeMembers = currentTeam.slice(0, 3);
  const otherMembers = currentTeam.slice(3);

  return (
    <div className="min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-adastra font-bold text-4xl md:text-5xl text-foreground mb-6 select-none">
            MEET THE TEAM
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Our diverse team of students and faculty work together to explore the cosmos.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex min-h-screen">
          {!isMobile && (
            <TeamSidebar
              years={years}
              selectedYear={selectedYear}
              onYearSelect={setSelectedYear}
            />
          )}
          <div className="flex-1 p-8">
            {isMobile && (
              <div className="mb-6 w-full flex justify-center">
                <select
                  className="bg-card border border-border rounded-lg px-4 py-2 text-lg text-foreground"
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            )}
            {/* Top 3 Members - Large Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {topThreeMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  contact={member.contact}
                />
              ))}
            </div>

            {/* Other Members - Normal Sized Cards */}
            {otherMembers.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {otherMembers.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    contact={member.contact}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;