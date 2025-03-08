"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   // Local image paths array
   const images = [
      "/images/AVten.jpg",
      "/images/AVnine.jpg",
      "/images/AVeight.jpg",
      "/images/AVtwo.jpeg",
      "/images/AVseven.jpeg",
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <div className="relative h-[600px] w-full overflow-hidden mt-20">
         {/* Image Slides with Next.js Image Optimization */}
         {images.map((img, index) => (
            <div
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
               }`}
            >
               <div className="relative w-full h-full">
                  <Image
                     src={img}
                     alt={`Workspace ${index + 1}`}
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover"
                     priority={index === 0} // Prioritize first image load
                     quality={80}
                  />
               </div>
            </div>
         ))}

         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

         {/* Content - Updated to match image layout */}
         <div className="relative z-10 flex flex-col justify-center h-full text-white px-8 max-w-6xl mx-auto">
            <div className="max-w-2xl">
               <h2 className="text-4xl font-light mb-4 animate-fade-in-up">
                  From a single desk to a whole building.
                  <br />
                  The choice is yours.
               </h2>
               <h1 className="text-6xl font-bold mb-8 animate-fade-in-up delay-100">
                  Office space
                  <br />
                  <span className="text-gradient shadow-2xl">your way</span>
               </h1>

               {/* Services Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up delay-200">
                  {[
                     "Office Space",
                     "Coworking",
                     "Virtual Offices",
                     "Meeting rooms",
                  ].map((service, index) => (
                     <div
                        key={index}
                        className="p-4 bg-white/10 backdrop-blur-sm animate-fade-in-up delay-300 border border-white/20 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                     >
                        <h3 className="text-lg font-medium">{service}</h3>
                     </div>
                  ))}
               </div>

               {/* Search Form */}
               <div className="w-fit bg-white/10 backdrop-blur-sm py-6 px-12 rounded-xl animate-fade-in-up delay-300 border border-white/20">
                  <button className="w-[100%] text-[1.3rem] font-bold bg-[linear-gradient(135deg,#9B59B6,#3498DB)] text-white px-8 py-3 rounded-lg transition-all">
                     CONTACT US
                  </button>
               </div>
            </div>
         </div>

         {/* Dots Navigation */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                     index === activeIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
               />
            ))}
         </div>
      </div>
   );
};

export default Hero;
