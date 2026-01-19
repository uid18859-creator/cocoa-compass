import { 
  AlertTriangle, 
  Bug, 
  Droplets, 
  Thermometer, 
  Shield, 
  Factory,
  FlaskConical,
  Skull,
  Wind
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hazards = [
  {
    id: "microbial",
    icon: Bug,
    title: "Microbial Contamination",
    severity: "High",
    description: "Bacteria and pathogens that can cause foodborne illness",
    details: [
      "Salmonella is the primary bacterial concern in chocolate production",
      "Low water activity (0.4-0.5 aw) makes chocolate inhospitable to most bacteria",
      "However, Salmonella can survive in chocolate's fat-rich environment",
      "Heat resistance increases in low-moisture, high-fat foods",
      "Contamination typically occurs post-roasting"
    ],
    prevention: [
      "Strict environmental controls in processing areas",
      "Roasting at temperatures above 120°C",
      "Regular microbiological testing",
      "Proper sanitation between batches",
      "Employee hygiene training"
    ]
  },
  {
    id: "fungal",
    icon: FlaskConical,
    title: "Fungal Growth & Aflatoxins",
    severity: "High",
    description: "Mold contamination producing toxic compounds",
    details: [
      "Aspergillus and Penicillium molds can grow on improperly dried beans",
      "Aflatoxins are carcinogenic compounds produced by certain molds",
      "Ochratoxin A (OTA) is another mycotoxin found in cocoa",
      "Moisture above 8% promotes fungal growth",
      "Tropical storage conditions increase risk"
    ],
    prevention: [
      "Proper fermentation duration and turning",
      "Drying to 6-7% moisture content",
      "Raised drying beds to prevent ground contact",
      "Clean, dry storage facilities",
      "Regular testing for mycotoxin levels",
      "Rejection of moldy or damaged beans"
    ]
  },
  {
    id: "heavy-metals",
    icon: Skull,
    title: "Heavy Metal Contamination",
    severity: "Medium",
    description: "Lead and cadmium accumulation in cocoa beans",
    details: [
      "Cadmium is naturally absorbed by cocoa trees from volcanic soils",
      "Lead contamination often occurs during post-harvest handling",
      "Some origins have higher natural cadmium levels (South America)",
      "EU regulations limit cadmium to 0.1-0.8 mg/kg depending on product",
      "Lead limits are typically 0.1 mg/kg in most jurisdictions"
    ],
    prevention: [
      "Soil testing and origin selection",
      "Avoiding drying near roads or polluted areas",
      "Using food-grade equipment only",
      "Regular heavy metal testing",
      "Blending beans from different origins"
    ]
  },
  {
    id: "physical",
    icon: Shield,
    title: "Physical Hazards",
    severity: "Medium",
    description: "Foreign objects that can cause injury",
    details: [
      "Stones and debris from farming",
      "Metal fragments from equipment",
      "Plastic pieces from packaging materials",
      "Glass contamination in processing",
      "Insect parts and rodent contamination"
    ],
    prevention: [
      "Metal detectors and X-ray inspection",
      "Sieving and magnetic separation",
      "Visual inspection protocols",
      "Pest control programs",
      "Equipment maintenance schedules"
    ]
  },
  {
    id: "allergens",
    icon: AlertTriangle,
    title: "Allergen Cross-Contamination",
    severity: "High",
    description: "Unintentional presence of allergens",
    details: [
      "Tree nuts and peanuts are common in chocolate facilities",
      "Milk proteins can cross-contaminate dark chocolate",
      "Soy lecithin is a common allergen present in most chocolates",
      "Shared equipment increases cross-contact risk",
      "Undeclared allergens can cause severe reactions"
    ],
    prevention: [
      "Dedicated production lines when possible",
      "Thorough cleaning between allergen changeovers",
      "Allergen testing of finished products",
      "Clear labeling of all potential allergens",
      "Staff training on allergen management"
    ]
  }
];

const hygieneFactors = [
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Critical for preventing microbial growth and maintaining quality",
    requirements: [
      "Processing areas: 18-22°C",
      "Storage: 15-18°C",
      "Humidity: Below 55%",
      "Cold chain during transport",
      "Temperature logging systems"
    ]
  },
  {
    icon: Droplets,
    title: "Moisture Control",
    description: "Water activity management to prevent mold growth",
    requirements: [
      "Dried beans: 6-7% moisture",
      "Finished chocolate: <1% moisture",
      "Humidity monitoring in storage",
      "Moisture-barrier packaging",
      "Dehumidification systems"
    ]
  },
  {
    icon: Wind,
    title: "Air Quality",
    description: "Preventing airborne contamination in facilities",
    requirements: [
      "HEPA filtration in sensitive areas",
      "Positive pressure in clean rooms",
      "Regular air quality testing",
      "Dust collection systems",
      "Proper ventilation design"
    ]
  },
  {
    icon: Factory,
    title: "Facility Design",
    description: "Infrastructure that supports food safety",
    requirements: [
      "Smooth, cleanable surfaces",
      "Proper drainage systems",
      "Separation of raw and finished areas",
      "Pest-proof construction",
      "Adequate lighting for inspection"
    ]
  }
];

