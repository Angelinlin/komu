"use client"
import { auth } from '@/components/hooks/firebase/config';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import WalletButton from '@/components/sub/Wallet/WalletButton';
import Lottie from "lottie-react";
import greenB from '@/public/greenB.json';
import redB from '@/public/redB.json';

type Nft = {
    name: string,
    price: number,
    image: string,
    function?: boolean,
    metadata?: string
}

export default function NftStore() {

    const wallet = useWallet();
    const clusterString = "devnet"
    const publicKeyCreator = new PublicKey('9tMv2JKCzwXbYx5Eey3NpqNYaTjeTcpLSXZYeEmUdXP2');

    const connection = new Connection(clusterApiUrl(clusterString))
    const metaplex = Metaplex.make(connection)
        .use(walletAdapterIdentity(wallet))
        .use(bundlrStorage({
            address: 'https://devnet.bundlr.network',
            providerUrl: 'https://api.devnet.solana.com',
            timeout: 60000,
        }))


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
        })
        try {
            // Submit the transaction
            const { signature } = await metaplex.rpc().sendAndConfirmTransaction(nftBuilder, { commitment: 'confirmed' });
            const { mintAddress } = nftBuilder.getContext();
            console.log(mintAddress.toBase58())
            console.log(signature)
            toast.dismiss();
            toast.success('NFT minted successfully');
        } catch (e) {
            toast.dismiss();
            toast.error('Error minting NFT');
        }

    }


    const user = useAuthState(auth);

    const router = useRouter();

    if (!user) {
        toast.error('You are not logged in');
        router.push('/login');
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
            function: true,
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
        if (!user) {
            toast.error('You are not logged in');
            router.push('/login');
        }
    }, [])

    return (
        <>
            <div className="pt-20 flex items-center justify-cente">
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-zinc-100 pb-8">Our nfts</h2>
                    <div className='pb-4'>
                        <WalletButton />
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            nft.map((nfts, index) => (
                                <>
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
                                                        <Lottie className='absolute top-2 right-2 h-3.5 w-3.5' animationData={redB} loop={true} />
                                                        :
                                                        <Lottie
                                                            className="absolute top-2 right-2 "
                                                            animationData={greenB}
                                                            loop={true}
                                                        />
                                                }
                                            </button>
                                        </div>
                                        <h3 className="mt-4 text-sm text-zinc-300">{nfts.name}</h3>
                                        <p className="mt-1 text-xs font-medium text-zinc-200">{nfts.price}</p>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

