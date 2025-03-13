"use server";
import { firestore } from "@/lib/firebase";
import { deleteDoc, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Deleting project by unit Id */
export async function deleteUnit({ id }: { id: string }) {
  try {
    const unitRef = doc(firestore, "units", id);
    await deleteDoc(unitRef);
    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error };
  }
}

/** Delete object from the unitImages list of objects by uniqueKey */
export async function deleteUnitImageFromList({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const unitRef = doc(firestore, "units", id);

    // Fetch the current unit data
    const unitSnap = await getDoc(unitRef);
    if (!unitSnap.exists()) {
      throw new Error("Unit not found");
    }

    const unitData = unitSnap.data();
    const updatedUnitImages = unitData.unitImages?.filter((image: { uniqueKey: string }) => image.uniqueKey !== uniqueKey) || [];

    // Update the document with the filtered heroImages array
    await updateDoc(unitRef, {
      unitImages: updatedUnitImages,
      updatedAt: serverTimestamp(),
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error deleting unit image:", error);
    return { success: false, error };
  }
}

/** Delete object from the planImages list of objects by uniqueKey */
export async function deletePlanImageFromList({ id, uniqueKey }: { id: string, uniqueKey: string }) {
  try {
    const unitRef = doc(firestore, "units", id);

    // Fetch the current unit data
    const unitSnap = await getDoc(unitRef);
    if (!unitSnap.exists()) {
      throw new Error("Unit not found");
    }

    const unitData = unitSnap.data();
    const updatedPlanImages = unitData.unitPlans?.filter((image: { uniqueKey: string }) => image.uniqueKey !== uniqueKey) || [];

    // Update the document with the filtered planImages array
    await updateDoc(unitRef, {
      unitPlans: updatedPlanImages,
      updatedAt: serverTimestamp(),
    });

    revalidatePath('*');
    return { success: true };
  } catch (error) {
    console.error("Error deleting plan image:", error);
    return { success: false, error };
  }
}