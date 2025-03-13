"use server";
import { firestore } from "@/lib/firebase";
import { deleteDoc, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

{/** Firestore Mutations (Adding, Updating, Deleting) for the projects collection */}


/** Deleting project by project Id */
export async function deleteProject({ id }: { id: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    await deleteDoc(projectRef);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error };
  }
}

/** Delete object from the heroImages list of objects by uniqueKey */
export async function deleteHeroImageFromProject({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);

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

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error deleting hero image from project:", error);
    return { success: false, error };
  }
}

/** Delete object from the map attribute */
export async function deleteMapFromProject({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    const projectSnap = await getDoc(projectRef);

    if (!projectSnap.exists()) {
      throw new Error("Project not found");
    }

    const projectData = projectSnap.data();
    
    // If the uniqueKey matches, remove the object
    if (projectData.map?.uniqueKey === uniqueKey) {
      await updateDoc(projectRef, {
        map: null, // or {} if you prefer an empty object
        updatedAt: serverTimestamp(),
      });

      revalidatePath('/');
      revalidatePath('/admin');
      return { success: true };
    }

    throw new Error("Map with the given uniqueKey not found");
  } catch (error) {
    console.error("Error deleting map from project:", error);
    return { success: false, error };
  }
}

/** Delete object from the plan attribute */
export async function deletePlanFromProject({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    const projectSnap = await getDoc(projectRef);

    if (!projectSnap.exists()) {
      throw new Error("Project not found");
    }

    const projectData = projectSnap.data();

    if (projectData.plan?.uniqueKey === uniqueKey) {
      await updateDoc(projectRef, {
        plan: null, 
        updatedAt: serverTimestamp(),
      });

      revalidatePath('/');
      revalidatePath('/admin');
      return { success: true };
    }

    throw new Error("Plan with the given uniqueKey not found");
  } catch (error) {
    console.error("Error deleting plan from project:", error);
    return { success: false, error };
  }
}

/** Delete object from the brochure attribute */
export async function deleteBrochureFromProject({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    const projectSnap = await getDoc(projectRef);

    if (!projectSnap.exists()) {
      throw new Error("Project not found");
    }

    const projectData = projectSnap.data();

    if (projectData.brochure?.uniqueKey === uniqueKey) {
      await updateDoc(projectRef, {
        brochure: null, 
        updatedAt: serverTimestamp(),
      });

      revalidatePath('/admin');
      revalidatePath('/');
      return { success: true };
    }

    throw new Error("Brochure with the given uniqueKey not found");
  } catch (error) {
    console.error("Error deleting brochure from project:", error);
    return { success: false, error };
  }
}