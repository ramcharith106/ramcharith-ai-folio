import { Card, CardContent } from "@/components/ui/card";
import { Code, Bot, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development for SaaS",
      description: "Building end-to-end, scalable, and secure Software as a Service applications using modern technologies like React, Node.js, and cloud platforms.",
      icon: Code,
      features: ["React & TypeScript", "Node.js Backend", "Database Design", "API Development", "Cloud Deployment"],
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "AI-Powered Chatbot Integration",
      description: "Developing and integrating intelligent chatbots to enhance user engagement and automate tasks using cutting-edge AI frameworks and natural language processing.",
      icon: Bot,
      features: ["Natural Language Processing", "Custom AI Models", "Integration APIs", "User Intent Recognition", "Automated Responses"],
      gradient: "from-accent/10 to-accent/5",
    },
    {
      title: "UI/UX Design for Web Applications",
      description: "Crafting intuitive, user-friendly, and visually appealing interfaces for a seamless user experience across all devices and platforms.",
      icon: Palette,
      features: ["Responsive Design", "User Research", "Prototyping", "Design Systems", "Accessibility"],
      gradient: "from-secondary/20 to-secondary/10",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">What I Offer</h2>
          <p className="text-title text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`group bg-gradient-to-br ${service.gradient} border-border hover:shadow-glow transition-smooth hover:scale-105 h-full`}>
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="text-primary" size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:text-primary"
                      onClick={() => scrollToSection('contact')}
                    >
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm passionate about creating innovative solutions that solve real problems. 
              Let's discuss how I can help bring your vision to life with cutting-edge technology.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Work Together
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;