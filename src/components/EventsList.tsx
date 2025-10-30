import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Leadership Training Workshop",
    date: "2025-01-20",
    time: "09:00 AM",
    location: "Conference Room A"
  },
  {
    id: 2,
    title: "Monthly All-Hands Meeting",
    date: "2025-01-25",
    time: "02:00 PM",
    location: "Main Auditorium"
  },
  {
    id: 3,
    title: "Customer Service Excellence Seminar",
    date: "2025-01-28",
    time: "10:30 AM",
    location: "Training Center"
  }
];

export const EventsList = () => {
  return (
    <div className="space-y-3">
      {events.map((event) => (
        <div
          key={event.id}
          className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })} at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              Add to Calendar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
