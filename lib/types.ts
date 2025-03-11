export type MainPage = {
  ourProjects: {
    title: string;
    text: string;
  },
  ourStory: {
    title: string;
    text: string;
  },
  discoverMore: {
    title: string;
    text: string;
  },
  learnMore: {
    title: string;
    text: string;
  },
  contact: {
    title: string;
    text: string;
    slogan: string;
  }
}

export type ProjectPage = {
  residential: {
    fileUrl: string; // Image
    uniqueKey: string;
  },
  admin: {
    fileUrl: string; // Image
    uniqueKey: string;
  },
  commercial: {
    fileUrl: string; // Image
    uniqueKey: string;
  },
  coastal: {
    fileUrl: string; // Image
    uniqueKey: string;
  }
}

export type AboutPage = {
  aboutUs: {
    title: string;
    text: string;
    ourStory: string;
  },
  missionAndVision: {
    mission: string;
    vision: string;
  },
  goalsAndObjectives: {
    ourGoals: string;
    objective: string;
  },
  partnersAndTeam: {
    partners: string;
    theTeam: string;
  },
  coreValues: {
    title: string;
    value1: {
      title: string;
      text: string;
    },
    value2: {
      title: string;
      text: string;
    }
    value3: {
      title: string;
      text: string;
    },
    value4: {
      title: string;
      text: string;
    },
    value5: {
      title: string;
      text: string;
    },
    value6: {
      title: string;
      text: string;
    }
  }
}

export type Unit = {
  active: boolean;
  createdAt: string;
  id: string;
  projectId: string;
  name: string;
  type: string;
  feature: string;
  unitImages: {
    fileUrl: string; // Image
    uniqueKey: string;
  }[];
  unitPlans: {
    fileUrl: string; // Image
    uniqueKey: string;
  }[];
  viewer: string;
  description: string;
  attributes: string[];
}

export type Project = {
  active: boolean;
  createdAt: string;
  id: string;
  name: string;
  category: string;
  location: string,
  heroImages: {
      fileUrl: string; // Image
      uniqueKey: string;
    }[];
  spaces: {
    from: string;
    to: string;
  },
  map: {
    fileUrl: string; // Image
    uniqueKey: string;
  };
  description: string;
  farFrom: {
    location1: {
      name: string;
      distance: string;
    },
    location2: {
      name: string;
      distance: string;
    },
    location3: {
      name: string;
      distance: string;
    }
  },
  brochure: {
    fileUrl: string; // PDF
    uniqueKey: string;
  };
  plan: {
    fileUrl: string; // Image
    uniqueKey: string;
  };
}