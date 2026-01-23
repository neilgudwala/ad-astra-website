import { useState } from "react";
import TeamSidebar from "@/components/TeamSidebar";
import TeamMemberCard from "@/components/TeamMemberCard";
import data from "@/data/TeamData.json";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Team = () => {
  // UPDATE THE DEFAULT YEAR IN FUTURE 
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teamData = data;

  const years = Object.keys(teamData);
  const currentYearData = teamData[selectedYear as keyof typeof teamData];
  const currentTeam = currentYearData?.team || [];
  const achievements = currentYearData?.achievements || [];
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
                  contact={'contact' in member ? member.contact : undefined}
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
                    contact={'contact' in member ? member.contact : undefined}
                  />
                ))}
              </div>
            )}
            {/* Achievements Section */}
            {achievements.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6 mt-6">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h2 className="font-adastra font-bold text-2xl md:text-3xl text-foreground">
                    Achievements {selectedYear}
                  </h2>
                </div>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm p-6">
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-foreground text-base md:text-lg flex-1">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;