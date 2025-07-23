import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamSidebarProps {
  years: string[];
  selectedYear: string;
  onYearSelect: (year: string) => void;
}

const TeamSidebar = ({ years, selectedYear, onYearSelect }: TeamSidebarProps) => {
  return (
    <div className="w-48 bg-card border border-border p-4 rounded-lg shadow-sm"> {/* Added rounded-lg and shadow-sm */}
      <h3 className="font-display font-bold text-lg text-foreground mb-4">
        Select Year
      </h3>
      <div className="space-y-2">
        {years.map((year) => {
          const isSelected = selectedYear === year;
          return (
            <Button
              key={year}
              variant={isSelected ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onYearSelect(year)}
            >
              {year}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSidebar;