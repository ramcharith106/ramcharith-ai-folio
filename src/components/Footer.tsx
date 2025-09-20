import { Github, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-xl font-bold text-primary">
              &lt;Ramcharith /&gt;
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-Powered Full-Stack Developer specializing in building intelligent SaaS applications. 
              Currently seeking internship opportunities.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:scale-110">
                <Github size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>ramcharith@example.com</p>
              <p>+91 XXXXX XXXXX</p>
              <p>Vijayawada, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="text-primary" size={14} />
            <span>by Ramcharith Reddy</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;