import React from "react";

import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";

import { FaDumbbell } from "react-icons/fa";
import { navMenu } from "./navMenu";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container flex items-center justify-between h-20  relative">
        {/* logo section */}

        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell />
          <p>Kennedy</p>
          <p className=" text-secondary">Gym</p>
        </div>

        {/* menu section  */}

        <div className="hidden xl:flex items-center gap-4 justify-between ">
          {navMenu.map((nav,index) => (
            <Link key={index} className=" hover:text-primary duration-200" href={nav.href}>{nav.title}</Link>
          ))}
        </div>

        {/* icons section */}

        <div className=" flex items-center justify-between gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <FaSearch></FaSearch>
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiShoppingCart></CiShoppingCart>
          </button>

          <button className=" hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden xl:block">Login</button>
        </div>

        {/* mobile hamberger section */}

<MobileMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
