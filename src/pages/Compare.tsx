import { useState } from "react";
import { ArrowLeftRight, Check, X, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { chocolates, getCertificationColor, type Chocolate } from "@/data/chocolates";

function ComparisonValue({ 
  label, 
  value1, 
  value2, 
  unit = "", 
  higherBetter = true,
  isString = false 
}: { 
  label: string; 
  value1: number | string; 
  value2: number | string; 
  unit?: string;
  higherBetter?: boolean;
  isString?: boolean;
}) {
  const numValue1 = typeof value1 === "number" ? value1 : 0;
  const numValue2 = typeof value2 === "number" ? value2 : 0;
  
  let better1 = false;
  let better2 = false;
  
  if (!isString && numValue1 !== numValue2) {
    if (higherBetter) {
      better1 = numValue1 > numValue2;
      better2 = numValue2 > numValue1;
    } else {
      better1 = numValue1 < numValue2;
      better2 = numValue2 < numValue1;
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-border last:border-b-0">
      <div className={`text-sm ${better1 ? "font-medium text-forest" : "text-muted-foreground"}`}>
        {value1}{unit}
        {better1 && <Check className="inline h-4 w-4 ml-1" />}
      </div>
      <div className="text-sm font-medium text-center">{label}</div>
      <div className={`text-sm text-right ${better2 ? "font-medium text-forest" : "text-muted-foreground"}`}>
        {better2 && <Check className="inline h-4 w-4 mr-1" />}
        {value2}{unit}
      </div>
    </div>
  );
}

function ChocolateSelector({ 
  value, 
  onChange, 
  excludeId,
  label 
}: { 
  value: string; 
  onChange: (value: string) => void;
  excludeId?: string;
  label: string;
}) {
  const availableChocolates = chocolates.filter(c => c.id !== excludeId);

  return (
    <div>
      <label className="text-sm font-medium mb-2 block">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select chocolate..." />
        </SelectTrigger>
        <SelectContent className="bg-popover">
          {availableChocolates.map((chocolate) => (
            <SelectItem key={chocolate.id} value={chocolate.id}>
              {chocolate.brand} - {chocolate.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function ChocolateSummary({ chocolate }: { chocolate: Chocolate }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {chocolate.brand}
        </p>
        <CardTitle className="font-serif text-lg">{chocolate.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Cocoa</span>
          <Badge variant="secondary" className="font-bold">{chocolate.cocoaPercentage}%</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Origin</span>
          <span className="text-sm">{chocolate.origin}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Price</span>
          <span className="text-sm font-medium">{chocolate.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Ethical Score</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`w-3 h-3 rounded-full ${
                  star <= chocolate.ethicalScore ? "bg-forest" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="pt-2">
          <p className="text-xs text-muted-foreground mb-2">Certifications</p>
          <div className="flex flex-wrap gap-1">
            {chocolate.certifications.slice(0, 3).map((cert) => (
              <Badge key={cert} variant="secondary" className={`text-xs ${getCertificationColor(cert)}`}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Compare() {
  const [chocolate1Id, setChocolate1Id] = useState<string>("");
  const [chocolate2Id, setChocolate2Id] = useState<string>("");

  const chocolate1 = chocolates.find(c => c.id === chocolate1Id);
  const chocolate2 = chocolates.find(c => c.id === chocolate2Id);

  const swapChocolates = () => {
    const temp = chocolate1Id;
    setChocolate1Id(chocolate2Id);
    setChocolate2Id(temp);
  };

  const clearSelection = () => {
    setChocolate1Id("");
    setChocolate2Id("");
  };

  const bothSelected = chocolate1 && chocolate2;

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compare Chocolates
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select two dark chocolates to compare their nutritional values, safety information, 
            and ethical ratings side by side.
          </p>
        </div>

        {/* Selection */}
        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <ChocolateSelector
              value={chocolate1Id}
              onChange={setChocolate1Id}
              excludeId={chocolate2Id}
              label="First Chocolate"
            />
            <div className="flex justify-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={swapChocolates}
                disabled={!bothSelected}
              >
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
              {(chocolate1Id || chocolate2Id) && (
                <Button variant="ghost" onClick={clearSelection}>
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
            <ChocolateSelector
              value={chocolate2Id}
              onChange={setChocolate2Id}
              excludeId={chocolate1Id}
              label="Second Chocolate"
            />
          </div>
        </div>

        {/* Summaries */}
        {(chocolate1 || chocolate2) && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {chocolate1 ? (
              <ChocolateSummary chocolate={chocolate1} />
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex items-center justify-center h-48">
                  <p className="text-muted-foreground">Select first chocolate</p>
                </CardContent>
              </Card>
            )}
            {chocolate2 ? (
              <ChocolateSummary chocolate={chocolate2} />
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex items-center justify-center h-48">
                  <p className="text-muted-foreground">Select second chocolate</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Comparison Table */}
        {bothSelected && (
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Detailed Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Basics */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Basic Information
                </h3>
                <ComparisonValue
                  label="Cocoa Content"
                  value1={chocolate1.cocoaPercentage}
                  value2={chocolate2.cocoaPercentage}
                  unit="%"
                  higherBetter={true}
                />
                <ComparisonValue
                  label="Ethical Score"
                  value1={chocolate1.ethicalScore}
                  value2={chocolate2.ethicalScore}
                  unit="/5"
                  higherBetter={true}
                />
              </div>

              {/* Nutrition */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Nutritional Values (per 100g)
                </h3>
                <ComparisonValue
                  label="Calories"
                  value1={chocolate1.nutritionalValues.calories}
                  value2={chocolate2.nutritionalValues.calories}
                  unit=" kcal"
                  higherBetter={false}
                />
                <ComparisonValue
                  label="Total Fat"
                  value1={chocolate1.nutritionalValues.fat}
                  value2={chocolate2.nutritionalValues.fat}
                  unit="g"
                  higherBetter={false}
                />
                <ComparisonValue
                  label="Sugar"
                  value1={chocolate1.nutritionalValues.sugar}
                  value2={chocolate2.nutritionalValues.sugar}
                  unit="g"
                  higherBetter={false}
                />
                <ComparisonValue
                  label="Protein"
                  value1={chocolate1.nutritionalValues.protein}
                  value2={chocolate2.nutritionalValues.protein}
                  unit="g"
                  higherBetter={true}
                />
                <ComparisonValue
                  label="Fiber"
                  value1={chocolate1.nutritionalValues.fiber}
                  value2={chocolate2.nutritionalValues.fiber}
                  unit="g"
                  higherBetter={true}
                />
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {chocolate1.certifications.map((cert) => (
                      <Badge key={cert} className={`${getCertificationColor(cert)} mr-1 mb-1`}>
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2 text-right">
                    {chocolate2.certifications.map((cert) => (
                      <Badge key={cert} className={`${getCertificationColor(cert)} ml-1 mb-1`}>
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {!chocolate1 && !chocolate2 && (
          <div className="text-center py-12">
            <ArrowLeftRight className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="font-serif text-xl font-medium mb-2">Ready to Compare</h2>
            <p className="text-muted-foreground">
              Select two chocolates from our library to see a detailed comparison
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
