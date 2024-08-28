"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const channels = [
  "https://giphy.com/embed/Ye5VeHn3plm7K",
  "https://giphy.com/embed/XgAkONq9jun5d3imOI",
  "https://giphy.com/embed/3o6Zt11R527fgtrIJO",
  "https://giphy.com/embed/bZQvimlS7kuGc",
  "https://giphy.com/embed/v0VvNLK6qnT8c",
  "https://giphy.com/embed/6HWsyW8V9U2u4",
];

const transitionChannel = "https://giphy.com/embed/riw3K0D2h4klG"; // Transition iframe URL

const HeroSection = () => {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChannelChange = (direction) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentChannel((prevChannel) => {
        if (direction === "up") {
          return (prevChannel + 1) % channels.length;
        } else {
          return (prevChannel - 1 + channels.length) % channels.length;
        }
      });
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="sm:min-h-screen min-h-[700px] flex flex-col items-center justify-center bg-slate-100">
      <div className="relative w-full max-w-screen-lg">
        <div className="relative pb-[56.25%]">
          <motion.div
            key={isTransitioning ? "transition" : currentChannel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center "
          >
            <iframe
              src={
                isTransitioning ? transitionChannel : channels[currentChannel]
              }
              title="Animated Gif"
              allowFullScreen
              className="w-[80%] h-[80%] object-contain rounded-lg"
            ></iframe>
          </motion.div>

          <Image
            src="/images/tv.svg"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            alt="TV"
            fill
            objectFit="cover"
          />
        </div>
      </div>

      <div className="z-30 flex items-center space-x-4 mt-4">
        <div className="flex space-x-4 text-3xl">
          <Link href="https://github.com/apanettiere" prefetch={false}>
            <FaSquareGithub className="text-4xl text-secondary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrew-panettiere/"
            prefetch={false}
          >
            <FaLinkedin className="text-4xl text-secondary" />
          </Link>
        </div>
        <button
          onClick={() => handleChannelChange("down")}
          className="px-4 py-2 bg-secondary rounded text-white"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => handleChannelChange("up")}
          className="px-4 py-2 bg-secondary rounded text-white"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
