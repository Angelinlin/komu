import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] mt-14">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link href={"https://www.instagram.com/komuarcade/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>{" "}
            </Link>
            <Link href={"https://www.instagram.com/komuarcade/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link href={"https://www.instagram.com/komuarcade/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </Link>
            <Link href={"https://www.instagram.com/komuarcade/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about us</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                arcadeKomu@gmail..com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-5">
          &copy; Komu Arcade 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
