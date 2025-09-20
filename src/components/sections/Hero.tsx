"use client";

import Link from "next/link";
import { personalInfo } from "@/data/site";
import { useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* High-quality video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-40 dark:opacity-50' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onError={() => {
            // Fallback to gradient background if video fails
            setIsLoaded(true);
          }}
        >
          {/* Use Cloudinary video as primary source */}
          <source src="https://res.cloudinary.com/demo/video/upload/v1652366604/docs/forest_hike.mp4" type="video/mp4" />
        </video>
        
        {/* Animated gradient background fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,200,255,0.2),transparent_50%)]" />
        </div>
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40 dark:from-black/60 dark:via-black/30 dark:to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Premium content with enhanced typography */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-32 text-center">
        <div className="space-y-8">
          {/* Greeting with animation */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-white/90 font-light tracking-wide animate-fade-in">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light tracking-wide animate-slide-up-delay">
              Full Stack Developer • AI Enthusiast • Cybersecurity Learner
            </p>
          </div>

          {/* Enhanced summary */}
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-white/85 leading-relaxed font-light animate-fade-in-delay">
            {personalInfo.summary}
          </p>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-2">
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <a 
              href={personalInfo.resumeUrl} 
              className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 backdrop-blur-sm" 
              download
            >
              <span className="relative z-10">Download Resume</span>
            </a>
            
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
