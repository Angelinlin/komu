"use server";
import { db } from "@/components/hooks/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";


// Post
export const postNftHash = async (uuid: string, nftHash: string, nftName: string, nftDlc: string) => {

    await setDoc(doc(db, "nft", uuid), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}

// Create Ticket User (initial: 0)
export const createTicketUser = async (uuid: string) => {
    if (uuid) {
        const docRef = doc(db, "tickets", uuid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setDoc(docRef, {
                amount: 100,
            }).then(() => {
                console.log("Document successfully written!");
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
        } else {
            console.log("Document already exists!");
        }
    }
    return
}

// Get Ticket User
export async function getTicketUser(uuid: string) {
    if (uuid) {
        const docRef = doc(db, "tickets", uuid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    }
    return
}