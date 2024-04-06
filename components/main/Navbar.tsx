"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import { signOut as asign } from "firebase/auth";

const Navbar = () => {
  const { data: session } = useSession();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navBarStyles =
    "cursor-pointer hover:text-purple-600 transition duration-300 border-b-2 border-transparent hover:border-purple-600";

  return (
    <nav className="w-full md:bg-transparent bg-black fixed top-0 left-0 right-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="h-auto w-auto flex flex-row items-center mr-8">
                <Image
                  src="/billy_nofondo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="cursor-pointer"
                />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={handleNavToggle}
              >
                <FiAlignJustify />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${navbarOpen ? "block" : "hidden"
            } md:flex md:flex-row md:items-center w-full md:w-auto`}
        >
          <div className="flex items-center md:flex-row md:gap-5 text-white text-base ml-3 mt-4 justify-center md:justify-between">
            <ul className="text-white flex flex-col md:flex-row md:space-x-6 rounded-full mr-[15px] px-[40px] py-[12px] bg-[#0300145e] border-[#7042f861] md:border items-center justify-between gap-2">
              <li>
                <Link href="#about">
                  <p className={navBarStyles}>About</p>
                </Link>
              </li>
              <li>
                <Link href="#FaQs">
                  <p className={navBarStyles}>FaQs</p>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <p className={navBarStyles}>Contact</p>
                </Link>
              </li>

              <li className="block md:hidden items-center justify-center">
                <div className="w-full h-full flex items-center justify-center flex-col gap-2">
                  {
                    session ? (
                      <>
                        <Link href="/komuSection" className="text-white rounded-full px-4">
                          <div className={navBarStyles}>
                            Market
                          </div>
                        </Link>
                        <div className='h-full w-32 items-center justify-center flex'>
                          <button className='text-white cursor-pointer hover:text-red-300 transition duration-300 border-b-2 border-transparent hover:border-red-500'
                            onClick={() => { signOut(), asign }}>
                            Sign out
                          </button>
                        </div>
                      </>
                    ) : (
                      <Link href="/signin" className=" inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Sign In
                        </span>
                      </Link>
                    )
                  }
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="hidden md:block items-center justify-center">
          {/* <SignOutBut> */}
          {
            session ? (
              <div className="flex flex-row gap-2 items-center justify-center">
                <Link href="/komuSection" className="text-white rounded-full py-2 px-4">
                  <div className={navBarStyles}>
                    Market
                  </div>
                </Link>
                <div className='h-full w-32 items-center justify-center md:block hidden'>
                  <button className='text-white cursor-pointer hover:text-red-300 transition duration-300 border-b-2 border-transparent hover:border-red-500'
                    onClick={() => { signOut(), asign }}>
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/signin" className="inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign In
                </span>
              </Link>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
