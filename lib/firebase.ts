"use client";
import { db } from "@/components/hooks/firebase/config"
import { collection, addDoc, doc, getDoc, getDocs, } from "firebase/firestore";

export const TicketReg = async ({ amount, IdUser }: { amount: number, IdUser: string }) => {
    const ticketRef = addDoc(collection(db, "Tickets"), {
        amount,
        IdUser
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const TicketList = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "Tickets"));
        const data: { id: string; }[] = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return { props: data };
    } catch (e) {
        console.log(e)
    }
}
