"use server";
import { firestore } from "@/lib/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Add fileUrl and uniqueKey strings to the residentail attribute */
export async function addRsidentialImageToDatabase({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projectPage", id);

    await updateDoc(projectRef, {
      residential: {
        fileUrl, 
        uniqueKey,
        updatedAt: serverTimestamp(),
      }
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error adding image to residential:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the admin attribute */
export async function addAdminImageToDatabase({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projectPage", id);

    await updateDoc(projectRef, {
      admin: {
        fileUrl, 
        uniqueKey,
        updatedAt: serverTimestamp(),
      }
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error adding image to admin:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the commercial attribute */
export async function addCommercialImageToDatabase({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projectPage", id);

    await updateDoc(projectRef, {
      commercial: {
        fileUrl, 
        uniqueKey,
        updatedAt: serverTimestamp(),
      }
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error adding image to commercial:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the costal attribute */
export async function addCoastalImageToDatabase({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projectPage", id);

    await updateDoc(projectRef, {
      coastal: {
        fileUrl, 
        uniqueKey,
        updatedAt: serverTimestamp(),
      }
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error adding image to coastal:", error);
    return { success: false, error };
  }
}