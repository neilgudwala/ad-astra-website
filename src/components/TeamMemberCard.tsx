import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  contact?: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
}

const TeamMemberCard = ({ name, position, image, contact }: TeamMemberCardProps) => {
  return (
    <Card className="bg-card border-border p-4 text-center hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
      />
      <h3 className="font-semibold text-foreground text-lg mb-1">{name}</h3>
      <p className="text-primary text-sm font-medium mb-3">{position}</p>
      
      {contact && (
        <div className="flex justify-center gap-2">
          {contact.email && (
            <Button size="sm" variant="outline" className="p-2">
              <Mail className="h-4 w-4" />
            </Button>
          )}
          {contact.github && (
            <Button size="sm" variant="outline" className="p-2">
              <Github className="h-4 w-4" />
            </Button>
          )}
          {contact.linkedin && (
            <Button size="sm" variant="outline" className="p-2">
              <Linkedin className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default TeamMemberCard;