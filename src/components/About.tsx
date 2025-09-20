import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Palette, Server, Database } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "AI/ML", icon: Brain },
    { name: "UI/UX Design", icon: Palette },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">About Me</h2>
          <p className="text-title text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Diploma in Engineering (Undergraduate)</h4>
                  <p className="text-primary">Dhanekula Institute of Engineering and Technology, Vijayawada</p>
                  <p className="text-muted-foreground">2023 - 2026 (Final Year)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth">
                        <div className="p-1 bg-primary/20 rounded">
                          <IconComponent className="text-primary" size={16} />
                        </div>
                        <span className="text-foreground font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">My Story</h3>
                <div className="prose prose-invert text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    A proactive and ambitious Computer Engineering student specializing in full-stack 
                    development with a deep passion for Artificial Intelligence. I thrive on turning 
                    complex problems into elegant, functional applications by leveraging cutting-edge 
                    AI tools and frameworks.
                  </p>
                  <p>
                    I am currently seeking a challenging internship opportunity to apply my hands-on 
                    skills to real-world projects and contribute to an innovative team.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary/10 border-primary/20 shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ready for Internship</h3>
                <p className="text-muted-foreground mb-6">
                  Looking for opportunities to contribute to innovative projects and grow with a dynamic team.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Available Immediately</Badge>
                  <Badge variant="secondary">Remote/On-site</Badge>
                  <Badge variant="secondary">Full-time Commitment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;