import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { AboutPage, MainPage, Project, ProjectPage, Unit } from "@/lib/types";

export const fetchAllProjects = async (): Promise<Project[]> => {
  try {
    const projectRef = collection(firestore, "projects");
    const sortedQuery = query(projectRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(sortedQuery);

    const projectData: Project[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        active: data.active ?? "",
        createdAt: data.createdAt?.toDate()?.toISOString() ?? new Date().toISOString(),
        name: data.name ?? "",
        category: data.category ?? "",
        location: data.location ?? "",
        heroImages: data.heroImages ?? [],
        spaces: data.spaces ?? {},
        map: data.map ?? "",
        description: data.description ?? "",
        farFrom: data.farFrom ?? {},
        brochure: data.brochure ?? "",
        plan: data.plan ?? ""
      };
    });

    return projectData;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return [];
  }
};

export const fetchProjectById = async (projectId: string): Promise<Project | null> => {
  try {
    const projectDocRef = doc(firestore, "projects", projectId);
    const projectDoc = await getDoc(projectDocRef);

    if (!projectDoc.exists()) {
      console.warn("Project not found");
      return null;
    }

    const data = projectDoc.data();

    return {
      id: projectDoc.id,
      active: data.active ?? "",
      createdAt: data.createdAt?.toDate()?.toISOString() ?? new Date().toISOString(),
      name: data.name ?? "",
      category: data.category ?? "",
      location: data.location ?? "",
      heroImages: data.heroImages ?? [],
      spaces: data.spaces ?? {},
      map: data.map ?? "",
      description: data.description ?? "",
      farFrom: data.farFrom ?? {},
      brochure: data.brochure ?? "",
      plan: data.plan ?? ""
    };
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
};

export const fetchAllUnits = async (): Promise<Unit[]> => {
  try {
    const unitRef = collection(firestore, "units");
    const sortedQuery = query(unitRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(sortedQuery);

    const unitData: Unit[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        active: data.active ?? false,
        createdAt: data.createdAt?.toDate()?.toISOString() ?? new Date().toISOString(),
        projectId: data.projectId ?? "",
        name: data.name ?? "",
        type: data.type ?? "",
        feature: data.feature ?? "",
        unitImages: data.unitImages ?? [],
        unitPlans: data.unitPlans ?? [],
        viewer: data.viewer ?? "",
        description: data.description ?? "",
        attributes: data.attributes ?? []
      };
    });

    return unitData;
  } catch (error) {
    console.error("Error fetching unit data:", error);
    return [];
  }
};

/** Fetch Main Page */
export const fetchMainPage = async (): Promise<MainPage> => {
  const mainPageRef = doc(firestore, "mainPage", "gIv6uKZrrw1nNrNlDWMw");
  const docSnap = await getDoc(mainPageRef);

  const data = docSnap.data();

  return {
    receiverEmail: data?.receiverEmail || "",
    heroImages: data?.heroImages ?? [],
    ourProjects: {
      title: data?.ourProjects?.title ?? "",
      text: data?.ourProjects?.text ?? "",
    },
    ourStory: {
      title: data?.ourStory?.title ?? "",
      text: data?.ourStory?.text ?? "",
    },
    discoverMore: {
      title: data?.discoverMore?.title ?? "",
      text: data?.discoverMore?.text ?? "",
    },
    learnMore: {
      title: data?.learnMore?.title ?? "",
      text: data?.learnMore?.text ?? "",
    },
    contact: {
      title: data?.contact?.title ?? "",
      text: data?.contact?.text ?? "",
      slogan: data?.contact?.slogan ?? "",
    },
  };
};

/** Fetch Project Page */
export const fetchProjectPage = async (): Promise<ProjectPage> => {
  const projectPageRef = doc(firestore, "projectPage", "V6bbirYNTyfPoAOFQNbU");
  const docSnap = await getDoc(projectPageRef);

  const data = docSnap.data();

  return {
    heroImages: data?.heroImages ?? [],
    residential: {
      hero: {
        fileUrl: data?.residential?.hero.fileUrl ?? "",
        uniqueKey: data?.residential?.hero.uniqueKey ?? "",
      },
      cover: {
        fileUrl: data?.residential?.cover.fileUrl ?? "",
        uniqueKey: data?.residential?.cover.uniqueKey ?? "",
      }
    },
    admin: {
      hero: {
        fileUrl: data?.admin?.hero.fileUrl ?? "",
        uniqueKey: data?.admin?.hero.uniqueKey ?? "",
      },
      cover: {
        fileUrl: data?.admin?.cover.fileUrl ?? "",
        uniqueKey: data?.admin?.cover.uniqueKey ?? "",
      }
    },
    commercial: {
      hero: {
        fileUrl: data?.commercial?.hero?.fileUrl ?? "",
        uniqueKey: data?.commercial?.hero?.uniqueKey ?? "",
      },
      cover: {
        fileUrl: data?.commercial?.cover?.fileUrl ?? "",
        uniqueKey: data?.commercial?.cover?.uniqueKey ?? "",
      }
    },
    coastal: {
      hero: {
        fileUrl: data?.coastal?.hero?.fileUrl ?? "",
        uniqueKey: data?.coastal?.hero?.uniqueKey ?? "",
      },
      cover: {
        fileUrl: data?.coastal?.cover?.fileUrl ?? "",
        uniqueKey: data?.coastal?.cover?.uniqueKey ?? "",
      }
    },
  };
};

/** Fetch About Page */
export const fetchAboutPage = async (): Promise<AboutPage> => {
  const aboutPageRef = doc(firestore, "aboutPage", "CRJUldSoR7mZ3pWnbLO4");
  const docSnap = await getDoc(aboutPageRef);

  const data = docSnap.data();

  return {
    aboutUs: {
      title: data?.aboutUs?.title ?? "",
      text: data?.aboutUs?.text ?? "",
      ourStory: data?.aboutUs?.ourStory ?? "",
    },
    ourEthos: {
      title: data?.ourEthos?.title ?? "",
      etho1Title: data?.ourEthos?.etho1Title ?? "",
      etho1Text: data?.ourEthos?.etho1Text ?? "",
      etho2Title: data?.ourEthos?.etho2Title ?? "",
      etho2Text: data?.ourEthos?.etho2Text ?? "",
    },
    goalsAndObjectives: {
      ourGoals: data?.goalsAndObjectives?.ourGoals ?? "",
      objective: data?.goalsAndObjectives?.objective ?? "",
    },
    peopleBehindTheCraft: {
      text: data?.peopleBehindTheCraft?.text ?? "",
    },
  };
};