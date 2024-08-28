import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-10  text-white bg-slate-100">
      <div className=" flex items-center justify-between sm:pr-20 sm:pl-20">
        <Link href="/">
          <Image
            src="/images/andy-footer.svg"
            alt="Andy logo"
            className="rounded-lg"
            width={100} // Replace with your desired width
            height={100} // Replace with your desired height
          />
        </Link>
        <div className="flex sm:space-x-4 text-3xl">
          <Link href="https://github.com/apanettiere">
            <FaSquareGithub className="text-4xl text-secondary" />
          </Link>
          <Link href="https://www.linkedin.com/in/andrew-panettiere/">
            <FaLinkedin className="text-4xl text-secondary" />
          </Link>
        </div>
        <div className="text-sm text-secondary text-right">
          <p>
            &copy; {new Date().getFullYear()} Andrew Panettiere. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
