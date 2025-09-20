import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/ramcharith-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-lg">Hello, I'm</p>
              <h1 className="text-hero font-bold text-foreground leading-tight">
                Ramcharith Reddy
              </h1>
              <h2 className="text-display font-semibold text-primary">
                AI-Powered Full-Stack Developer
              </h2>
            </div>
            
            <p className="text-title text-muted-foreground max-w-lg leading-relaxed">
              Building intelligent SaaS applications from concept to deployment. 
              Currently seeking challenging internship opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="matrix" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <Button variant="ghost" size="icon" className="hover:scale-110">
                <Github size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110">
                <Linkedin size={24} />
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Download size={18} />
                Resume
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-subtle rounded-2xl p-8 shadow-card">
                <img
                  src={profileImage}
                  alt="Ramcharith Reddy - Professional Profile"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-mono text-sm shadow-elegant">
                  Available for Internship
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;