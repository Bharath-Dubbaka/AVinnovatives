"use client";
// import { ParallaxScroll } from "../ui/parallax-scroll";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollisionDemo";

export function ParallaxScrollDemo() {
   return <ParallaxScroll images={images} />;
}

const images = [
   "/images/AVseven.jpeg",
   "/images/AVnine.jpg",
   "/images/AVsix.jpeg",
   "/images/AVfour.jpeg",
   "/images/AVten.jpg",
   "/images/AVeight.jpg",
   "/images/AVthree.jpeg",
   "/images/AVfive.jpeg",
   "/images/AVtwo.jpeg",
   "/images/AVone.jpeg",
   "/images/AVten.jpg",
   "/images/AVnine.jpg",
   "/images/AVeight.jpg",
   "/images/AVsix.jpeg",
   "/images/AVfour.jpeg",
   "/images/AVthree.jpeg",
   "/images/AVfive.jpeg",
];

export const ParallaxScroll = ({ images, className }) => {
   const gridRef = useRef(null);
   const { scrollYProgress } = useScroll({
      container: gridRef, // remove this if your container is not fixed height
      offset: ["start start", "end start"], // remove this if your container is not fixed height
   });

   const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
   const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

   const third = Math.ceil(images.length / 3);

   const firstPart = images.slice(0, third);
   const secondPart = images.slice(third, 2 * third);
   const thirdPart = images.slice(2 * third);

   return (
      <div
         className={cn(
            "h-[40rem] items-start overflow-y-auto w-full",
            className
         )}
         ref={gridRef}
      >
         {/* <div className="hidden sm:flex ">
            <BackgroundBoxesDemo />
            <BackgroundBeamsWithCollisionDemo  />
         </div> */}
         <div className="pt-20 pb-4 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-gradient ml-14">
               Explore The Enchanting Ambiance of AVinnovations Coworking Spaces:
            </h1>
         </div>
         <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-6xl mx-auto gap-10 pt-6 px-10 backdrop-blur-sm rounded-xl animate-fade-in-up delay-300 border border-gray/80"
            ref={gridRef}
         >
            <div className="grid gap-10">
               {firstPart.map((el, idx) => (
                  <motion.div
                     // Apply the translateY motion value here
                     style={{ y: translateFirst }}
                     key={"grid-1" + idx}
                  >
                     <Image
                        src={el}
                        className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="grid gap-10">
               {secondPart.map((el, idx) => (
                  <motion.div
                     style={{ y: translateSecond }}
                     key={"grid-2" + idx}
                  >
                     <Image
                        src={el}
                        className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                        height="400"
                        width="600"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
            <div className="grid gap-10">
               {thirdPart.map((el, idx) => (
                  <motion.div
                     style={{ y: translateThird }}
                     key={"grid-3" + idx}
                  >
                     <Image
                        src={el}
                        className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                        height="400"
                        width="400"
                        alt="thumbnail"
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
};
