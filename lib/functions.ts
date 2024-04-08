"use server";
import { db } from "@/components/hooks/firebase/config";
import { DocumentData, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { generateUUID } from "three/src/math/MathUtils.js";


// Post
export const postNftHash = async (uuid: string, nftHash: string, nftName: string, nftDlc: string) => {
    await setDoc(doc(db, "nft", generateUUID()), {
        userID: uuid,
        dlc: nftDlc,
        hashnft: nftHash,
        name: nftName,
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}

// Create Ticket User (initial: 0)
export const createTicketUser = async (uuid: string) => {
    if (uuid) {
        const docRef = doc(db, "tickets", generateUUID());
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setDoc(docRef, {
                userID: uuid,
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

// Get Nfts User
export async function getNftUser(uuid: string) {
    let result: DocumentData[] = [];
    if (uuid) {
        try {
            const q = query(collection(db, "nft"), where("userID", "==", uuid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                result.push(doc.data());
            });
        } catch (e) {
            console.log(e)
        }
    }
    return result;
}