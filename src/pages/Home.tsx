import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Factory, 
  Shield, 
  Heart, 
  Scale, 
  Award, 
  FileText, 
  GitCompare,
  ArrowRight,
  Leaf,
  FlaskConical,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-chocolate.jpg";

const navigationCards = [
  {
    path: "/library",
    icon: BookOpen,
    title: "Chocolate Library",
    description: "Explore 20+ dark chocolates with detailed nutritional and safety information",
    color: "bg-chocolate-medium",
  },
  {
    path: "/process",
    icon: Factory,
    title: "Farm to Bar",
    description: "Step-by-step journey from cocoa farming to finished chocolate",
    color: "bg-cocoa",
  },
  {
    path: "/biosafety",
    icon: Shield,
    title: "Biosafety & Hygiene",
    description: "Learn about contamination risks and safety measures",
    color: "bg-destructive",
  },
  {
    path: "/ethics",
    icon: Scale,
    title: "Ethics & Sustainability",
    description: "Understand ethical issues and sustainable practices",
    color: "bg-forest",
  },
  {
    path: "/health",
    icon: Heart,
    title: "Health & Biology",
    description: "Discover the biological effects of dark chocolate",
    color: "bg-accent",
  },
  {
    path: "/certifications",
    icon: Award,
    title: "Certifications",
    description: "Decode food safety labels and quality marks",
    color: "bg-gold",
  },
  {
    path: "/case-studies",
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of safety incidents and successes",
    color: "bg-chocolate-light",
  },
  {
    path: "/compare",
    icon: GitCompare,
    title: "Compare Chocolates",
    description: "Side-by-side comparison of different products",
    color: "bg-primary",
  },
];

const timelineSteps = [
  { label: "Sourcing", icon: Leaf, description: "Ethical cocoa farming" },
  { label: "Processing", icon: Factory, description: "From bean to bar" },
  { label: "Safety", icon: Shield, description: "Quality control" },
  { label: "Ethics", icon: Users, description: "Fair practices" },
  { label: "Science", icon: FlaskConical, description: "Health benefits" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate-dark/95 via-chocolate-dark/80 to-chocolate-dark/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-forest/20 text-forest-light text-sm font-medium mb-6">
              Experiential Learning Project
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
              From Cocoa Bean to Dark Chocolate Bar
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 mb-4 font-serif">
              Safety, Ethics & Science
            </p>
            <p className="text-lg text-cream/70 mb-8 max-w-2xl">
              Explore the complete journey of dark chocolate production, from sustainable farming practices 
              to food safety standards and the health benefits of this beloved treat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cream text-chocolate-dark hover:bg-cream/90">
                <Link to="/library">
                  Explore Library <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
                <Link to="/process">
                  Learn the Process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dark Chocolate */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Dark Chocolate?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dark chocolate is a form of chocolate containing cocoa solids, cocoa butter, and sugar, 
              without the milk solids found in milk chocolate. With cocoa content ranging from 50% to 100%, 
              dark chocolate offers a richer, more intense flavor profile and is valued for its potential 
              health benefits, including antioxidants called flavonoids.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-serif font-bold text-primary mb-1">50-100%</div>
                <div className="text-sm text-muted-foreground">Cocoa Content</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-serif font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Years of History</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-serif font-bold text-primary mb-1">70%</div>
                <div className="text-sm text-muted-foreground">West Africa Supply</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <div className="text-3xl font-serif font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-muted-foreground">Flavor Compounds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            The Chocolate Journey
          </h2>
          
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {timelineSteps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-card">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground mb-1">Step {index + 1}</span>
                  <h3 className="font-serif font-semibold text-foreground text-center">{step.label}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Sections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through comprehensive educational content covering every aspect of dark chocolate 
              production, safety, and ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCards.map((card) => (
              <Link key={card.path} to={card.path}>
                <Card className="h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-3`}>
                      <card.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{card.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Why Biosafety & Ethics Matter
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              Understanding the safety and ethical dimensions of chocolate production is crucial for 
              informed consumer choices. From preventing contamination that can cause illness to 
              supporting fair wages for farmers, every purchase we make has an impact on global 
              food systems and human lives.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-primary-foreground/10">
                <Shield className="h-10 w-10 mx-auto mb-4 opacity-90" />
                <h3 className="font-serif font-semibold text-lg mb-2">Food Safety</h3>
                <p className="text-sm opacity-80">
                  Proper safety measures prevent contamination and protect public health
                </p>
              </div>
              <div className="p-6 rounded-lg bg-primary-foreground/10">
                <Users className="h-10 w-10 mx-auto mb-4 opacity-90" />
                <h3 className="font-serif font-semibold text-lg mb-2">Human Rights</h3>
                <p className="text-sm opacity-80">
                  Ethical sourcing ensures fair treatment of farmers and workers
                </p>
              </div>
              <div className="p-6 rounded-lg bg-primary-foreground/10">
                <Leaf className="h-10 w-10 mx-auto mb-4 opacity-90" />
                <h3 className="font-serif font-semibold text-lg mb-2">Sustainability</h3>
                <p className="text-sm opacity-80">
                  Responsible practices protect the environment for future generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
