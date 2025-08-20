import React, { useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

const projects = [
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description: "Developed a robust CI/CD pipeline integrating GitHub Actions with SonarQube, Trivy, Docker, and Kubernetes for automated builds, security scans, and deployments on cloud environments.",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "SonarQube", "Trivy", "Azure"],
    githubUrl: "",
  },
  {
    title: "Jenkins Deployment Automation",
    description: "Implemented a Jenkins pipeline for automated code builds, security scanning, Docker image deployment, and version management on Azure Ubuntu VMs.",
    tags: ["Jenkins", "Docker", "Trivy", "SonarQube", "Azure"],
    githubUrl: "",
  },
  {
    title: "MuleSoft API Design & Deployment",
    description: "Designed, developed, and deployed MuleSoft APIs for seamless integration, using Anypoint Studio and API Manager to ensure scalable and secure API-led connectivity.",
    tags: ["MuleSoft", "API Management", "Integration", "CloudHub"],
    githubUrl: "",
  },
  {
    title: "Monitoring & Observability with Splunk and Prometheus",
    description: "Implemented observability by integrating Splunk for log management and Prometheus + Grafana for real-time performance monitoring and visualization of microservices.",
    tags: ["Splunk", "Prometheus", "Grafana", "Monitoring", "DevOps"],
    githubUrl: "",
  },
  {
    title: "Event Streaming with Solace",
    description: "Deployed Solace event streaming for reliable, high-performance messaging across distributed systems, enabling real-time communication between services.",
    tags: ["Solace", "Event Streaming", "Messaging", "Integration"],
    githubUrl: "",
  },
  {
    title: "API Testing & Validation",
    description: "Conducted automated API testing and validation using Postman, ensuring reliability, performance, and security across integration layers.",
    tags: ["Postman", "API Testing", "Automation", "Validation"],
    githubUrl: "",
  },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-primary">🛠️</span> Projects
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black shadow-md p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="min-w-[300px] max-w-sm flex-shrink-0 hover-scale overflow-hidden group"
              >
                <CardContent className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>

                <CardFooter className="px-6 py-4 flex flex-wrap gap-2 border-t border-border">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black shadow-md p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
