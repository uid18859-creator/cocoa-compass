import { useState } from "react";
import { Search, Filter, X, Percent, MapPin, Award, AlertTriangle, Clock, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chocolates, getCertificationColor, type Chocolate } from "@/data/chocolates";

function ChocolateCard({ chocolate }: { chocolate: Chocolate }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 h-full">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {chocolate.brand}
                </p>
                <CardTitle className="font-serif text-lg mt-1 line-clamp-2">
                  {chocolate.name}
                </CardTitle>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-chocolate-dark flex items-center justify-center">
                <span className="text-cream font-bold text-lg">{chocolate.cocoaPercentage}%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{chocolate.origin}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Package className="h-4 w-4" />
              <span>{chocolate.price}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {chocolate.certifications.slice(0, 2).map((cert) => (
                <Badge key={cert} variant="secondary" className={`text-xs ${getCertificationColor(cert)}`}>
                  {cert}
                </Badge>
              ))}
              {chocolate.certifications.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{chocolate.certifications.length - 2}
                </Badge>
              )}
            </div>
            <div className="pt-2">
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">Ethical Score:</span>
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
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            {chocolate.brand}
          </p>
          <DialogTitle className="font-serif text-2xl">{chocolate.name}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="ethics">Ethics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Cocoa Content</span>
                </div>
                <p className="text-2xl font-serif font-bold">{chocolate.cocoaPercentage}%</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Origin</span>
                </div>
                <p className="text-sm">{chocolate.origin}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Ingredients</h4>
              <p className="text-sm text-muted-foreground">
                {chocolate.ingredients.join(", ")}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Health Benefits</h4>
              <ul className="space-y-1">
                {chocolate.healthBenefits.map((benefit) => (
                  <li key={benefit} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-forest">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {chocolate.certifications.map((cert) => (
                  <Badge key={cert} className={getCertificationColor(cert)}>
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-4">
            <div className="p-4 rounded-lg bg-secondary mb-4">
              <h4 className="font-medium mb-3">Nutritional Values (per 100g)</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Calories</span>
                  <span className="font-medium">{chocolate.nutritionalValues.calories} kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Fat</span>
                  <span className="font-medium">{chocolate.nutritionalValues.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturated Fat</span>
                  <span className="font-medium">{chocolate.nutritionalValues.saturatedFat}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Carbohydrates</span>
                  <span className="font-medium">{chocolate.nutritionalValues.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sugar</span>
                  <span className="font-medium">{chocolate.nutritionalValues.sugar}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protein</span>
                  <span className="font-medium">{chocolate.nutritionalValues.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fiber</span>
                  <span className="font-medium">{chocolate.nutritionalValues.fiber}g</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="safety" className="space-y-4 mt-4">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <h4 className="font-medium text-destructive">Allergens</h4>
              </div>
              <ul className="space-y-1">
                {chocolate.allergens.map((allergen) => (
                  <li key={allergen} className="text-sm text-muted-foreground">
                    • {allergen}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Shelf Life</span>
                </div>
                <p className="text-sm">{chocolate.shelfLife}</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Packaging</span>
                </div>
                <p className="text-sm">{chocolate.packagingType}</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary">
              <h4 className="font-medium mb-2">Storage Conditions</h4>
              <p className="text-sm text-muted-foreground">{chocolate.storageConditions}</p>
            </div>
          </TabsContent>

          <TabsContent value="ethics" className="mt-4">
            <div className="p-4 rounded-lg bg-secondary mb-4">
              <h4 className="font-medium mb-3">Ethical Score</h4>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`w-6 h-6 rounded-full ${
                      star <= chocolate.ethicalScore ? "bg-forest" : "bg-border"
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-bold">{chocolate.ethicalScore}/5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {chocolate.ethicalScore >= 5
                  ? "Excellent - Fully transparent supply chain with strong ethical practices"
                  : chocolate.ethicalScore >= 4
                  ? "Good - Strong commitment to ethical sourcing"
                  : chocolate.ethicalScore >= 3
                  ? "Average - Some ethical certifications in place"
                  : "Needs improvement - Limited ethical sourcing information"}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Ethical Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {chocolate.certifications
                  .filter((cert) => 
                    cert.toLowerCase().includes("fair") ||
                    cert.toLowerCase().includes("organic") ||
                    cert.toLowerCase().includes("rainforest") ||
                    cert.toLowerCase().includes("b corp")
                  )
                  .map((cert) => (
                    <Badge key={cert} className={getCertificationColor(cert)}>
                      <Award className="h-3 w-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                {chocolate.certifications.filter((cert) => 
                  cert.toLowerCase().includes("fair") ||
                  cert.toLowerCase().includes("organic") ||
                  cert.toLowerCase().includes("rainforest") ||
                  cert.toLowerCase().includes("b corp")
                ).length === 0 && (
                  <p className="text-sm text-muted-foreground">No specific ethical certifications listed</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default function ChocolateLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [minCocoa, setMinCocoa] = useState(0);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);

  const allCertifications = [...new Set(chocolates.flatMap((c) => c.certifications))].sort();

  const filteredChocolates = chocolates.filter((chocolate) => {
    const matchesSearch =
      chocolate.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chocolate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chocolate.origin.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCocoa = chocolate.cocoaPercentage >= minCocoa;

    const matchesCerts =
      selectedCerts.length === 0 ||
      selectedCerts.some((cert) => chocolate.certifications.includes(cert));

    return matchesSearch && matchesCocoa && matchesCerts;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setMinCocoa(0);
    setSelectedCerts([]);
  };

  const hasActiveFilters = searchTerm || minCocoa > 0 || selectedCerts.length > 0;

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dark Chocolate Library
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of {chocolates.length} dark chocolates with detailed 
            nutritional information, safety data, and ethical ratings.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by brand, name, or origin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setFilterOpen(!filterOpen)}
              className={filterOpen ? "bg-secondary" : ""}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
            )}
          </div>

          {filterOpen && (
            <Card className="p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Minimum Cocoa: {minCocoa}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="95"
                    step="5"
                    value={minCocoa}
                    onChange={(e) => setMinCocoa(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Certifications</label>
                  <div className="flex flex-wrap gap-2">
                    {allCertifications.slice(0, 8).map((cert) => (
                      <Badge
                        key={cert}
                        variant={selectedCerts.includes(cert) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() =>
                          setSelectedCerts((prev) =>
                            prev.includes(cert)
                              ? prev.filter((c) => c !== cert)
                              : [...prev, cert]
                          )
                        }
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredChocolates.length} of {chocolates.length} chocolates
        </p>

        {/* Chocolate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredChocolates.map((chocolate) => (
            <ChocolateCard key={chocolate.id} chocolate={chocolate} />
          ))}
        </div>

        {filteredChocolates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No chocolates match your filters.</p>
            <Button variant="link" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
