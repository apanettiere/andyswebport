"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const AboutSection = () => {
  const ref = useRef(null);

  const images = [
    {
      original: "/images/image1.svg",
      thumbnail: "/images/image1.svg",
    },
    {
      original: "/images/image2.svg",
      thumbnail: "/images/image2.svg",
    },
    {
      original: "/images/image3.svg",
      thumbnail: "/images/image3.svg",
    },
    {
      original: "/images/image4.svg",
      thumbnail: "/images/image4.svg",
    },
    {
      original: "/images/image5.svg",
      thumbnail: "/images/image5.svg",
    },
    {
      original: "/images/image6.svg",
      thumbnail: "/images/image6.svg",
    },
  ];

  return (
    <section id="about" className="text-secondary min-h-[30vh]">
      {/* About Section Content */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 flex justify-center items-center flex-col bg-light p-4 sm:z-0 z-40">
          <h2 className="text-4xl font-bold font-modak mb-4">Who is Andy?</h2>
          <p className="p-2 sm:pl-40 sm:pr-40 text-secondary">
            Computer Science student at Oregon State University with a strong
            passion for programming, actively seeking full-time roles in
            software development. I am detail-oriented and eager to contribute
            my technical skills to a dynamic and challenging work environment.
            Proficient in JavaScript, Python, SQL, HTML, and CSS. I specialize
            in front-end web development, including responsive design, user
            experience, and web accessibility. I possess a solid understanding
            of version control tools such as Git, along with strong
            problem-solving and analytical skills. Additionally, I hold an
            Associate of Arts degree from Santa Fe College.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center bg-secondary flex-shrink-0">
          <motion.div
            ref={ref}
            initial={{ x: "30%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] flex justify-center items-center"
          >
            <Image
              src="/images/about-andy.svg"
              alt="picture of Andy"
              layout="fill"
              className="object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className=" p-8 bg-slate100">
        <div className="font-bold text-4xl text-center mb-4">
          <span className="text-secondary font-modak">Gallery</span>
        </div>
        <article>
          <ImageGallery items={images} showThumbnails={false} />
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
