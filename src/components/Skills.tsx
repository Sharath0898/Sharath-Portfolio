
import React from 'react';

const Skills = () => {
  const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript"]
  },
  {
    title: "Integration & API",
    skills: ["MuleSoft API Design & Deployment", "Postman", "Solace", "API Management"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure DevOps", "Docker", "Kubernetes", "CI/CD Pipelines"]
  },
  {
    title: "Monitoring & Logging",
    skills: ["Splunk", "Prometheus", "Grafana"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "Oracle", "MSSQL"]
  },
  {
    title: "Operating Systems",
    skills: ["Linux (Ubuntu, RedHat)", "Windows Server"]
  },
  {
    title: "Soft Skills",
    skills: ["Collaboration", "Problem-Solving", "Adaptability", "Decision-Making"]
  }
];

const certifications = [
  {
    title: "MuleSoft Certified Developer",
    issuer: "MuleSoft",
    year: "2024"
  },
  {
    title: "Solace Solution Architect Certified",
    issuer: "Solace",
    year: "2024"
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2023"
  },
  {
    title: "AWS Certified Training – Data Engineer",
    issuer: "AWS",
    year: "2024"
  }
];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">⚙️</span> Skills & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bento-card">
                  <h4 className="text-lg font-medium mb-3 text-primary">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bento-card">
                  <h4 className="text-lg font-medium text-primary">{cert.title}</h4>
                  <div className="flex justify-between mt-2">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="text-sm font-semibold px-3 py-0.5 bg-secondary rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
