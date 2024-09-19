"use client"

import React from "react";

import { motion } from "framer-motion";

import { SlideLeft } from "@/utils/animation";

const DiscountBanner = () => {
  return (
    <div className=" container my-14 ">
      <div className=" bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center space-y-8">
          <motion.h1 
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:true}}
          
          className=" text-3xl lg:text-5xl  font-bold uppercase">get 20% discount on your first order, are you ready to buy ?</motion.h1>

          <motion.p 
             variants={SlideLeft(0.7)}
             initial="hidden"
             whileInView={"visible"}
             viewport={{once:true}}
          >
            We will make sure you get the right and the best quality products
            for your work-out!
          </motion.p>

          <motion.div className=" flex justify-center gap-6" 
             variants={SlideLeft(0.9)}
             initial="hidden"
             whileInView={"visible"}
             viewport={{once:true}}
          >
            <button className=" primary-btn capitalize">learn more</button>

            <button className=" border-2 border-primary  text-primary font-bold px-5 rounded-lg capitalize">stay in touch</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
