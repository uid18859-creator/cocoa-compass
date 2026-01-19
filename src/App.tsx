import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import ChocolateLibrary from "./pages/ChocolateLibrary";
import FarmToBar from "./pages/FarmToBar";
import Biosafety from "./pages/Biosafety";
import Ethics from "./pages/Ethics";
import Health from "./pages/Health";
import Certifications from "./pages/Certifications";
import CaseStudies from "./pages/CaseStudies";
import Compare from "./pages/Compare";
import FoodLabelAnalyzer from "./pages/FoodLabelAnalyzer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<ChocolateLibrary />} />
            <Route path="/process" element={<FarmToBar />} />
            <Route path="/biosafety" element={<Biosafety />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/health" element={<Health />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/label-analyzer" element={<FoodLabelAnalyzer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