export default function Biosafety() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Biosafety & Hygiene
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the biological and chemical hazards in chocolate production, 
            and the measures taken to ensure product safety.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="mb-12 p-6 rounded-lg bg-warning/10 border border-warning/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-warning flex-shrink-0" />
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                Why Biosafety Matters
              </h2>
              <p className="text-muted-foreground">
                While chocolate is generally safe, improper handling can lead to contamination 
                with pathogens like Salmonella, toxins like aflatoxins, or heavy metals like 
                cadmium and lead. Understanding these risks helps us appreciate the importance 
                of food safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Hazards Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Key Hazards in Chocolate Production
          </h2>
          
          <div className="space-y-6">
            {hazards.map((hazard) => (
              <Card key={hazard.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      hazard.severity === "High" 
                        ? "bg-destructive/20" 
                        : "bg-warning/20"
                    }`}>
                      <hazard.icon className={`h-6 w-6 ${
                        hazard.severity === "High" 
                          ? "text-destructive" 
                          : "text-warning"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="font-serif text-xl">
                          {hazard.title}
                        </CardTitle>
                        <Badge variant={hazard.severity === "High" ? "destructive" : "secondary"}>
                          {hazard.severity} Risk
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{hazard.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Risk Details</h4>
                      <ul className="space-y-2">
                        {hazard.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-muted-foreground mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-forest/10 border border-forest/20">
                      <h4 className="font-medium mb-3 text-forest">Prevention Measures</h4>
                      <ul className="space-y-2">
                        {hazard.prevention.map((measure, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-forest mt-1">✓</span>
                            {measure}
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

        {/* Hygiene Practices */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Factory Hygiene Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {hygieneFactors.map((factor) => (
              <Card key={factor.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <factor.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg">{factor.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {factor.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* HACCP Summary */}
        <section className="mt-16">
          <div className="p-6 rounded-lg bg-primary text-primary-foreground">
            <h2 className="font-serif text-2xl font-bold mb-4">
              HACCP in Chocolate Production
            </h2>
            <p className="mb-4 opacity-90">
              Hazard Analysis Critical Control Points (HACCP) is a systematic preventive approach 
              to food safety. In chocolate production, key CCPs include:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold mb-1">CCP 1</h3>
                <p className="text-sm opacity-80">Roasting - Pathogen elimination</p>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold mb-1">CCP 2</h3>
                <p className="text-sm opacity-80">Metal detection - Physical hazards</p>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold mb-1">CCP 3</h3>
                <p className="text-sm opacity-80">Allergen controls - Cross-contact</p>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10">
                <h3 className="font-semibold mb-1">CCP 4</h3>
                <p className="text-sm opacity-80">Storage conditions - Quality maintenance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
