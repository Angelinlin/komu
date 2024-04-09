'use client'
import { FormEvent, useState } from 'react';
import { auth } from '../hooks/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'sonner';
import { createTicketUser } from '@/lib/functions';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useRouter();
    const [confirmPassword, setConfirmPassword] = useState('');


    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasMinimumLength = password.length >= 6;
        return hasUpperCase && hasNumber && hasMinimumLength;
    };

    const handleSignUp = async (e: FormEvent) => {
        try {
            e.preventDefault();

            if (!validatePassword(password)) {
                toast.error('Password must contain at least 6 characters, 1 uppercase letter and 1 number');
                return;
            }
            if (password !== confirmPassword) {
                toast.error('La contraseña y la confirmación de la contraseña no coinciden');
                return;
            }

            console.log({ email, password })
            await createUserWithEmailAndPassword(auth, email, password).then(() => {
                toast.success('Account created successfully');
                setEmail('');
                setPassword('')
                createTicketUser(auth.currentUser?.uid as string);
                route.push('/signin');
            }).catch((error) => {
                console.log(error)
            });

        } catch (e) {
            console.error(e)
        }
    };

    return (
        // <div className="min-h-screen flex items-center justify-center">
        //     <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        //         <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        //         <form>
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        //             />
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        //             />
        //             <button
        //                 onClick={handleSignUp}
        //                 className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        //             >
        //                 Sign Up
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create your account
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
                                className="block w-full rounded-md border-0 bg-white py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 bg-white py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Confirm pass */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Confirm password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 bg-white py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleSignUp}
                            disabled={!email || !password}
                            className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Create acoount
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-gray-400">
                    Do you have an account??{' '}
                    <Link href="/signin" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;