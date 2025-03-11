"use server";
import { firestore } from "@/lib/firebase";
import { AboutPage, MainPage, ProjectPage } from "@/lib/types";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/** Updating MainPage */
export async function updateMainPage({ data }: { data: Partial<MainPage> }) {
  try {
    const projectRef = doc(firestore, "mainPage", "gIv6uKZrrw1nNrNlDWMw");
    await updateDoc(projectRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error };
  }
}

/** Updating AboutPage */
export async function updateAboutPage({ data }: { data: Partial<AboutPage> }) {
  try {
    const projectRef = doc(firestore, "aboutPage", "CRJUldSoR7mZ3pWnbLO4");
    await updateDoc(projectRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error };
  }
}

/** Updating projectPage */
export async function updateProjectPage({ data }: { data: Partial<ProjectPage> }) {
  try {
    const projectRef = doc(firestore, "projectPage", "V6bbirYNTyfPoAOFQNbU");
    await updateDoc(projectRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error };
  }
}