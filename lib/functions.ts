import { auth, db } from "@/components/hooks/firebase/config";
import { Auth } from "firebase-admin/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";


// Post
export const postNftHash = async (nftHash: string, nftName: any) => {
    await setDoc(doc(db, "tickets", "aaaaaaaaa"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export const createTicketUser = async ({ auth }: { auth: any }) => {
    const uuid = auth.currentUser?.uid.toString();
    if (uuid) {
        const docRef = doc(db, "tickets", uuid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setDoc(docRef, {
                amount: "0",
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