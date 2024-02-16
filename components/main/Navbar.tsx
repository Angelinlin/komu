import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialStyles =
  "cursor-pointer hover:text-gray-600 transition duration-300";
const navBarStyles =
  "cursor-pointer hover:text-purple-600 transition duration-300";

const Navbar = () => {
  return (
    <div className="w-full h-12 fixed  z-50 px-10 py-14">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/billy_nofondo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer "
          />
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between gap-2 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className={navBarStyles}>
              About
            </a>
            <a href="#skills" className={navBarStyles}>
              Contact
            </a>
            <a href="#projects" className={navBarStyles}>
              FaQs
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 text-white text-lg ml-5">
          <FaInstagram className={socialStyles} />
          <FaXTwitter className={socialStyles} />
          <FaDiscord className={socialStyles} />
          <FaTiktok className={socialStyles} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
