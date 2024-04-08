"use client"
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { WalletIcon, TicketIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { getTicketUser } from '@/lib/functions';
import { auth } from '@/components/hooks/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';


export default function GridProf() {
    const wallet = useWallet();
    const session = useSession();
    const [tickets, setTickets] = useState(0);
    const [uuid, setUuid] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is signed in')
            setUuid(user.uid);

        } else {
            console.log('No user is signed in')
        }
    });

    const copyWallet = () => {
        navigator.clipboard.writeText(wallet.publicKey?.toString() as string);
        toast.success('Wallet copied');
    }

    const getTicketUsser = async () => {
        // if (uuid === "") {
        //     return console.log('No user');
        // }
        // console.log(uuid)
        // const docRef = doc(db, "tickets", uuid);
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     const data = docSnap.data();
        //     setTickets(data?.amount);
        //     console.log(data?.amount)
        // } else {
        //     console.log("No such document!");
        // }
        getTicketUser(uuid).then((data) => {
            if (data) {
                console.log(data)
                setTickets(data.amount);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.error("Error getting document: ", error);
        })
    }

    useEffect(() => {
        getTicketUsser()
    }, [])

    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row px-8 md:px-24 pt-20 md:pt-0 min-h-screen justify-center items-center gap-16'>
                <div className='h-[80vh] w-[90%] lg:w-1/2 text-white  rounded-md pt-8 px-1 overflow-y-hidden overflow-y-scroll scrollbar-hidden'>
                    <h1 className='text-base font-mono absolute ml-6 p-1 rounded-xl bg-purple-600 '>Items</h1>
                    <div className='grid w-full sm:grid-cols-2 gap-1 md:gap-4 mb-10 lg:mb-14 p-2 md:p-8 '>
                        {
                            [1, 2,].map((item, index) => {
                                return (
                                    <a key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <Image width={300} height={150} className="w-full object-cover rounded-t-xl" src="/FisrtTouch.png" alt="Image Description" />
                                        </div>
                                        <div className="p-4 md:p-5">
                                            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                                                Komu
                                            </p>
                                            <h3 className="mt-2 text-xs font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                                First touch
                                            </h3>
                                        </div>
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="p-4 w-full lg:w-1/2 h-full pt-20">
                    <div className=" flex flex-wrap space-x-0 gap-2 md:space-y-0">
                        <div className="flex-1 bg-white bg-opacity-5 text-white p-4 shadow rounded-lg md:w-1/2">
                            <h2 className=" text-base font-mono pb-1">Email</h2>
                            <p className="my-1 truncate">
                                {session?.data?.user?.email}
                            </p>

                        </div>

                        <div className="flex-1 bg-white bg-opacity-5 text-white p-4 shadow rounded-lg w-1/2">
                            <h2 className=" text-base font-mono pb-1">Wallet</h2>
                            <div className='flex flex-row gap-4'>
                                <WalletIcon className='w-6' />

                                {
                                    wallet.connected ?
                                        <button className='w-1/2' onClick={copyWallet}>
                                            <p className="my-1 text-sm truncate hover:text-purple-400 transition duration-200">
                                                {wallet.publicKey?.toString()}
                                            </p>
                                        </button>
                                        :
                                        <p className='text-xs flex items-center justify-center'>
                                            Not connected
                                        </p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap space-x-0 gap-2 md:space-y-0">

                        <div className="flex-1 bg-white bg-opacity-5 text-white p-4 shadow rounded-lg md:w-1/2">
                            <h2 className=" text-base font-mono pb-1">Items</h2>
                            <div className="my-1">
                                0
                            </div>

                        </div>

                        <div className="flex-1 bg-white bg-opacity-5 text-white p-4 shadow rounded-lg md:w-1/2 h-1/2">
                            <h2 className=" text-base font-mono pb-1">Tickets</h2>
                            <div className='flex flex-row gap-4'>
                                <TicketIcon className='w-6' />
                                <p className=" my-1">
                                    {tickets}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 bg-white bg-opacity-5 text-white p-4 shadow rounded-lg">
                        <h2 className=" text-base font-mono pb-1">Your nfts</h2>
                        <div className="my-1"></div>
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-px mb-6"></div>
                        <table className="w-full table-auto text-sm">
                            <thead>
                                <tr className="text-sm leading-normal">
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">DLC</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-grey-lighter text-center">
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        First touch
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        Space
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        2
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-right mt-4">
                            <button onClick={() => { getTicketUsser() }} className="bg-purple-600 hover:bg-purple-800 transition duration-300 text-white font-semibold py-2 px-4 rounded">
                                Ver más
                            </button>
                        </div>
                    </div>

                </div >
            </div>
        </>
    )
}
