import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">DC</span>
              </div>
              <span className="font-serif font-semibold text-lg">Dark Chocolate Science</span>
            </div>
            <p className="text-muted-foreground text-sm">
              An educational resource exploring the biosafety, food safety, and ethical dimensions of dark chocolate production.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/library" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Chocolate Library
              </Link>
              <Link to="/process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Farm to Bar
              </Link>
              <Link to="/biosafety" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Biosafety
              </Link>
              <Link to="/ethics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Ethics
              </Link>
              <Link to="/health" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Health
              </Link>
              <Link to="/certifications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Certifications
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Project Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Project:</strong> Experiential Learning (EL)</p>
              <p><strong>Subject:</strong> Biosafety, Food Safety & Ethics</p>
              <p><strong>Type:</strong> Educational Resource</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Biosafety & Ethics of Dark Chocolate. Student EL Project.
            </p>
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclaimer:</strong> This is an educational resource created for academic purposes. Not for commercial use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
