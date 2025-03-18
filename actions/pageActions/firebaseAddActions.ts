"use server";
import { firestore } from "@/lib/firebase";
import { doc, serverTimestamp, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { revalidatePath } from "next/cache";

async function updateProjectCategory({
  id,
  category,
  type, // "hero" or "cover"
  fileUrl,
  uniqueKey,
}: {
  id: string;
  category: "residential" | "admin" | "commercial" | "coastal";
  type: "hero" | "cover";
  fileUrl: string;
  uniqueKey: string;
}) {
  try {
    const projectRef = doc(firestore, "projectPage", id);
    const projectSnap = await getDoc(projectRef);
    const existingData = projectSnap.exists() ? projectSnap.data()?.[category] || {} : {};

    await updateDoc(projectRef, {
      [category]: {
        ...existingData, // Preserve existing data
        [type]: {
          fileUrl,
          uniqueKey,
          updatedAt: serverTimestamp(),
        },
      },
    });

    revalidatePath("/admin");
    revalidatePath("/projects");

    return { success: true };
  } catch (error) {
    console.error(`Error adding ${type} image to ${category}:`, error);
    return { success: false, error };
  }
}

// Reusable functions
export async function addResidentialHeroImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "residential", type: "hero" });
}

export async function addResidentialCoverImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "residential", type: "cover" });
}

export async function addAdminHeroImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "admin", type: "hero" });
}

export async function addAdminCoverImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "admin", type: "cover" });
}

export async function addCommercialHeroImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "commercial", type: "hero" });
}

export async function addCommercialCoverImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "commercial", type: "cover" });
}

export async function addCoastalHeroImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "coastal", type: "hero" });
}

export async function addCoastalCoverImageToDatabase(params: { id: string; fileUrl: string; uniqueKey: string }) {
  return updateProjectCategory({ ...params, category: "coastal", type: "cover" });
}

export async function addHeroImageToMainPage({ id, fileUrl, uniqueKey }: { id: string, fileUrl: string, uniqueKey: string }) {
  try {
    const projectRef = doc(firestore, "mainPage", id);

    await updateDoc(projectRef, {
      heroImages: arrayUnion({ fileUrl, uniqueKey }),
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/admin');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error adding hero image to main page:", error);
    return { success: false, error };
  }
}