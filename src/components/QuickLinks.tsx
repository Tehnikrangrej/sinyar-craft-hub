import { Headphones, MessageSquare, Briefcase, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    title: "IT Support",
    icon: Headphones,
    description: "Technical assistance",
    href: "#"
  },
  {
    title: "Feedback Form",
    icon: MessageSquare,
    description: "Share your thoughts",
    href: "#"
  },
  {
    title: "Job Requests",
    icon: Briefcase,
    description: "Internal opportunities",
    href: "#"
  },
  {
    title: "Apps Portal",
    icon: Grid,
    description: "Access all tools",
    href: "#"
  }
];

export const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {links.map((link) => (
        <Button
          key={link.title}
          variant="outline"
          className="h-auto flex-col items-start p-4 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"
          asChild
        >
          <a href={link.href}>
            <div className="flex items-center gap-3 w-full">
              <div className="p-2 rounded-lg bg-primary/10">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{link.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {link.description}
                </div>
              </div>
            </div>
          </a>
        </Button>
      ))}
    </div>
  );
};
