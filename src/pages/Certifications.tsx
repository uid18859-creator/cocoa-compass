import { 
  Award, 
  Leaf, 
  Globe, 
  Shield, 
  Scale, 
  Factory,
  Check,
  Info,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: "fssai",
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    icon: Shield,
    color: "bg-orange-100 text-orange-800",
    description: "India's regulatory body for food safety",
    what: "Ensures food products meet Indian safety standards for manufacturing, storage, distribution, sale, and import",
    look: "14-digit license number on packaging",
    importance: "Mandatory for all food products sold in India"
  },
  {
    id: "iso-22000",
    name: "ISO 22000",
    fullName: "Food Safety Management System",
    icon: Factory,
    color: "bg-slate-100 text-slate-800",
    description: "International food safety management standard",
    what: "Certifies that manufacturers have implemented systematic food safety controls based on HACCP principles",
    look: "ISO 22000 certification logo",
    importance: "Indicates robust food safety management systems"
  },
  {
    id: "organic",
    name: "Organic",
    fullName: "Various (USDA Organic, India Organic, EU Organic)",
    icon: Leaf,
    color: "bg-green-100 text-green-800",
    description: "Products from certified organic agriculture",
    what: "Cocoa grown without synthetic pesticides, fertilizers, or GMOs; processed without artificial additives",
    look: "Green organic seal (varies by country)",
    importance: "Reduces chemical exposure and environmental impact"
  },
  {
    id: "fair-trade",
    name: "Fair Trade",
    fullName: "Fairtrade International / Fair Trade USA",
    icon: Scale,
    color: "bg-teal-100 text-teal-800",
    description: "Ensures fair wages and working conditions",
    what: "Guarantees minimum prices and premiums to farmers, prohibits child labor, promotes community development",
    look: "Black and green Fairtrade logo",
    importance: "Supports ethical sourcing and farmer livelihoods"
  },
  {
    id: "rainforest-alliance",
    name: "Rainforest Alliance",
    fullName: "Rainforest Alliance Certified",
    icon: Globe,
    color: "bg-emerald-100 text-emerald-800",
    description: "Sustainability certification for agriculture",
    what: "Covers environmental, social, and economic sustainability including forest conservation and worker rights",
    look: "Green frog seal",
    importance: "Comprehensive sustainability standard"
  },
  {
    id: "utz",
    name: "UTZ (Now Rainforest Alliance)",
    fullName: "UTZ Certified (merged with Rainforest Alliance in 2018)",
    icon: Award,
    color: "bg-blue-100 text-blue-800",
    description: "Sustainable farming certification",
    what: "Focused on good agricultural practices, supply chain traceability, and farmer training",
    look: "UTZ logo (legacy) or Rainforest Alliance logo",
    importance: "Emphasis on productivity and traceability"
  }
];

const labelGuidance = [
  {
    term: "Best Before / Best By",
    meaning: "Quality date - product is safe but quality may decline after this date",
    action: "Usually safe to consume shortly after, though taste may suffer",
    icon: Calendar
  },
  {
    term: "Expiry Date / Use By",
    meaning: "Safety date - product should not be consumed after this date",
    action: "Do not consume after this date for safety reasons",
    icon: Calendar
  },
  {
    term: "% Cacao / % Cocoa",
    meaning: "Total cocoa content (cocoa solids + cocoa butter)",
    action: "Higher % = more intense flavor and more health compounds",
    icon: Info
  },
  {
    term: "Cocoa Solids",
    meaning: "The non-fat portion of cocoa (contains flavanols)",
    action: "Check this for health benefits, not just total cocoa %",
    icon: Info
  },
  {
    term: "May Contain...",
    meaning: "Cross-contamination warning for allergens",
    action: "Important for people with severe allergies",
    icon: Info
  },
  {
    term: "Single Origin",
    meaning: "Cocoa from one country or region",
    action: "Often indicates higher quality and traceability",
    icon: Info
  }
];

export default function Certifications() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & Labels
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn to identify and understand food safety certifications and product labels 
            on chocolate packaging.
          </p>
        </div>

        {/* Key Certifications */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Key Certifications Explained
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cert.color}`}>
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="font-serif text-xl">{cert.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {cert.id === "utz" ? "Legacy" : "Active"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">What it means:</h4>
                      <p className="text-sm text-muted-foreground">{cert.what}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">What to look for:</h4>
                      <p className="text-sm text-muted-foreground">{cert.look}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary">
                      <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                        <Check className="h-4 w-4 text-forest" />
                        Why it matters:
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.importance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reading Labels */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            How to Read Chocolate Labels
          </h2>

          <div className="space-y-4">
            {labelGuidance.map((item) => (
              <Card key={item.term}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.term}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.meaning}</p>
                      <p className="text-sm text-primary">{item.action}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Before vs Expiry */}
        <section className="mb-16">
          <div className="p-6 rounded-lg bg-primary text-primary-foreground">
            <h2 className="font-serif text-2xl font-bold mb-6 text-center">
              Best Before vs. Expiry Date
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Best Before Date
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Indicates when product is at peak quality</li>
                  <li>• Product usually safe to eat after this date</li>
                  <li>• Quality (taste, texture) may decline</li>
                  <li>• Chocolate may develop "bloom" but is still safe</li>
                  <li>• Use your senses: look, smell, taste</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Expiry Date / Use By
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Indicates safety limit for consumption</li>
                  <li>• Do NOT consume after this date</li>
                  <li>• More common on perishable foods</li>
                  <li>• Less common on chocolate (low moisture)</li>
                  <li>• Take seriously for food safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient List Tips */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Reading Ingredient Lists
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-forest/30">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-forest flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Good Signs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">✓</span>
                    Short ingredient list (4-6 items)
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">✓</span>
                    "Cocoa mass" or "Cocoa liquor" as first ingredient
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">✓</span>
                    Natural vanilla or vanilla extract
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">✓</span>
                    Cane sugar (less processed)
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">✓</span>
                    Cocoa butter (not vegetable fats)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-warning/30">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-warning flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Things to Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-warning">!</span>
                    Sugar as first ingredient = more sugar than cocoa
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-warning">!</span>
                    "Vanillin" = artificial vanilla flavoring
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-warning">!</span>
                    Vegetable fats may replace cocoa butter
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-warning">!</span>
                    Long lists with unfamiliar additives
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-warning">!</span>
                    "Alkalized" cocoa = reduced flavanols
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
