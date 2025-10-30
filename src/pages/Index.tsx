import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DashboardCard } from "@/components/DashboardCard";
import { AnnouncementsList } from "@/components/AnnouncementsList";
import { EventsList } from "@/components/EventsList";
import { QuickLinks } from "@/components/QuickLinks";
import { Bell, Calendar, Palette, FileText, Image, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";

const Index = () => {
  const momentImages = [moment1, moment2, moment3, moment4, moment5, moment6];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[75vh] overflow-hidden mt-16">
        <img
          src={heroBanner}
          alt="Sinyar Hub"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70 flex items-center">
          <div className="container px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Welcome to Sinyar Hub
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Your gateway to excellence in hospitality. Stay connected, informed, and inspired.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - What's On */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardCard
              title="What's On"
              description="Latest announcements and updates"
              icon={Bell}
            >
              <AnnouncementsList />
            </DashboardCard>

            <DashboardCard
              title="Moments & Highlights"
              description="Celebrating our team and achievements"
              icon={Image}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {momentImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border border-border/30 hover:scale-105 transition-transform duration-200 cursor-pointer"
                  >
                    <img 
                      src={img} 
                      alt={`Moment ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Right Column - Events & Quick Links */}
          <div className="space-y-6">
            <DashboardCard
              title="Upcoming Events"
              description="Mark your calendar"
              icon={Calendar}
            >
              <EventsList />
            </DashboardCard>

            <DashboardCard
              title="Quick Links"
              description="Access key resources"
              icon={Zap}
            >
              <QuickLinks />
            </DashboardCard>

            <DashboardCard
              title="Brand Resources"
              icon={Palette}
            >
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="#">
                    <Palette className="mr-2 h-4 w-4" />
                    Our Brand Identity
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Corporate Standards
                  </a>
                </Button>
              </div>
            </DashboardCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
