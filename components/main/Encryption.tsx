"use client";
import React from "react";
import Image from "next/image";

const Encryption = () => {
  return (
    <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 z-20">
      <Image
        className="w-full rounded-lg"
        src="/Arcade2.png"
        alt="dashboard image"
        height={350}
        width={200}
      ></Image>
      <div className="mt-0.5">
        <div className="pl-4 mb-8 border-l-4 border-blue-800 ">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
            Who we are?
          </span>
          <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
            About Us
          </h1>
        </div>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Flowbite helps you connect with friends and communities of people who
          share your interests. Connecting with your friends and family as well
          as discovering new ones is easy with features like Groups.
        </p>
      </div>
    </section>
  );
};

export default Encryption;
