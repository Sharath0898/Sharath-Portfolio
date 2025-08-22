import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">🧠</span> About Me
        </h2>
        
        <Card className="bg-secondary/50 border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <CardContent className="p-6 md:p-10">
            <p className="text-lg leading-relaxed max-w-3xl">
             I am a dedicated DevOps and Cloud Engineer with 2.9 years of professional experience in designing, deploying, and supporting cloud-based solutions in enterprise environments. My expertise spans across AWS production support, CI/CD automation, containerization, and infrastructure as code. I thrive on ensuring system reliability, optimizing deployment pipelines, and solving complex problems in high-demand production setups. Currently, I am enhancing my skills through academic learning and hands-on projects, while actively contributing to enterprise-scale implementations that deliver real business impact.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Contact</h3>
                <p className="font-semibold">sharathlohidakshan@outlook.com</p>
                <p className="text-sm text-muted-foreground">+1-437-733-6932</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-primary">On the web</h3>
                <div className="flex flex-col gap-1">
                  <a href="https://linkedin.com/in/sharath-l" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
                  <a href="https://github.com/Sharath0898" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">GitHub</a>
                  <a href="https://medium.com/@sharath.lnair08" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Medium</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
