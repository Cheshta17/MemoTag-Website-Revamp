"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  const stats = [
    {
      value: "55M+",
      label: "People worldwide living with dementia",
      description: "Expected to rise to 139 million by 2050"
    },
    {
      value: "70%",
      label: "Of cases go undiagnosed in early stages",
      description: "Leading to delayed interventions and care"
    },
    {
      value: "$1.3T",
      label: "Annual global cost of dementia care",
      description: "Placing enormous burden on healthcare systems"
    },
    {
      value: "80%",
      label: "Of caregivers report high stress levels",
      description: "Affecting their own health and wellbeing"
    }
  ];

  return (
    <section id="problem" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background -z-10" />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Growing Challenge of Dementia Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Dementia affects millions worldwide, creating significant challenges for patients, 
            caregivers, and healthcare systems. Current approaches often lack personalization, 
            continuous monitoring, and timely interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Current Gaps in Dementia Care
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m15 9-6 6"/>
                      <path d="m9 9 6 6"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Reactive vs. Proactive Care</span>
                    <p className="text-muted-foreground mt-1">
                      Current approaches often respond to issues after they occur rather than preventing them.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m15 9-6 6"/>
                      <path d="m9 9 6 6"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Limited Continuous Monitoring</span>
                    <p className="text-muted-foreground mt-1">
                      Intermittent assessments miss critical changes in cognitive and physical health.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m15 9-6 6"/>
                      <path d="m9 9 6 6"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Caregiver Burnout</span>
                    <p className="text-muted-foreground mt-1">
                      Lack of support systems leads to high stress and burnout among family caregivers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* This would be replaced with an actual graph/chart image */}
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-card/10 backdrop-blur-[2px]" />
              <div className="relative z-10 text-center p-6">
                <p className="text-sm font-medium text-foreground/80">Dementia Diagnosis Gap</p>
                <p className="text-xs text-muted-foreground mt-1">Source: World Health Organization, 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
