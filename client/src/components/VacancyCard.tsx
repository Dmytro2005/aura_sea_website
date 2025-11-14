import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ship, Calendar, DollarSign } from "lucide-react";

interface VacancyCardProps {
  title: string;
  vesselType: string;
  salary: string;
  contractLength: string;
  description: string;
  onApply: () => void;
}

export default function VacancyCard({
  title,
  vesselType,
  salary,
  contractLength,
  description,
  onApply,
}: VacancyCardProps) {
  return (
    <Card className="glass-card hover-elevate h-full flex flex-col" data-testid={`vacancy-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
        <Badge variant="secondary" className="w-fit mt-2">
          <Ship className="w-3 h-3 mr-1" />
          {vesselType}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-foreground">{salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-foreground">{contractLength}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={onApply}
          data-testid={`button-apply-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Apply for this vacancy
        </Button>
      </CardFooter>
    </Card>
  );
}
