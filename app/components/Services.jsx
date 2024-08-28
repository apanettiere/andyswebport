"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Services = ({ image, title, githubLink, description, technologies }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-center items-center bg-accent p-6 text-secondary rounded-md shadow-lg m-4"
    >
      <Link href={githubLink}>
        <Image
          src={image}
          alt={title}
          className="rounded-md mb-4"
          width={260}
          height={160}
        />
      </Link>
      <div className="sm:w-96">
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-sm leading-7 text-center mb-4">{description}</p>
      </div>
      <div className="flex space-x-4 justify-center">
        {technologies.map((Icon, index) => (
          <Icon key={index} className="text-2xl" />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
