import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/components/hooks/firebase/config";


export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch((error) => (console.log(error.message)));
            }
        })
    ],
    callbacks: {
        async jwt({ user, token }: { user: any, token: any }) {
            //   update token with ID for front-end if user exists
            if (user) {
                token.uid = user.uid;
                return token;
            }

            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            //  update session with uid from token
            session.user.uid = token.uid;
            return session;
        },
    },
}
export default NextAuth(authOptions)