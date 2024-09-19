"use client";
import { FadeUp } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Banner = ({
  image,
  title,
  subtitle,
  link,
}: {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 space-y-6 bg-[rgb(249,249,249)] py-14 md:grid-cols-2 md:space-y-0 md:gap-10">
        <motion.div
          className=" relative h-[300px]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt=""
            className=" "
          />
        </motion.div>

        <div className="flex flex-col justify-center space-y-4 text-center md:text-left lg:max-w-[500px]">
          <motion.p
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-2xl font-bold capitalize lg:text-4xl"
          >
            {title}
          </motion.p>

          <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">{link}</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
