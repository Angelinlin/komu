import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="flex items-center mb-20 z-[20]" id="gallery">
      <div className="max-w-6xl p-4 mx-auto">
        <h2 className="pb-4 text-2xl font-bold text-center text-gray-blue dark:text-gray-200">
          Gallery
        </h2>
        <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="w-full px-4 mb-8 lg:w-2/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/arcade.jpg"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt=""
                height={350}
                width={300}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block text-white text-lg">
                Arcade Games
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Immerse yourself in a world of retro arcade games enhanced
                  with virtual reality technology for a new experience
                  experience.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-3/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/blockchain-nft.jpg"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt=""
                height={100}
                width={350}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block text-white text-lg">
                Blockchain and Nfts
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Experience the integration of blockchain and NFTs with our
                  arcade machines, offering a new dimension of gameplay and
                  exclusive rewards.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-3/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/machine.png"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt=""
                height={350}
                width={350}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block text-white text-lg">
                Komu Coins
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Earn rewards with our Komu Coins and unlock a lot of new
                  skins, avatars, and exclusive items to enhance your gaming
                  experience.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:w-2/5 ">
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/multiplayer.jpeg"
                className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                alt=""
                height={350}
                width={350}
              ></Image>
              <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
              <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block text-white text-lg">
                Multiplayer
                <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                  Who wants to play alone? Experience the thrill of multiplayer
                  gaming by inviting all your friends to join you in the fun and
                  excitement.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
