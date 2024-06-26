"use client";
import React from 'react'
import NftStore from './market/_components/nftStore'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function StoreNFT() {

    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin')
        }
    })


    return (
        <div className='w-full h-auto flex items-center justify-center'>
            {/* {session?.data?.user?.email} */}
            <NftStore />
        </div>
    )
}

StoreNFT.requireAuth = true
