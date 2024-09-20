"use client";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";

const TestimonialsData = [
  {
    id: 1,
    name: "James Bond",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elite! Lorem ipsum dolor sit amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elite.",
    img: "/p1.jpg",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Ethan Hunt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elite! Lorem ipsum dolor sit amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elite.",
    img: "/p2.jpg",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Jason Bourne",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elite! Lorem ipsum dolor sit amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elite.",
    img: "/p3.jpg",
    delay: 0.6,
  },
  {
    id: 4,
    name: "John Wick",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elite! Lorem ipsum dolor sit amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elite.",
    img: "/p4.jpg",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Jack Ryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elite! Lorem ipsum dolor sit amet consectetur adipisicing elite. Lorem ipsum dolor sit amet consectetur adipisicing elite.",
    img: "/p5.jpg",
    delay: 1.0,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <div className=" py-14 mb-10">
      <div className="container">
        {/* header section */}

        <div className=" text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className=" capitalize text-4xl font-bold  ">
            What are the customers saying about us ?
          </h1>
        </div>

        {/* slider section */}

        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data, index) => (
              <div key={index} className=" my-6">

                <div className=" flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10">



             
                <div className=" flex justify-start items-center gap-5">
                  <div className=" relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      alt=""
                      src={data.img}
                    />
                  </div>
                  <div>
                    <p className=" text-xl text-black/80 font-bold">
                      {data.name}
                    </p>
                    <p>{data.name}</p>
                  </div>
                </div>

                <div className=" py-6 space-y-4">
                  <p>{data.text}</p>
                  <div className=" flex items-center">
                    <FaStar className=" text-yellow-400 text-2xl" />
                    <FaStar className=" text-yellow-400 text-2xl" />
                    <FaStar className=" text-yellow-400 text-2xl" />

                    <FaStar className=" text-yellow-400 text-2xl" />

                    <FaStar className=" text-yellow-400 text-2xl" />
                  </div>
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
