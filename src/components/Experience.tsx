
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">💼</span> Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"></div>
          
          <div className="space-y-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right space-y-4 md:order-1 md:pr-8">
                <h3 className="text-xl font-semibold text-primary">Senior Systems Engineer</h3>
                <p className="text-muted-foreground">Jan 2023 – Nov 2023</p>
              </div>
              <div className="md:order-2 md:pl-8">
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-ml-1"></div>
                <Card className="bento-card hover-scale">
                  <h4 className="text-lg font-semibold mb-3">Infosys, India</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                     <li>Designed and supported CI/CD pipelines using GitHub Actions and Azure DevOps</li>
                     <li>Managed deployments and production support on AWS cloud environments</li>
                     <li>Implemented monitoring and alerting with Dynatrace, Datadog, and ITRS</li>
                     <li>Optimized SQL queries and automated system tasks using Unix/Linux scripting</li>
                     <li>Collaborated with cross-functional teams to resolve incidents and improve system reliability</li>
                  </ul>
                  </Card>
                </div>
              </div>
              {/* New Experience Section: Systems Engineer */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right space-y-4 md:order-1 md:pr-8">
                  <h3 className="text-xl font-semibold text-primary">Systems Engineer</h3>
                  <p className="text-muted-foreground">March 2021 - Dec 2022</p>
                </div>
                <div className="md:order-2 md:pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-ml-1"></div>
                  <Card className="bento-card hover-scale">
                    <h4 className="text-lg font-semibold mb-3">Infosys, India</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Developed and deployed APIs using Mule runtime (4.3.0 & 4.4.0) and DataWeave, achieving a 20% increase in data transformation efficiency (JSON, XML, CSV).</li>
                      <li>Prepared MUnit test cases, handled handovers post-signoff for production deployment, and utilized tools such as AnyPoint Studio, Postman, Oracle SQL Developer, Solace, and Splunk to streamline the monitoring and management of deployments.</li>
                      <li>Developed several multi-layered architectures (EAPI, SAPI, PAPI), including designing and developing APIs.</li>
                    </ul>
                  </Card>
                </div>
              </div>
              
              </div>
            </div>
          </div>
          </section>
      )
}


export default Experience;
