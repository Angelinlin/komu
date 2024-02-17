'use client';
import React from 'react'
import { Toaster } from 'sonner'

export default function ToasterContext({ children } : { children: React.ReactNode }) {
    return (
        <>
        <Toaster position='bottom-right'/>
        {children}
        </>
    )
}
