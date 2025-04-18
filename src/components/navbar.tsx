"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">MemoTag</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#problem" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Problem
            </Link>
            <Link 
              href="#solution" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Solution
            </Link>
            <Link 
              href="#traction" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Traction
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="rounded-full">
                Contact Us
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
