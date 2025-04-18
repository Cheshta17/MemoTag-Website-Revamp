"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base font-medium px-4 py-1.5 rounded-full border inline-block w-fit"
            >
              AI-Powered Dementia Care
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Transforming <span className="gradient-text">Dementia Care</span> Through AI Innovation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              MemoTag combines advanced AI technology with compassionate care to provide personalized support for individuals with dementia and their caregivers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="#contact">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#solution">
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-lg mx-auto lg:ml-auto"
          >
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-card/50 backdrop-blur-sm flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  {/* This would be replaced with an actual image or animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/60"
                    >
                      <path d="M22 12.5a10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10c.5 0 1 0 1.5.1"></path>
                      <path d="M11 4c.5 0 1 0 1.5.1"></path>
                      <path d="M19 7.9c.3.5.6 1 .8 1.6"></path>
                      <path d="M22 12.5c0 .5 0 1-.1 1.5"></path>
                      <path d="M13.5 22c-.5.1-1 .1-1.5.1"></path>
                      <path d="M7.9 19c-.5-.3-1-.6-1.6-.8"></path>
                      <path d="M4.1 13.5c-.1-.5-.1-1-.1-1.5"></path>
                      <path d="M7.9 5c.5.3 1 .6 1.6.8"></path>
                      <path d="M12 8a4 4 0 0 1 0 8"></path>
                      <path d="M12 8v4l3 3"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/10 rounded-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
