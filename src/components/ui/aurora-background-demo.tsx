"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-1 items-center justify-center w-full max-w-none"
      >
        <h1 className="font-adastra font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider text-center">
          AD ASTRA
        </h1>
        <p className="p-0 m-0 font-adastra text-lg md:text-2xl text-gray-200 mb-1 font-light text-center">
        Astronomy & Astrophysics Club
        </p>
        <p className="p-0 m-0 font-adastra text-lg md:text-2xl text-gray-200 mb-2 font-light text-center">
        BITS Hyderabad
        </p>
        <p className="text-lg md:text-xl text-gray-300/80 mb-8 max-w-2xl m-6 mx-auto text-center">
            #UparDekhteRaho
        </p>
      </motion.div>
    </AuroraBackground>
  );
} 