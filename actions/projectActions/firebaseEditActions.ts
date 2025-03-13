"use server";
import { firestore } from "@/lib/firebase";
import { Project } from "@/lib/types";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Updating project by project Id */
export async function updateProject({ id, data }: { id: string, data: Partial<Project> }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    await updateDoc(projectRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error };
  }
}

/** Toggling the active status of a project */
export async function toggleProjectActiveStatus({ id, currentStatus }: { id: string, currentStatus: boolean }) {
  try {
    const projectRef = doc(firestore, "projects", id);
    await updateDoc(projectRef, {
      active: !currentStatus, // Toggle the active status
      updatedAt: serverTimestamp(),
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error toggling active status:", error);
    return { success: false, error };
  }
}
