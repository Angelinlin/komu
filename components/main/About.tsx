"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { GiWallet, GiAbstract006 } from "react-icons/gi";
import { PiVirtualRealityFill } from "react-icons/pi";

const About = () => {
  return (
    <section className="flex items-center0 xl:h-screen mt-20 z-[20]" id="about">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <p className="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400">
            About Us
          </p>
          <h2 className="pb-2 text-2xl font-bold text-gray-300 md:text-4xl ">
            What is Komu Arcade
          </h2>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <Image
              src="/Arcade2.png"
              alt="Arcade machine"
              className="relative z-40 object-cover w-full h-96 "
              width={500}
              height={100}
            ></Image>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-purple-500 dark:border-purple-400 dark:text-gray-300">
              Experience the perfect blend of VR innovation with nostalgic retro
              gaming.
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
              At Komu Arcade, were dedicated to providing an inclusive virtual
              reality arcade gaming experience. Enjoy exclusive items and
              multiplayer fun with friends. Explore diverse games for all skill
              levels. Step into our virtual realm and unleash the thrill of
              arcade gaming!
            </p>
            <ul className="mb-10">
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-white ">
                  <GiWallet />
                </span>
                Connect your wallet
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-white">
                  <GiAbstract006 />
                </span>
                Buy NFTS
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-white">
                  <PiVirtualRealityFill />
                </span>
                Built exclusively for VR
              </li>
            </ul>
            {/* <a
              href="https://nextjs-commerce-dun-three.vercel.app/search?q=nft"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-purple-800 rounded-lg hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-800 dark:hover:bg-purple-950 dark:focus:ring-purple-800"
            >
              <FaCartShopping className="mr-2" />
              Buy items
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
