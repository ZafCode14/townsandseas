"use server";
import { firestore } from "@/lib/firebase";
import { Unit } from "@/lib/types";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Updating project by unit Id */
export async function updateUnit({ id, data }: { id: string, data: Partial<Unit> }) {
  try {
    const unitRef = doc(firestore, "units", id);
    await updateDoc(unitRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error updating unit:", error);
    return { success: false, error };
  }
}

/** Toggling the active status of a unit */
export async function toggleUnitActiveStatus({ id, currentStatus }: { id: string, currentStatus: boolean }) {
  try {
    const projectRef = doc(firestore, "units", id);
    await updateDoc(projectRef, {
      active: !currentStatus,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error toggling active status:", error);
    return { success: false, error };
  }
}