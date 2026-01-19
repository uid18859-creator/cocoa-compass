import { AlertTriangle, CheckCircle, XCircle, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/caseStudies";

const typeConfig = {
  contamination: {
    color: "bg-destructive/10 border-destructive/30 text-destructive",
    icon: AlertTriangle,
    label: "Contamination Incident"
  },
  recall: {
    color: "bg-warning/10 border-warning/30 text-warning",
    icon: XCircle,
    label: "Product Recall"
  },
  success: {
    color: "bg-forest/10 border-forest/30 text-forest",
    icon: CheckCircle,
    label: "Success Story"
  }
};

export default function CaseStudies() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of contamination incidents, product recalls, and ethical sourcing 
            success stories in the chocolate industry.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study) => {
            const config = typeConfig[study.type];
            const Icon = config.icon;
            
            return (
              <Card key={study.id} className={`border-2 ${config.color.split(' ')[1]}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${config.color.split(' ')[0]}`}>
                      <Icon className={`h-7 w-7 ${config.color.split(' ')[2]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className={config.color}>{config.label}</Badge>
                        <Badge variant="secondary">{study.year}</Badge>
                        <Badge variant="outline">{study.location}</Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl">
                        {study.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{study.summary}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* What Happened */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      What Happened
                    </h3>
                    <ul className="space-y-2">
                      {study.details.map((detail, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">{i + 1}.</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons Learned */}
                  <div className="p-4 rounded-lg bg-secondary">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Lessons Learned
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {study.lessons.map((lesson, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-forest flex-shrink-0 mt-0.5" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className={`p-4 rounded-lg ${
                    study.type === "success" 
                      ? "bg-forest/10 border border-forest/20" 
                      : "bg-primary/5 border border-primary/10"
                  }`}>
                    <h3 className="font-medium mb-2">Outcome</h3>
                    <p className="text-sm text-muted-foreground">{study.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary */}
        <section className="mt-16">
          <div className="p-6 rounded-lg bg-primary text-primary-foreground">
            <h2 className="font-serif text-2xl font-bold mb-4 text-center">
              Key Takeaways from Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <AlertTriangle className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Prevention is Key</h3>
                <p className="text-sm opacity-80">
                  Proactive safety measures prevent incidents that can harm consumers and damage brands
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Transparency Wins</h3>
                <p className="text-sm opacity-80">
                  Quick, transparent responses to issues protect consumer trust and brand reputation
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Ethics Can Succeed</h3>
                <p className="text-sm opacity-80">
                  Ethical business models prove that doing good and doing well can go together
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
