import Link from "next/link";
import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className=" container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 text-white border-gray-300/10">
          <div className=" py-8 px-4 space-y-4">
            <div className=" flex items-center text-2xl font-bold uppercase">
              <FaDumbbell />
              <p>KENNEDY</p>
              <p className=" text-secondary">GYM</p>
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              facilis rem ducimus eius voluptatum possimus magnam quidem
              laboriosam sapiente quam.
            </p>

            <div className=" flex items-center justify-start gap-5  !mt-6">
              <Link href="#">
                <HiLocationMarker />
              </Link>

              <Link href="#">
                <FaInstagram />
              </Link>

              <Link href="#">
                <FaLinkedin />
              </Link>

              <Link href="#">
                <FaFacebook />
              </Link>
            </div>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4 ">
              <h1 className=" sm:text-xl text-xl font-bold sm:text-left text-justify mb-5  ">
                Important Links
              </h1>

              <ul className=" flex flex-col gap-3">
                <li>
                  <Link href={"#"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"#"}>Services</Link>
                </li>
                <li>
                  <Link href={"#"}>Login</Link>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4 ">
              <h1 className=" sm:text-xl text-xl font-bold sm:text-left text-justify mb-5  ">
                Company
              </h1>

              <ul className=" flex flex-col gap-3">
                <li>
                  <Link href={"#"}>Our Services</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"#"}>Our Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4 ">
              <h1 className=" sm:text-xl text-xl font-bold sm:text-left text-justify mb-5  ">
                Resources
              </h1>

              <ul className=" flex flex-col gap-3">
                <li>
                  <Link href={"#"}>Products</Link>
                </li>
                <li>
                  <Link href={"#"}>Yoga</Link>
                </li>
                <li>
                  <Link href={"#"}>Muscles</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-gray-300/10">
            <span className=" text-sm text-gray-300 opacity-70">
              @copyright 2024 Kennedy Software Company
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
