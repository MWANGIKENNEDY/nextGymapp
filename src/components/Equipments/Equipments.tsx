"use client"
import React from "react";

import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "@/utils/animation";

const equipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];
const Equipments = () => {
  return (
    <section>
      <div className="container py-24 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className=" space-y-4 p-6 ">
          <h1 className=" font-bold text-3xl  md:text-4xl">
            What we offer for you
          </h1>
          <p className=" text-gray-500">
            It is a long established fact that a reader readable
          </p>
        </div>

        {equipmentData.map((ed, index) => (
          <motion.div
            variants={SlideLeft(ed.delay)}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            key={index}
            className=" space-y-4 p-6 bg-gray-100 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
          >
            {ed.icon}

            <p className=" text-2xl font-semibold">{ed.title}</p>

            <p className=" text-gray-500">{ed.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Equipments;
