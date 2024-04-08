"use client"
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import WalletButton from '@/components/sub/Wallet/WalletButton';
import Lottie from "lottie-react";
import greenB from '@/public/greenB.json';
import redB from '@/public/redB.json';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { postNftHash } from '@/lib/functions';

type Nft = {
    name: string,
    price: number,
    image: string,
    function?: boolean,
    metadata?: string
}

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    uid: string;
}

export default function NftStore() {

    const wallet = useWallet();
    const clusterString = "devnet";
    const url = process.env.RPC_URL;
    const publicKeyCreator = new PublicKey('9tMv2JKCzwXbYx5Eey3NpqNYaTjeTcpLSXZYeEmUdXP2');

    const session = useSession();
    const user = session?.data?.user as User;

    const connection = new Connection(clusterApiUrl(clusterString))
    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({
            address: 'https://devnet.bundlr.network',
            providerUrl: url,
            timeout: 60000,
        }));


    const mint = async (metadata: Nft) => {
        if (!wallet.publicKey) return (toast.error('Connect your wallet first'));
        if (metadata.function == false) return toast.info('Disabled');
        toast.loading('Minting NFT');
        console.log(metadata)
        const nftBuilder = await metaplex.nfts().builders().create({
            uri: metadata.metadata ?? '',
            name: "Komu Arcade",
            symbol: "KFNT",
            sellerFeeBasisPoints: 500,
            tokenOwner: wallet.publicKey as PublicKey,

            tokenStandard: TokenStandard.FungibleAsset,
            creators: [
                {
                    address: publicKeyCreator,
                    share: 100,
                }
            ],
        });
        try {
            // Submit the transaction
            const { signature } = await metaplex.rpc().sendAndConfirmTransaction(nftBuilder, { commitment: 'confirmed' });
            const { mintAddress } = nftBuilder.getContext();
            if (signature) {
                await postNftHash(user.uid, mintAddress.toString(), "First touch", "Space").then(() => {
                    console.log("Success")
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            }
            toast.dismiss();
            console.log(signature)
        } catch (e) {
            toast.dismiss();
            toast.error('Error minting NFT');
        }




    }



    const nft = [
        {
            name: 'First touch',
            price: 0.01,
            image: '/FisrtTouch.png',
            function: true,
            metadata: 'https://bafkreienaypcbh5xgellkjy2cqa6hm5tuxhhjrobody5rwci5iyola7wbm.ipfs.nftstorage.link'
        },
        {
            name: 'Nomad Tumbler',
            price: 2.5,
            image: '/arcade.jpg',
            function: false,
            metadata: 'https://bafkreidy6ccc4bnqk3kqpqteibnumlxl27evlwmzxbem3t5cqyvgznnbeu.ipfs.nftstorage.link'
        },
        {
            name: 'Focus Paper Refill',
            price: 5,
            image: '/infinite.png',
            function: false,
            metadata: ''

        },
        {
            name: 'Machined Mechanical Pencil',
            price: 0.5,
            image: '/space.png',
            function: false,
            metadata: ''

        }
    ]

    useEffect(() => {
        if (wallet.connected) {
            toast.success('Wallet connected');
        }
        else {
            toast.error('Wallet not connected');
        }
    }, []);

    return (
        <>
            <div className="pt-20 flex items-center justify-cente">
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
                    <div className='text-2xl font-extrabold tracking-tight text-zinc-100 pb-8'>
                        <h2 className="">Our nfts</h2>
                        <span className='text-white text-xs font-thin'>ONLY IN DEVNET</span>
                    </div>
                    <div className='pb-4'>
                        <WalletButton />
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            nft.map((nfts, index) => (

                                <div key={index}>
                                    <div className="group relative cursor-pointer">
                                        <button onClick={() => { mint(nfts) }} className="w-full h-80 bg-black rounded-lg overflow-hidden group-hover:opacity-75">
                                            <img
                                                src={nfts.image}
                                                alt={nfts.name}
                                                className="w-full h-full object-center object-cover"
                                            />
                                            {
                                                nfts.function == false ?
                                                    <Lottie className='absolute top-3 right-3 h-6 w-6' animationData={redB} loop={true} />
                                                    :
                                                    <Lottie
                                                        className="absolute top-2 right-2 h-8 w-8"
                                                        animationData={greenB}
                                                        loop={true}
                                                    />
                                            }
                                        </button>
                                    </div>
                                    <h3 className="mt-4 text-sm text-zinc-300">{nfts.name}</h3>
                                    <p className="mt-1 text-xs font-medium text-zinc-200">{nfts.price}</p>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}