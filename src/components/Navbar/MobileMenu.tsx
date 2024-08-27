"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { navMenu } from "./navMenu";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="xl:hidden ">
      {" "}
      <MdMenu
        onClick={() => setOpen((prev) => !prev)}
        className=" text-4xl cursor-pointer  "
      />
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="  absolute top-20 left-0 w-full  z-20 "
          >
            <div className=" m-6 bg-primary font-semibold uppercase flex flex-col items-center text-xl gap-4 rounded-3xl py-10 text-white  ">
              {navMenu.map((nav,index) => (
                <Link key={index} href={nav.href}>{nav.title}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
