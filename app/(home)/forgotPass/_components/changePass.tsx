"use client";
import { auth } from '@/components/hooks/firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { FormEvent } from 'react'
import { toast } from 'sonner';

export default function ChangePassElement() {
    const [email, setEmail] = React.useState('');

    const changePasswordEmail = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await sendPasswordResetEmail(auth, email).then(() => {
                console.log("Email Sent");
                toast.success("Email Sent 👾")
            }).catch((error) => {
                toast.error(error.message)
            })
        } catch (e) {
            toast.error("Error Sending Email ❌")
        }
    }

    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Change your password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                onClick={changePasswordEmail}
                                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
