'use client'
import { FormEvent, useState } from 'react';
import { auth } from '../hooks/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'sonner';
import { createTicketUser } from '@/lib/functions';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useRouter();

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
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
                <h1 className="text-white text-2xl mb-5">Sign Up</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
                    />
                    <button
                        onClick={handleSignUp}
                        className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;