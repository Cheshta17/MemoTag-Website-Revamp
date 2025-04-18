"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TractionSection() {
  const metrics = [
    {
      value: "7,000+",
      label: "Pre-orders",
      description: "From healthcare providers and families"
    },
    {
      value: "5",
      label: "Clinical partnerships",
      description: "With leading memory care facilities"
    },
    {
      value: "96%",
      label: "Satisfaction rate",
      description: "Among beta testers and early adopters"
    },
    {
      value: "$3.8M",
      label: "Seed funding",
      description: "From healthcare and tech investors"
    }
  ];

  const testimonials = [
    {
      quote: "MemoTag has transformed how we provide care for our memory patients. The early detection capabilities have allowed us to intervene sooner and improve outcomes.",
      author: "Dr. Sarah Johnson",
      role: "Neurologist, Memory Care Specialist"
    },
    {
      quote: "As a caregiver for my mother with Alzheimer's, MemoTag has given me peace of mind and valuable insights into her condition that I wouldn't have noticed otherwise.",
      author: "Michael Chen",
      role: "Family Caregiver"
    },
    {
      quote: "The platform's ability to personalize care plans and adapt to changing needs makes it a standout solution in the dementia care space.",
      author: "Emma Rodriguez",
      role: "Director of Nursing, Silver Horizons Care"
    }
  ];

  const partners = [
    "Memorial Healthcare Network",
    "Alzheimer's Research Foundation",
    "Global Dementia Initiative",
    "TechCare Innovations"
  ];

  return (
    <section id="traction" className="relative py-20 md:py-32 overflow-hidden">
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
            Our <span className="gradient-text">Traction</span> & Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            MemoTag is already making a difference in dementia care, with growing adoption 
            among healthcare providers and families worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
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
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What People Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full border-none bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                        <path d="M11.3 2.3c-.5-.3-1.1-.3-1.6 0-.4.3-.7.7-.7 1.2v2c0 .5.3.9.7 1.2.5.3 1.1.3 1.6 0 .4-.3.7-.7.7-1.2v-2c0-.5-.3-.9-.7-1.2zM14.8 2.3c-.5-.3-1.1-.3-1.6 0-.4.3-.7.7-.7 1.2v2c0 .5.3.9.7 1.2.5.3 1.1.3 1.6 0 .4-.3.7-.7.7-1.2v-2c0-.5-.3-.9-.7-1.2z"/>
                        <path d="M20 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <p className="mb-6 italic text-foreground/90">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Our Partners & Collaborators
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="h-16 px-6 rounded-lg bg-card/30 backdrop-blur-sm flex items-center justify-center w-full">
                  <p className="font-medium text-foreground/80">{partner}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 rounded-xl bg-card/30 backdrop-blur-sm max-w-3xl mx-auto"
          >
            <h4 className="text-xl font-bold mb-4">
              Join the MemoTag Revolution
            </h4>
            <p className="text-muted-foreground mb-6">
              We're expanding our partnerships with healthcare providers, research institutions, 
              and technology companies to further enhance our platform and reach more people in need.
            </p>
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-medium">
              Become a Partner
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
