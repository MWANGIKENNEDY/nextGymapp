"use client";

const ProductsData = [
  {
    image: "/tab1.png",
    title: "Tab1",
    info: "This is a description for tab1.",
    price: "$12.29",
    category: "Yoga",
  },
  {
    image: "/tab2.png",
    title: "Tab2",
    info: "This is a description for tab2.",
    price: "$12.29",
    category: "Yoga",
  },
  {
    image: "/tab3.png",
    title: "Tab3",
    info: "This is a description for tab3.",
    price: "$12.29",
    category: "Yoga",
  },
  {
    image: "/tab4.png",
    title: "Tab4",
    info: "This is a description for tab4.",
    price: "$12.29",
    category: "Fitness",
  },
  {
    image: "/tab5.png",
    title: "Tab5",
    info: "This is a description for tab5.",
    price: "$12.29",
    category: "Fitness",
  },
  {
    image: "/tab6.png",
    title: "Tab6",
    info: "This is a description for tab6.",
    price: "$12.29",
    category: "Muscles",
  },
  {
    image: "/tab7.png",
    title: "Tab7",
    info: "This is a description for tab7.",
    price: "$12.29",
    category: "Muscles",
  },
];

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((product) => product.category === activeTab);
  return (
    <div className=" container my-12 md:my-16">
      {/* tabs section */}
      <div className="flex space-x-4 mb-4 p-6">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded transition-all duration-200 ${
              activeTab === tabs[index]
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            key={index}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* tab card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((filteredCard, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=" p-4 border rounded shadow-sm space-y-2"
          >
            <div className=" relative h-[200px] ">
              <Image
                src={filteredCard.image}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div>
              <p className="text-xl font-semibold">{filteredCard.title}</p>
              <p className="text-gray-500">{filteredCard.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
