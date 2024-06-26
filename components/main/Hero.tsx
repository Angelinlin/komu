"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Hero = () => {

  const { data: session } = useSession();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-24 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ml-6">
        <motion.div variants={slideInFromTop}></motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-1 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Welcome to the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              Arcade World{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Where the classic age meets the digital fun. Enjoy the retro games in
          virtual reality.
        </motion.p>
        {/* este boton te mandara para descargar el juego, pero por lo mientras aqui tmb estara el signin */}
        {/* <SignInBut> */}
        {
          session ?
            <motion.div className="max-w-[200px]"
              variants={slideInFromLeft(1)} >
              <Link
                href="/komuSection"
                className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] "
              >
                Get started!
              </Link>
            </motion.div>
            :
            <motion.div className="max-w-[200px]"
              variants={slideInFromLeft(1)} >
              <Link
                href="/signin"
                className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg "
              >
                Get started!
              </Link>
            </motion.div>

        }
        {/* </SignInBut> */}
      </div >

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* cambiar imagen o mas adelante poner algo en 3d o video del juego */}
        <div className="mt-10">
          <Image src="/arcade.jpg" alt="work icons" height={700} width={700} ></Image>
        </div>
      </motion.div>
    </motion.div >
  );
};

export default Hero;
