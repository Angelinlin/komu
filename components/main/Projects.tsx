import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="flex items-center py-16 z-20">
      <div className="max-w-6xl p-4 mx-auto">
        <h2 className="pb-4 text-4xl font-bold text-center text-gray-800">
          Gallery
        </h2>
        <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
        <div className="flex flex-wrap -m-1 ">
          <div className="w-full px-4 mb-8 lg:w-2/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/Arcade2.png"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt="work icons"
                height={350}
                width={200}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                <a
                  href="#"
                  className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white "
                >
                  Lorem ipsum
                </a>
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-3/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/Arcade2.png"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt="work icons"
                height={350}
                width={200}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                <a
                  href="#"
                  className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white "
                >
                  Lorem ipsum
                </a>
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-3/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/Arcade2.png"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt="work icons"
                height={350}
                width={200}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                <a
                  href="#"
                  className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white "
                >
                  Lorem ipsum
                </a>
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-2/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/Arcade2.png"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt="work icons"
                height={350}
                width={200}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                <a
                  href="#"
                  className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white "
                >
                  Lorem ipsum
                </a>
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
