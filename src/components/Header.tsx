import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import sinyarLogo from "@/assets/sinyar-logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={sinyarLogo} alt="Sinyar High Standard Hospitality" className="h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="text-sm font-medium text-[#172938] hover:text-[#172938]/70 transition-colors uppercase tracking-wide"
          >
            HOME
          </a>
          <a 
            href="#whats-on" 
            className="text-sm font-medium text-[#172938] hover:text-[#172938]/70 transition-colors uppercase tracking-wide"
          >
            WHAT'S ON
          </a>
          <a 
            href="#brand" 
            className="text-sm font-medium text-[#172938] hover:text-[#172938]/70 transition-colors uppercase tracking-wide"
          >
            BRAND IDENTITY & CORPORATE STANDARDS
          </a>
          <a 
            href="#quick-links" 
            className="text-sm font-medium text-[#172938] hover:text-[#172938]/70 transition-colors uppercase tracking-wide"
          >
            QUICK LINKS
          </a>
        </nav>

        {/* Search Icon */}
        <button className="flex items-center justify-center h-8 w-8 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="h-4 w-4 text-[#172938]" />
        </button>
      </div>
    </header>
  );
};
