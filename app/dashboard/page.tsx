import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

export default function Dashboard() {

    const { data: session } = useSession()

    if (!session) {
        console.log('no session')
        redirect('/signin');
    }

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                dash
            </div>
        </>
    )
}
