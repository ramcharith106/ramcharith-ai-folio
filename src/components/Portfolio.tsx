import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Heart, Users, GraduationCap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Jeevan Rakshak",
      subtitle: "Blood Donation Web App",
      description: "This is a comprehensive, full-stack web application designed to connect blood donors with those in need. It features user registration/login (including Google Auth), a donor dashboard to manage availability, a system for creating and viewing blood requests, and a searchable database of donors.",
      techStack: ["React", "TypeScript", "Firebase"],
      icon: Heart,
      gradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
    },
    {
      title: "FreelanceHub",
      subtitle: "Marketplace for Freelancers",
      description: "This is a comprehensive, full-stack web application designed to connect freelancers and hirers. It features user registration/login (including Google Auth), a freelancer dashboard to look at available works, a system for creating and viewing jobs as a hirer, and a searchable database of jobs.",
      techStack: ["React", "TypeScript", "Firebase"],
      icon: Users,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Univera",
      subtitle: "Student Accommodation & College Finder",
      description: "This is a comprehensive, full-stack web application designed to help students find the best colleges and PGs. It features user registration/login (including Google Auth), a searchable database of colleges and PGs. It has a dual login feature for admins to add and edit the colleges and PGs.",
      techStack: ["React", "TypeScript", "Firebase"],
      icon: GraduationCap,
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-foreground mb-4">Selected Work</h2>
          <p className="text-title text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className={`group bg-gradient-to-br ${project.gradient} border ${project.borderColor} hover:shadow-glow transition-smooth hover:scale-105 cursor-pointer`}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 hover:opacity-100">
                          <ExternalLink size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 hover:opacity-100">
                          <Github size={16} />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          const demoLinks = {
                            'Jeevan Rakshak': 'https://jeevan-rakshak-zeta.vercel.app/',
                            'FreelanceHub': 'https://frelancehub.vercel.app/',
                            'Univera': 'https://univera-student-app.vercel.app/'
                          };
                          window.open(demoLinks[project.title as keyof typeof demoLinks], '_blank');
                        }}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github size={14} />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Want to see more projects?</p>
          <Button 
            variant="matrix" 
            size="lg"
            onClick={() => window.open('https://github.com/ramcharith106', '_blank')}
          >
            <Github size={18} />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;