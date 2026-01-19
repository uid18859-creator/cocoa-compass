import { useState, useRef } from "react";
import { 
  Upload, 
  Loader2, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Info,
  Apple,
  FlaskConical,
  Heart,
  Shield,
  Users,
  ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { analyzeFoodLabel, type LabelAnalysisResult } from "@/lib/gemini";

export default function FoodLabelAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<LabelAnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPG, PNG)");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image size should be less than 10MB");
      return;
    }

    setError(null);
    setResult(null);

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setSelectedImage(previewUrl);

    // Convert to base64 for API
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setImageBase64(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!imageBase64) {
      setError("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const analysisResult = await analyzeFoodLabel(imageBase64);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze image");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setImageBase64(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-forest/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <FlaskConical className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Smart Food Label Analyzer
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upload a photo of any food product's nutrition or ingredient label. Our AI will analyze 
              it and provide you with a detailed breakdown of nutritional content, ingredient explanations, 
              health impacts, and biosafety considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                
                {!selectedImage ? (
                  <label 
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center cursor-pointer py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">
                      Upload Food Label Image
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      Click to upload or drag and drop<br />
                      JPG, PNG (max 10MB)
                    </p>
                  </label>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded food label" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        onClick={handleClear}
                        disabled={isAnalyzing}
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="min-w-[140px]"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <FlaskConical className="mr-2 h-4 w-4" />
                            Analyze Label
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">
                Analysis Results
              </h2>

              {/* Nutrition Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Apple className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif">Extracted Nutrition Information</CardTitle>
                      <CardDescription>Nutritional values from the label</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Calories", value: result.nutrition.calories },
                      { label: "Sugar", value: result.nutrition.sugar },
                      { label: "Fat", value: result.nutrition.fat },
                      { label: "Saturated Fat", value: result.nutrition.saturatedFat },
                      { label: "Carbohydrates", value: result.nutrition.carbohydrates },
                      { label: "Protein", value: result.nutrition.protein },
                      { label: "Salt/Sodium", value: result.nutrition.sodium },
                    ].map((item) => (
                      <div key={item.label} className="p-3 rounded-lg bg-secondary">
                        <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ingredient Analysis */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif">Ingredient Analysis</CardTitle>
                      <CardDescription>Breakdown of ingredients and additives</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Ingredients List</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.ingredients.ingredients.map((ingredient, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {result.ingredients.additives.length > 0 && (
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Additives & Preservatives</h4>
                      <div className="space-y-3">
                        {result.ingredients.additives.map((additive, i) => (
                          <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border">
                            <p className="font-medium text-foreground">{additive.name}</p>
                            <p className="text-sm text-muted-foreground mt-1">{additive.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Health Impact */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif">Health Impact</CardTitle>
                      <CardDescription>Benefits, concerns, and long-term risks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-forest">
                        <CheckCircle2 className="h-5 w-5" />
                        <h4 className="font-medium">Pros</h4>
                      </div>
                      <ul className="space-y-2">
                        {result.healthImpact.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-forest mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gold">
                        <AlertTriangle className="h-5 w-5" />
                        <h4 className="font-medium">Cons</h4>
                      </div>
                      <ul className="space-y-2">
                        {result.healthImpact.cons.map((con, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-gold mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-destructive">
                        <XCircle className="h-5 w-5" />
                        <h4 className="font-medium">Long-term Risks</h4>
                      </div>
                      <ul className="space-y-2">
                        {result.healthImpact.longTermRisks.map((risk, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Biosafety & Ethics */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-destructive flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif">Biosafety & Ethics Notes</CardTitle>
                      <CardDescription>Safety and ethical considerations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-destructive" />
                        Food Safety Concerns
                      </h4>
                      <ul className="space-y-2">
                        {result.biosafetyEthics.safetyIssues.map((issue, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {issue}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <FlaskConical className="h-4 w-4 text-gold" />
                        Additives Concerns
                      </h4>
                      <ul className="space-y-2">
                        {result.biosafetyEthics.additivesConcerns.map((concern, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {concern}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-secondary">
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Info className="h-4 w-4 text-primary" />
                        Ethical Issues
                      </h4>
                      <ul className="space-y-2">
                        {result.biosafetyEthics.ethicalIssues.map((issue, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Guidance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif">User Guidance</CardTitle>
                      <CardDescription>Consumption recommendations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <h4 className="font-medium text-foreground mb-3">Who Should Limit or Avoid</h4>
                      <ul className="space-y-2">
                        {result.userGuidance.whoShouldLimit.map((group, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                            {group}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-forest/10 border border-forest/20">
                      <h4 className="font-medium text-foreground mb-3">Safe Consumption Advice</h4>
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-forest mt-0.5 shrink-0" />
                        {result.userGuidance.safeConsumption}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Empty State for Results */}
      {!result && !isAnalyzing && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                No Analysis Yet
              </h3>
              <p className="text-muted-foreground">
                Upload a food label image above and click "Analyze Label" to see detailed nutritional 
                and safety information.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <Alert className="max-w-3xl mx-auto bg-secondary/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This analysis is for educational purposes only and does not 
              replace professional medical or nutritional advice. Always consult a healthcare professional 
              for dietary decisions, especially if you have specific health conditions or allergies.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
}
