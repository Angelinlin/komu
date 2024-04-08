"use client"
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { WalletIcon, TicketIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { getNftUser, getTicketUser } from '@/lib/functions';
import { DocumentData } from 'firebase-admin/firestore';
import { Metadata, Metaplex } from '@metaplex-foundation/js';
import { Connection } from '@solana/web3.js';

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    uid: string;
}

export default function GridProf() {
    const wallet = useWallet();
    const session = useSession();
    const connection = new Connection("https://api.devnet.solana.com");
    const metaplex = new Metaplex(connection);
    const user = session?.data?.user as User;
    const [tickets, setTickets] = useState(0);
    const [nfts, setNfts] = useState<DocumentData[]>();

    const [nftArray, setNftArray] = useState<any[]>([]);

    const copyWallet = () => {
        navigator.clipboard.writeText(wallet.publicKey?.toString() as string);
        toast.success('Wallet copied');
    }

    const getTicketUsser = async () => {
        if (session) {
            getTicketUser(user.uid).then((data) => {
                if (data) {
                    setTickets(data.amount);
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.error("Error getting document: ", error);
            })
        }
    }

    const getNftsUser = async () => {
        if (session) {
            getNftUser(user.uid).then((data) => {
                if (data) {
                    setNfts(data);
                    getNftsWallet(data)
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.error("Error getting document: ", error);
            })
        }
    }

    const getNftsWallet = async (nftDataBase: DocumentData[]) => {
        if (wallet.publicKey) {
            const nftData = await metaplex.nfts().findAllByOwner({ owner: wallet.publicKey });
            nftData.map(async (nft) => {
                try {
                    const mintAddress = (nft as Metadata).mintAddress.toBase58();
                    if (nftDataBase) {
                        const existsInNftsUser = nftDataBase.some(nftItem => nftItem.hashnft === mintAddress);
                        if (existsInNftsUser) {
                            console.log(`NFT with mintAddress ${mintAddress} exists in nftsUser`);
                            await fetch(nft.uri).then(async (response) => {
                                const data = await response.json();
                                console.log(data);
                                setNftArray(prevNfts => [...prevNfts, data]);
                            });
                        }
                    } else {
                        console.log('nfts is undefined or null');
                    }
                } catch (error) {
                    // Handle individual fetch error here
                    console.error("Error fetching NFT data:", error);
                }
            });
        }
    }

    useEffect(() => {
        getTicketUsser()
        getNftsUser()
        console.log(nftArray)
    }, [])

    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row px-8 md:px-24 pt-20 md:pt-0 min-h-screen justify-center items-center gap-16'>
                <div className='h-[80vh] w-[90%] lg:w-1/2 text-white  rounded-md pt-8 px-1 overflow-y-hidden overflow-y-scroll scrollbar-hidden'>
                    <h1 className='text-base font-mono absolute ml-6 p-1 rounded-xl bg-purple-600 '>Items</h1>
                    <div className='grid w-full sm:grid-cols-2 gap-1 md:gap-4 mb-10 lg:mb-14 p-2 md:p-8 '>
                        {
                            (nftArray.length > 0) ?
                                nftArray.map((item, index) => {
                                    return (
                                        <div key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                                            <div className="aspect-w-16 aspect-h-9">
                                                <Image width={300} height={150} className="w-full object-cover rounded-t-xl" src={item.image} alt="Image Description" />
                                            </div>
                                            <div className="p-4 md:p-5">
                                                <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                                                    {item.description}
                                                </p>
                                                <h3 className="mt-2 text-xs font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className='flex h-full w-full items-center justify-center'>
                                    <p className='text-xs'>No nfts</p>
                                </div>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    nfts?.map((nft, index) => {
                                        return (
                                            <tr key={index} className="text-grey-darkest text-center">
                                                <td className="py-2 px-4 border-b border-grey-light">{nft.name}</td>
                                                <td className="py-2 px-4 border-b border-grey-light">{nft.dlc}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {/* <div className="text-right mt-4">
                            <button onClick={() => { getTicketUsser() }} className="bg-purple-600 hover:bg-purple-800 transition duration-300 text-white font-semibold py-2 px-4 rounded">
                                Ver más
                            </button>
                        </div> */}
                    </div>

                </div >
            </div>
        </>
    )
}
