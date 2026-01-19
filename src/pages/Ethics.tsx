import { 
  Users, 
  TreeDeciduous, 
  Scale, 
  Heart, 
  Leaf, 
  DollarSign,
  Globe,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ethicalIssues = [
  {
    id: "child-labor",
    icon: Users,
    title: "Child Labor",
    severity: "Critical",
    description: "Children working in hazardous conditions on cocoa farms",
    facts: [
      "An estimated 1.56 million children work in cocoa production in West Africa",
      "Many perform hazardous tasks: wielding machetes, carrying heavy loads, applying pesticides",
      "Root causes include poverty, lack of schools, and low cocoa prices",
      "Despite industry pledges since 2001, child labor remains widespread",
      "The chocolate industry is valued at $130+ billion annually"
    ],
    solutions: [
      "Support certified Fair Trade chocolate",
      "Choose brands with direct farmer relationships",
      "Look for third-party verified supply chains",
      "Support organizations fighting child labor",
      "Advocate for living wages for farmers"
    ]
  },
  {
    id: "fair-wages",
    icon: DollarSign,
    title: "Fair Wages for Farmers",
    severity: "High",
    description: "Cocoa farmers often live below the poverty line",
    facts: [
      "Average cocoa farmer earns less than $2 per day",
      "Farmers receive only 6% of the final chocolate price",
      "Living income gap: farmers earn 50-60% of what they need",
      "Price volatility makes long-term planning impossible",
      "Many farmers have never tasted chocolate"
    ],
    solutions: [
      "Fair Trade certification guarantees minimum prices",
      "Direct Trade models pay farmers 2-3x market rates",
      "Support cooperatives that increase farmer power",
      "Choose brands that publish farmer payment data",
      "Living income commitments from major brands"
    ]
  },
  {
    id: "deforestation",
    icon: TreeDeciduous,
    title: "Deforestation",
    severity: "High",
    description: "Cocoa expansion drives tropical forest destruction",
    facts: [
      "Côte d'Ivoire has lost 80%+ of its forests since 1960",
      "Cocoa is a leading driver of deforestation in West Africa",
      "Protected areas and national parks are illegally cleared",
      "Habitat loss threatens endangered species like chimpanzees",
      "Deforestation contributes to climate change"
    ],
    solutions: [
      "Support shade-grown and agroforestry cocoa",
      "Look for deforestation-free commitments",
      "Choose certified organic chocolate",
      "Satellite monitoring of supply chains",
      "Rehabilitation of degraded lands"
    ]
  },
  {
    id: "environment",
    icon: Globe,
    title: "Environmental Impact",
    severity: "Medium",
    description: "Resource use and pollution in cocoa production",
    facts: [
      "Water footprint: 17,000 liters per kg of chocolate",
      "Carbon footprint varies widely by production method",
      "Pesticide and fertilizer runoff affects ecosystems",
      "Processing generates significant waste",
      "Packaging contributes to plastic pollution"
    ],
    solutions: [
      "Organic farming reduces chemical pollution",
      "Water-efficient processing technologies",
      "Carbon-neutral shipping options",
      "Compostable and recyclable packaging",
      "Bean-to-bar reduces transport emissions"
    ]
  }
];

const comparisonData = [
  { aspect: "Farmer Payment", ethical: "Living wage / Premium prices", unethical: "Below poverty line wages" },
  { aspect: "Child Labor", ethical: "Zero tolerance / Verified", unethical: "No monitoring / Unknown" },
  { aspect: "Traceability", ethical: "Full supply chain visibility", unethical: "Unknown origin mixing" },
  { aspect: "Environment", ethical: "Shade-grown / Forest-positive", unethical: "Linked to deforestation" },
  { aspect: "Certifications", ethical: "Fair Trade, Organic, Rainforest Alliance", unethical: "No certifications" },
  { aspect: "Pricing", ethical: "Higher but reflects true costs", unethical: "Cheaper but hidden costs" },
];

export default function Ethics() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ethics & Sustainability
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the human and environmental impact of chocolate production, 
            and how to make more ethical choices as consumers.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
            <div className="text-3xl font-serif font-bold text-destructive mb-1">1.56M</div>
            <div className="text-sm text-muted-foreground">Children in cocoa labor</div>
          </div>
          <div className="p-4 rounded-lg bg-warning/10 border border-warning/30 text-center">
            <div className="text-3xl font-serif font-bold text-warning mb-1">$2/day</div>
            <div className="text-sm text-muted-foreground">Average farmer income</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-center">
            <div className="text-3xl font-serif font-bold text-foreground mb-1">6%</div>
            <div className="text-sm text-muted-foreground">Farmer share of price</div>
          </div>
          <div className="p-4 rounded-lg bg-forest/10 border border-forest/20 text-center">
            <div className="text-3xl font-serif font-bold text-forest mb-1">80%+</div>
            <div className="text-sm text-muted-foreground">Forest loss in Ivory Coast</div>
          </div>
        </div>

        {/* Ethical Issues */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Ethical Issues in Chocolate Production
          </h2>
          
          <div className="space-y-6">
            {ethicalIssues.map((issue) => (
              <Card key={issue.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      issue.severity === "Critical" 
                        ? "bg-destructive/20" 
                        : issue.severity === "High"
                        ? "bg-warning/20"
                        : "bg-secondary"
                    }`}>
                      <issue.icon className={`h-6 w-6 ${
                        issue.severity === "Critical" 
                          ? "text-destructive" 
                          : issue.severity === "High"
                          ? "text-warning"
                          : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="font-serif text-xl">
                          {issue.title}
                        </CardTitle>
                        <Badge variant={
                          issue.severity === "Critical" 
                            ? "destructive" 
                            : "secondary"
                        }>
                          {issue.severity}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{issue.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Key Facts</h4>
                      <ul className="space-y-2">
                        {issue.facts.map((fact, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-muted-foreground mt-1">•</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-forest/10 border border-forest/20">
                      <h4 className="font-medium mb-3 text-forest flex items-center gap-2">
                        <Leaf className="h-4 w-4" />
                        What You Can Do
                      </h4>
                      <ul className="space-y-2">
                        {issue.solutions.map((solution, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-forest mt-1">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Ethical vs. Unethical Chocolate
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium">Aspect</th>
                  <th className="text-left py-4 px-4 font-medium">
                    <div className="flex items-center gap-2 text-forest">
                      <CheckCircle className="h-5 w-5" />
                      Ethical Chocolate
                    </div>
                  </th>
                  <th className="text-left py-4 px-4 font-medium">
                    <div className="flex items-center gap-2 text-destructive">
                      <XCircle className="h-5 w-5" />
                      Unethical Chocolate
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="py-4 px-4 font-medium">{row.aspect}</td>
                    <td className="py-4 px-4 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-forest flex-shrink-0 mt-0.5" />
                        {row.ethical}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        {row.unethical}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="p-6 rounded-lg bg-forest text-accent-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">
                Make a Difference with Every Purchase
              </h2>
              <p className="mb-6 opacity-90">
                Your chocolate choices have real impact. By choosing ethically sourced chocolate, 
                you support farmers' livelihoods, protect children from exploitation, and help 
                preserve tropical forests. Look for Fair Trade, Rainforest Alliance, or Direct 
                Trade certifications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-accent-foreground/20 text-accent-foreground px-4 py-2">
                  <Scale className="h-4 w-4 mr-2" />
                  Fair Trade
                </Badge>
                <Badge className="bg-accent-foreground/20 text-accent-foreground px-4 py-2">
                  <Leaf className="h-4 w-4 mr-2" />
                  Rainforest Alliance
                </Badge>
                <Badge className="bg-accent-foreground/20 text-accent-foreground px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Direct Trade
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
