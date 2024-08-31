"use client";
import Image from "next/image";
import React from "react";

import { FaPlay } from "react-icons/fa";

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "@/utils/animation";

const Hero = () => {
  return (
    <section>
      <div className=" container grid min-h-[600px] grid-cols-1 md:grid-cols-2 relative">
        <div className="flex flex-col justify-center py-20 md:py-0">
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-normal"
            >
              Gym Gives you the perfect Health
            </motion.h1>

            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-500 xl:max-w-6xl"
            >
              It is a long established fact that a reader will be by readable
              content of a page when are the best product.
            </motion.p>

            <motion.div
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="button-section !mt-4 flex justify-center gap-8 md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                {" "}
                Order Now
              </button>
              <button className="flex items-center justify-center gap-2">
                <FaPlay />
                Play Now
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div  className=" relative flex items-center justify-center min-h-[300px]  ">
          <Image alt="" src="/gym1.png" layout="fill" objectFit="contain"></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
