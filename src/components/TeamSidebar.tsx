import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamSidebarProps {
  years: string[];
  selectedYear: string;
  onYearSelect: (year: string) => void;
}

const TeamSidebar = ({ years, selectedYear, onYearSelect }: TeamSidebarProps) => {
  return (
    <div className="w-48 bg-card border-r border-border p-4">
      <h3 className="font-display font-bold text-lg text-foreground mb-4">
        Academic Years
      </h3>
      <div className="space-y-2">
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "ghost"}
            className={cn(
              "w-full justify-start text-left",
              selectedYear === year 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => onYearSelect(year)}
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TeamSidebar;