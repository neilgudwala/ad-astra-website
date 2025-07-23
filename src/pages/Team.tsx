import { useState } from "react";
import TeamSidebar from "@/components/TeamSidebar";
import TeamMemberCard from "@/components/TeamMemberCard";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");

  const teamData = {
    "2024-25": [
      {
        name: "Sarah Chen",
        position: "President",
        image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "sarah.chen@university.edu",
          github: "sarahc-astro",
          linkedin: "sarah-chen-astro"
        }
      },
      {
        name: "Emily Rodriguez",
        position: "Vice President",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "emily.rodriguez@university.edu",
          github: "emily-cosmo",
          linkedin: "emily-rodriguez-physics"
        }
      },
      {
        name: "Alex Kim",
        position: "Secretary & Treasurer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "alex.kim@university.edu",
          github: "alexkim-astro",
          linkedin: "alex-kim-cs"
        }
      },
      {
        name: "Marcus Thompson",
        position: "Outreach Coordinator",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "marcus.thompson@university.edu",
          linkedin: "marcus-thompson-edu"
        }
      },
      {
        name: "Dr. Michael Torres",
        position: "Faculty Advisor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "mtorres@university.edu"
        }
      },
      {
        name: "Dr. Lisa Patel",
        position: "Research Advisor",
        image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face",
        contact: {
          email: "lpatel@university.edu"
        }
      },
      {
        name: "Jordan Williams",
        position: "Astrophotography Team Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Maya Sharma",
        position: "Variable Star Research Lead",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "David Chen",
        position: "Exoplanet Team Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Sofia Gonzalez",
        position: "Public Outreach Lead",
        image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2023-24": [
      {
        name: "Dr. James Liu",
        position: "Former President",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Rachel Martinez",
        position: "Former Vice President",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Ahmed Hassan",
        position: "Former Secretary",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
      }
    ],
    "2022-23": [
      {
        name: "Michael Foster",
        position: "Former President",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
      },
      {
        name: "Jennifer Zhang",
        position: "Former Vice President",
        image: "https://images.unsplash.com/photo-1494790108755-2616b2e30bc0?w=400&h=400&fit=crop&crop=face"
      }
    ]
  };

  const years = Object.keys(teamData);

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            MEET THE TEAM
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Our diverse team of students and faculty work together to explore the cosmos.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex min-h-screen">
          <TeamSidebar 
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />
          
          <div className="flex-1 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {teamData[selectedYear]?.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  contact={member.contact}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;