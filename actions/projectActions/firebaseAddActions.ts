"use server";
import { firestore } from "@/lib/firebase";
import { Project } from "@/lib/types";
import { arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

{/** Adding a project */}
export async function addProject({ data }: { data: Project }) {
  try {
    const projectRef = doc(collection(firestore, "projects"));
    await setDoc(projectRef, {
      ...data, 
      id: projectRef.id,
      active: false,
      createdAt: serverTimestamp(),
    });
    revalidatePath('/');
    return { success: true, id: projectRef.id };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, error }
  }
}

/** Add fileUrl and uniqueKey strings to the heroImages list of objects */
export async function addHeroImageToProject({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);

    // Use updateDoc to append the new hero image to the heroImages array
    await updateDoc(projectRef, {
      heroImages: arrayUnion({ fileUrl, uniqueKey }),
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding hero image to project:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the map attribute */
export async function addMapToProject({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);

    await updateDoc(projectRef, {
      map: { fileUrl, uniqueKey },
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding map to project:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the plan attribute */
export async function addPlanToProject({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);

    await updateDoc(projectRef, {
      plan: { fileUrl, uniqueKey },
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding plan to project:", error);
    return { success: false, error };
  }
}

/** Add fileUrl and uniqueKey strings to the brochure attribute */
export async function addBrochureToProject({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);

    await updateDoc(projectRef, {
      brochure: { fileUrl, uniqueKey },
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding brochure to project:", error);
    return { success: false, error };
  }
}
