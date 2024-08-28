import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({ href, title, imgSrc }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center text-white hover:text-primary"
    >
      {imgSrc && (
        <div className="mt-2">
          <Image
            src={imgSrc}
            alt={title}
            width={150}
            height={250}
            layout="fixed"
          />
        </div>
      )}
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
