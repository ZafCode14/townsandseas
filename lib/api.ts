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
    residential: {
      fileUrl: data?.residential?.fileUrl ?? "",
      uniqueKey: data?.residential?.uniqueKey ?? "",
    },
    admin: {
      fileUrl: data?.admin?.fileUrl ?? "",
      uniqueKey: data?.admin?.uniqueKey ?? "",
    },
    commercial: {
      fileUrl: data?.commercial?.fileUrl ?? "",
      uniqueKey: data?.commercial?.uniqueKey ?? "",
    },
    coastal: {
      fileUrl: data?.coastal?.fileUrl ?? "",
      uniqueKey: data?.coastal?.uniqueKey ?? "",
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
    missionAndVision: {
      mission: data?.missionAndVision?.mission ?? "",
      vision: data?.missionAndVision?.vision ?? "",
    },
    goalsAndObjectives: {
      ourGoals: data?.goalsAndObjectives?.ourGoals ?? "",
      objective: data?.goalsAndObjectives?.objective ?? "",
    },
    partnersAndTeam: {
      partners: data?.partnersAndTeam?.partners ?? "",
      theTeam: data?.partnersAndTeam?.theTeam ?? "",
    },
    coreValues: {
      title: data?.coreValues?.title ?? "",
      value1: {
        title: data?.coreValues?.value1?.title ?? "",
        text: data?.coreValues?.value1?.text ?? "",
      },
      value2: {
        title: data?.coreValues?.value2?.title ?? "",
        text: data?.coreValues?.value2?.text ?? "",
      },
      value3: {
        title: data?.coreValues?.value3?.title ?? "",
        text: data?.coreValues?.value3?.text ?? "",
      },
      value4: {
        title: data?.coreValues?.value4?.title ?? "",
        text: data?.coreValues?.value4?.text ?? "",
      },
      value5: {
        title: data?.coreValues?.value5?.title ?? "",
        text: data?.coreValues?.value5?.text ?? "",
      },
      value6: {
        title: data?.coreValues?.value6?.title ?? "",
        text: data?.coreValues?.value6?.text ?? "",
      },
    },
  };
};