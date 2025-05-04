"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithunIcon from "@/assets/icons/github.svg";
import TailWindCssIcon from "@/assets/icons/tailwindcss.svg";
import NextJsIcon from "@/assets/icons/nextdotjs.svg";
import mapImage from "@/assets/images/map.png";
import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/Toolboxitem";
import { motion } from "framer-motion";
import { useRef } from "react";
import MyselfImage from "@/assets/images/Myself.jpg";

const toolboxItem = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: NextJsIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailWindCssIcon,
  },
  {
    title: "Github",
    iconType: GithunIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "50%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "30%",
    top: "70%",
  },
  {
    title: "Writing Code",
    emoji: "🧑‍💻",
    left: "20%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20" id="About">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

      <div className="mt-20 p-0 flex flex-col gap-8">

          <Card className="lg:h-[220px] p-0 relative md:max-h-full">
              {/* <Image
                src={MyselfImage}
                alt="map"
                className="h-full w-full  object-cover object-left-top"
              /> */}
              <CardHeader
                title="About Me"
                description="Hi, I'm Swapnil Kalambe, a passionate frontend developer. I'm currently pursuing my BCA from Chhatrapati Shivaji Maharaj University (expected graduation: 2026). I specialize in crafting responsive and user-friendly interfaces using HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and Framer Motion."
                aboutMe="Though I don’t have professional experience yet, I’ve built multiple personal projects including landing pages and a portfolio site that reflect my dedication to clean design and smooth user interactions. I'm always learning, experimenting, and aiming to turn ideas into seamless digital experiences."
                className="px-6 py-6"
              />
             
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={memojiAvatar1}
                  alt="memoji avatar"
                  className="size-20"
                />
              </div> */}
          </Card>

          <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-6 md:gap-6">
          <Card className="h-[320px] md:col-span-3">
            <CardHeader
            title="My Tools"
            description="Explore the technologies and tools I use to craft exceptional digital Experiences."
            className="px-6 pt-6"
            />

          <ToolboxItem
            Items={toolboxItem}
            className=""
            itemsWrapperClassName="animate-move-left [animation-duration:15s]"
          />
          <ToolboxItem
            Items={toolboxItem}
            className="mt-6"
            itemsWrapperClassName="animate-move-right [animation-duration:5s]"
          />
          </Card>

          <Card className=" flex flex-col h-[320px] md:col-span-3">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />

            <div className="flex-1 relative" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          </div>

      </div>
      </div>
    </div>
  );
};
