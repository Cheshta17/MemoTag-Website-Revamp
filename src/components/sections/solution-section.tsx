"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionSection() {
  const features = [
    {
      title: "AI-Powered Monitoring",
      description: "Continuous assessment of cognitive function and physical activity through non-invasive sensors and AI analysis.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </svg>
      )
    },
    {
      title: "Personalized Care Plans",
      description: "Tailored interventions and recommendations based on individual patterns, preferences, and progression.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Early Detection System",
      description: "Identifies subtle changes in behavior and cognition that may indicate deterioration before traditional methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h10"/>
          <path d="M9 4v16"/>
          <path d="m3 9 3 3-3 3"/>
          <path d="M14 8V6c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"/>
        </svg>
      )
    },
    {
      title: "Caregiver Support Platform",
      description: "Resources, guidance, and real-time assistance for family members and professional caregivers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Assessment & Setup",
      description: "Initial evaluation and personalized system configuration based on individual needs."
    },
    {
      number: "02",
      title: "Continuous Monitoring",
      description: "Non-invasive tracking of cognitive patterns, physical activity, and daily routines."
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Advanced algorithms process data to identify patterns and potential concerns."
    },
    {
      number: "04",
      title: "Personalized Interventions",
      description: "Tailored recommendations and support for both patients and caregivers."
    }
  ];

  return (
    <section id="solution" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How MemoTag <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our innovative platform combines AI technology with compassionate care to create 
            a comprehensive solution for individuals with dementia and their caregivers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              The MemoTag Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10 transform -translate-x-1/2" />
                  )}
                  
                  <div className="text-3xl font-bold text-primary/70 mb-2">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Technology
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            MemoTag leverages cutting-edge AI and machine learning to provide personalized, 
            adaptive care that evolves with each individual's needs.
          </p>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* This would be replaced with an actual tech diagram or video */}
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10v10H7z" />
                <path d="M10.5 16.5v-9h3" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
              <p className="text-sm font-medium">MemoTag's AI-Powered Care Platform</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
