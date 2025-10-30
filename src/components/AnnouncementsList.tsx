import { Bell, AlertCircle, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Announcement {
  id: number;
  title: string;
  type: "important" | "social" | "general";
  date: string;
  excerpt: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Safety Protocols for Maritime Operations",
    type: "important",
    date: "2025-01-15",
    excerpt: "Updated safety guidelines for all crew members operating in high-traffic maritime zones."
  },
  {
    id: 2,
    title: "Team Building Event - Cultural Heritage Day",
    type: "social",
    date: "2025-01-18",
    excerpt: "Join us for a celebration of our maritime heritage with traditional activities and refreshments."
  },
  {
    id: 3,
    title: "Q4 Performance Recognition Awards",
    type: "general",
    date: "2025-01-12",
    excerpt: "Congratulations to all team members who demonstrated exceptional service standards last quarter."
  },
  {
    id: 4,
    title: "Fleet Maintenance Schedule Update",
    type: "important",
    date: "2025-01-10",
    excerpt: "Revised maintenance windows for all vessels. Please review the updated schedule in your department portal."
  },
  {
    id: 5,
    title: "Welcome New Hospitality Team Members",
    type: "social",
    date: "2025-01-08",
    excerpt: "Please join us in welcoming five new team members to our hospitality division."
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "important":
      return <AlertCircle className="h-4 w-4" />;
    case "social":
      return <Heart className="h-4 w-4" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case "important":
      return <Badge variant="destructive">Important</Badge>;
    case "social":
      return <Badge className="bg-accent text-accent-foreground">Social</Badge>;
    default:
      return <Badge variant="secondary">General</Badge>;
  }
};

export const AnnouncementsList = () => {
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="mt-1">{getTypeIcon(announcement.type)}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {announcement.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {announcement.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <time className="text-xs text-muted-foreground">
                    {new Date(announcement.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </div>
            <div>{getTypeBadge(announcement.type)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
