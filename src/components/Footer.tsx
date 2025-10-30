import { Shield, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Shield className="h-4 w-4" />
              Privacy Policy
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact IT Support
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Sinyar High Standard Hospitality. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
