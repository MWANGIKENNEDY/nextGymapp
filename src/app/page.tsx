import Banner from "@/components/Banner/Banner";
import DiscountBanner from "@/components/DiscountBanner/DiscountBanner";
import Equipments from "@/components/Equipments/Equipments";
import Hero from "@/components/Hero/Hero";
import Tabs from "@/components/Tabs/Tabs";
import Testimonial from "@/components/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  let Banner1 = {
    title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos recusandae eveniet quo molestias eaque nesciunt suscipit? Harum assumenda fugiat dolores facere, eum nam fugit omnis dolore accusantium sequi? Laudantium.",
    image: "/gym2.png",
    link: "Explore More",
  };

  let Banner2 = {
    title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos recusandae eveniet quo molestias eaque nesciunt suscipit? Harum assumenda fugiat dolores facere, eum nam fugit omnis dolore accusantium sequi? Laudantium.",
    image: "/gym3.png",
    link: "See Details",
  };
  return (
    <main className="">
      <Hero />
      <Equipments />
      <Banner {...Banner1} />
   <Tabs/>
      <Banner {...Banner2} />

      <Testimonial/>

      <DiscountBanner/>
    </main>
  );
}
