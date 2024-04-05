"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import GridProf from './_components/GridProf';

export default function Dashboard() {

    const { data: session, status: status } = useSession()

    // if (!session && status != "unauthenticated") {
    //     console.log(status)
    //     console.log('no session')
    //     redirect('/signin');
    // }

    return (
        <>
            <GridProf />
        </>
    )
}
