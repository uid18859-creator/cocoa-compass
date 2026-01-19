import { useState } from "react";
import { 
  Leaf, 
  Scissors, 
  Timer, 
  Sun, 
  Flame, 
  Cog, 
  RefreshCw, 
  Thermometer, 
  Square, 
  Package, 
  Truck,
  AlertTriangle,
  Shield,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { processSteps, type ProcessStep } from "@/data/processSteps";

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Scissors,
  Timer,
  Sun,
  Flame,
  Cog,
  RefreshCw,
  Thermometer,
  Square,
  Package,
  Truck,
};

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[step.icon] || Leaf;

  return (
    <Card className={`transition-all duration-300 ${isExpanded ? "shadow-elevated" : ""}`}>
      <CardHeader 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="text-center mt-2">
              <Badge variant="secondary" className="text-xs">
                Step {index + 1}
              </Badge>
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="font-serif text-xl mb-2">{step.title}</CardTitle>
            <p className="text-muted-foreground">{step.description}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              <span>{step.duration}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 space-y-6">
          <div className="p-4 rounded-lg bg-secondary">
            <h4 className="font-medium mb-2">What Happens</h4>
            <p className="text-sm text-muted-foreground">{step.whatHappens}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h4 className="font-medium text-destructive">Safety Risks</h4>
              </div>
              <ul className="space-y-2">
                {step.safetyRisks.map((risk, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-forest/10 border border-forest/20">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-forest" />
                <h4 className="font-medium text-forest">Hygiene Measures</h4>
              </div>
              <ul className="space-y-2">
                {step.hygieneMeasures.map((measure, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function FarmToBar() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Farm to Bar Process
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the complete journey of dark chocolate production, from cocoa farming 
            to the final packaged product. Click on each step to learn about safety risks 
            and hygiene measures.
          </p>
        </div>

        {/* Visual Process Flow */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-start md:justify-center gap-2 min-w-max px-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Leaf;
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 text-center max-w-[60px]">
                      {step.title.split(" ")[0]}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-border mx-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 p-6 rounded-lg bg-secondary">
          <h2 className="font-serif text-2xl font-bold mb-4">Key Takeaways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Critical Control Points</h3>
              <p className="text-sm text-muted-foreground">
                Fermentation, roasting, and tempering are critical stages where quality and 
                safety are most vulnerable. Temperature control is essential throughout.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Major Contaminants</h3>
              <p className="text-sm text-muted-foreground">
                Aflatoxins from mold, heavy metals from soil, and microbial contamination are 
                the primary safety concerns in chocolate production.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">HACCP Principles</h3>
              <p className="text-sm text-muted-foreground">
                Modern chocolate factories implement Hazard Analysis Critical Control Points 
                (HACCP) to systematically prevent food safety hazards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
