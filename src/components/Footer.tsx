import { Link } from "react-router-dom";
import { Star, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Research", path: "/research" },
  ];

  const resources = [
    { name: "Astrophotography", path: "/astrophotography" },
    { name: "Our Team", path: "/team" },
    { name: "Observatory", path: "#" },
    { name: "Playground", path: "/playground" },
  ];

  return (
    <footer className="bg-card border-t border-border text-xs">
      <div className="max-w-7xl mx-auto px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              {/* <span className="font-adastra font-bold text-2xl text-foreground select-none">AD ASTRA</span> */}
              <img src="public\AA-FULL-WHITE.png" alt="logo" className="h-11 w-44 p-0 m-0" />
            </div>
            <p className="text-muted-foreground mb-2 max-w-md text-sm">
              Exploring the vast void and uncovering the cosmos. Join our community of astronomy 
              enthusiasts as we discover the wonders of the universe together.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/bphc.ad.astra/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/bphc.ad.astra/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/13754408/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:adastra@hyderabad.bits-pilani.ac.in" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">Resources</h3>
            <ul className="space-y-1">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Ad Astra - Astronomy & Astrophysics Club. All rights reserved.
          </p>
          <div className="flex space-x-2 mt-2 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;