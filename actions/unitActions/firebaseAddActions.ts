"use server";
import { firestore } from "@/lib/firebase";
import { Unit } from "@/lib/types";
import { arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

{/** Adding a unit */}
export async function addUnit({ data }: { data: Unit }) {
  try {
    const projectRef = doc(collection(firestore, "units"));
    await setDoc(projectRef, {
      ...data, 
      id: projectRef.id,
      active: false,
      projectId: data.projectId,
      createdAt: serverTimestamp(),
    });
    revalidatePath('/');
    return { success: true, id: projectRef.id };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, error }
  }
}

/** Add fileUrl and uniqueKey strings to the unitImages list of objects */
export async function addImageToUnit({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "units", id);

    // Use updateDoc to append the new image to the unitImages array
    await updateDoc(projectRef, {
      unitImages: arrayUnion({ fileUrl, uniqueKey }),
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding unit image:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the plansImages list of objects */
export async function addImageToUnitPlan({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "units", id);

    // Use updateDoc to append the new image to the unitPlans array
    await updateDoc(projectRef, {
      unitPlans: arrayUnion({ fileUrl, uniqueKey }),
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding plan image:", error);
    return { success: false, error };
  }
}