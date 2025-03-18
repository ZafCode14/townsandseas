"use server";
import { firestore } from "@/lib/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Delete object from the heroImages list of objects by uniqueKey */
export async function deleteHeroImageFromMainPage({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "mainPage", id);

    // Fetch the current project data
    const projectSnap = await getDoc(projectRef);
    if (!projectSnap.exists()) {
      throw new Error("Project not found");
    }

    const projectData = projectSnap.data();
    const updatedHeroImages = projectData.heroImages?.filter((image: { uniqueKey: string }) => image.uniqueKey !== uniqueKey) || [];

    // Update the document with the filtered heroImages array
    await updateDoc(projectRef, {
      heroImages: updatedHeroImages,
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/admin');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error deleting hero image from main page:", error);
    return { success: false, error };
  }
}