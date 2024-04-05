"use client";
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi';

export default function Navibar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const navBarStyles =
        "cursor-pointer hover:text-purple-600 transition duration-300 border-b-2 border-transparent hover:border-purple-600";

    return (
        <nav className="w-full md:bg-transparent bg-black fixed top-0 left-0 right-0 z-50 py-4 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex justify-between md:justify-start items-center w-full md:w-auto">
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
                            <FiAlignJustify size={25} />
                        </button>
                    </div>
                </div>
                <div
                    className={`${navbarOpen ? "block" : "hidden"
                        } md:flex md:flex-row md:items-center md:justify-center w-full md:w-auto`}
                >
                    <div className="flex h-full items-center text-center md:flex-row  text-white text-base justify-center md:justify-between">
                        <ul className="text-white gap-4 text-center flex flex-col md:flex-row md:space-x-6 rounded-full px-[40px] py-[12px] bg-[#0300145e] border-[#7042f861] md:border items-center justify-between">

                            <li>
                                <Link href='/komuSection'>
                                    <p className={navBarStyles}>Market</p>
                                </Link>
                            </li>
                            <li>
                                <Link href='/komuSection/profile'>
                                    <p className={navBarStyles}>Profile</p>
                                </Link>
                            </li>
                            <li className='block md:hidden'>
                                <button className='text-white cursor-pointer hover:text-red-300 transition duration-300 border-b-2 border-transparent hover:border-red-500'
                                    onClick={() => { signOut() }}>
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='h-full w-32 items-center justify-center md:block hidden'>
                    <button className='text-white cursor-pointer hover:text-red-300 transition duration-300 border-b-2 border-transparent hover:border-red-500'
                        onClick={() => { signOut() }}>
                        Sign out
                    </button>
                </div>
            </div>
        </nav>
    )
}
