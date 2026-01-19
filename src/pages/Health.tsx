import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Zap,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  FlaskConical,
  Apple
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const healthBenefits = [
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Dark chocolate may support heart health through multiple mechanisms",
    points: [
      "Flavanols help relax blood vessels, improving blood flow",
      "May reduce LDL cholesterol oxidation",
      "Associated with lower blood pressure in some studies",
      "Cocoa polyphenols may improve arterial function",
      "Best benefits seen with 70%+ cocoa content"
    ],
    evidence: "Moderate"
  },
  {
    icon: Brain,
    title: "Cognitive Function",
    description: "Compounds in dark chocolate may benefit brain health",
    points: [
      "Flavanols increase blood flow to the brain",
      "May improve short-term cognitive performance",
      "Theobromine provides mild stimulant effects",
      "Potential neuroprotective properties",
      "Some evidence for improved memory and attention"
    ],
    evidence: "Emerging"
  },
  {
    icon: Zap,
    title: "Antioxidant Properties",
    description: "High concentration of protective compounds",
    points: [
      "ORAC score higher than many fruits and vegetables",
      "Rich in catechins, epicatechins, and procyanidins",
      "Helps neutralize free radicals",
      "May reduce oxidative stress",
      "Cocoa is one of the richest food sources of flavanols"
    ],
    evidence: "Strong"
  },
  {
    icon: Activity,
    title: "Metabolic Effects",
    description: "Potential benefits for blood sugar and metabolism",
    points: [
      "Flavanols may improve insulin sensitivity",
      "Some studies show modest blood sugar benefits",
      "Low glycemic index compared to milk chocolate",
      "May support healthy gut bacteria",
      "Potential appetite-regulating effects"
    ],
    evidence: "Moderate"
  },
  {
    icon: Shield,
    title: "Mood Enhancement",
    description: "Natural compounds that may improve well-being",
    points: [
      "Contains phenylethylamine (PEA) - the 'love chemical'",
      "Theobromine provides gentle energy boost",
      "Anandamide produces mild euphoric effects",
      "Magnesium may help with relaxation",
      "Ritual of eating chocolate provides pleasure"
    ],
    evidence: "Anecdotal + Some Studies"
  }
];

const keyCompounds = [
  { name: "Flavanols", function: "Antioxidant, cardiovascular benefits", amount: "50-800mg per 100g" },
  { name: "Theobromine", function: "Mild stimulant, vasodilator", amount: "400-800mg per 100g" },
  { name: "Caffeine", function: "Alertness, mental performance", amount: "20-60mg per 100g" },
  { name: "Magnesium", function: "Muscle relaxation, enzyme function", amount: "150-180mg per 100g" },
  { name: "Iron", function: "Oxygen transport, energy", amount: "8-12mg per 100g" },
  { name: "Zinc", function: "Immune function, wound healing", amount: "2-3mg per 100g" },
];

const limitConsumption = [
  { group: "Pregnant women", reason: "Caffeine content; limit to moderate amounts" },
  { group: "People with GERD", reason: "May relax lower esophageal sphincter, worsening reflux" },
  { group: "Migraine sufferers", reason: "Can trigger headaches in sensitive individuals" },
  { group: "Those with kidney stones", reason: "High oxalate content may increase risk" },
  { group: "People on MAO inhibitors", reason: "Tyramine content may interact with medications" },
  { group: "Dogs and cats", reason: "Theobromine is toxic to pets" },
];

export default function Health() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Health & Biology
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the scientific evidence for dark chocolate's health benefits 
            and understanding its biological effects on the human body.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-12 p-4 rounded-lg bg-secondary border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> This information is for educational purposes only and is not medical advice. 
            Consult healthcare professionals for personalized recommendations.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
            <FlaskConical className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-serif font-bold text-foreground mb-1">300+</div>
            <div className="text-sm text-muted-foreground">Chemical compounds</div>
          </div>
          <div className="p-4 rounded-lg bg-forest/10 border border-forest/20 text-center">
            <Apple className="h-8 w-8 mx-auto mb-2 text-forest" />
            <div className="text-2xl font-serif font-bold text-foreground mb-1">8x</div>
            <div className="text-sm text-muted-foreground">More antioxidants than strawberries</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-center">
            <Heart className="h-8 w-8 mx-auto mb-2 text-destructive" />
            <div className="text-2xl font-serif font-bold text-foreground mb-1">20-30g</div>
            <div className="text-sm text-muted-foreground">Recommended daily amount</div>
          </div>
          <div className="p-4 rounded-lg bg-chocolate-medium/10 border border-chocolate-medium/20 text-center">
            <Zap className="h-8 w-8 mx-auto mb-2 text-chocolate-medium" />
            <div className="text-2xl font-serif font-bold text-foreground mb-1">70%+</div>
            <div className="text-sm text-muted-foreground">Cocoa for best benefits</div>
          </div>
        </div>

        {/* Health Benefits */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Potential Health Benefits
          </h2>
          
          <div className="space-y-6">
            {healthBenefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="font-serif text-xl">
                          {benefit.title}
                        </CardTitle>
                        <Badge variant="secondary">
                          Evidence: {benefit.evidence}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{benefit.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ThumbsUp className="h-4 w-4 text-forest flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Compounds */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Key Bioactive Compounds
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium">Compound</th>
                  <th className="text-left py-4 px-4 font-medium">Function</th>
                  <th className="text-left py-4 px-4 font-medium">Amount (per 100g)</th>
                </tr>
              </thead>
              <tbody>
                {keyCompounds.map((compound, i) => (
                  <tr key={compound.name} className={i % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="py-4 px-4 font-medium">{compound.name}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{compound.function}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{compound.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Safe Daily Intake */}
        <section className="mb-16">
          <div className="p-6 rounded-lg bg-forest/10 border border-forest/20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Safe Daily Intake
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5 text-forest" />
                  Recommended Amount
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 20-30 grams (1-2 small squares) of high-quality dark chocolate</li>
                  <li>• Choose 70% cocoa or higher for maximum benefits</li>
                  <li>• Consider as part of overall calorie intake</li>
                  <li>• Quality matters more than quantity</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Calorie Consideration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dark chocolate is calorie-dense (~550 kcal per 100g). Balance consumption with overall diet:
                </p>
                <div className="p-3 rounded bg-background">
                  <div className="text-lg font-serif font-bold">~150-200 kcal</div>
                  <div className="text-xs text-muted-foreground">per 30g serving</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Limit Consumption */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Who Should Limit Consumption
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {limitConsumption.map((item) => (
              <Card key={item.group} className="border-warning/30">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{item.group}</h3>
                      <p className="text-sm text-muted-foreground">{item.reason}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-medium text-destructive">Important Warning: Pets</h3>
                <p className="text-sm text-muted-foreground">
                  Chocolate is toxic to dogs, cats, and other pets. Theobromine and caffeine 
                  can cause vomiting, diarrhea, rapid breathing, seizures, and even death. 
                  Keep all chocolate products away from animals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
