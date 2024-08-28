"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="bg-light my-12 md:my-12 relative flex flex-col sm:flex-row items-start justify-center"
    >
      <div className="flex flex-col text-center justify-center sm:w-1/3">
        <h5 className="text-4xl font-bold font-modak text-secondary mt-16">
          Contact Me
        </h5>
        <p className="text-secondary p-4 mb-4">
          Let&rsquo;s work together! Feel free to contact me for any job
          opportunities or collaborations. I&rsquo;m excited to bring my skills
          in software development and front-end web design to new and
          challenging projects. Looking forward to connecting!
        </p>

        <motion.div
          initial={{ x: "-30%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <Image
            src="/images/contact.svg"
            alt="contact image"
            className="rounded-lg p-2"
            width={500} // Replace with your desired width
            height={500} // Replace with your desired height
          />
        </motion.div>
      </div>
      <div className="w-full sm:w-1/3 sm:p-8 flex justify-center">
        <iframe
          id="JotFormIFrame-242369003168152"
          title="Andy"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242369003168152"
          style={{ width: "100%", height: "700px", border: "none" }}
        ></iframe>
      </div>
    </section>
  );
};

export default EmailSection;
