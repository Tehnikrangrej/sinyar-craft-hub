import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sinyarLogo from "@/assets/sinyar-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={sinyarLogo} alt="Sinyar High Standard Hospitality" className="h-12" />
          <div className="hidden sm:block text-sm text-muted-foreground border-l pl-3 ml-1">
            Hub
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-6 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search announcements, events, resources..."
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>
        </div>

        {/* AI Copilot Button */}
        <Button variant="default" size="sm" className="gap-2">
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">AI Copilot</span>
        </Button>
      </div>
    </header>
  );
};
