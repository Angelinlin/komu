"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import GridProf from './_components/GridProf';
import { redirect } from 'next/navigation';

export default function Dashboard() {

    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin')
        }
    })

    return (
        <>
            <GridProf />
        </>
    )
}
