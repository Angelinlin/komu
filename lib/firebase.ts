"use server";
import { db } from "@/components/hooks/firebase/config"
import { collection, addDoc } from "firebase/firestore";

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

