export type MainPage = {
  receiverEmail: string;
  heroImages: {
    fileUrl: string; // Image
    uniqueKey: string;
  }[];
  popupVideo: {
    fileUrl: string; // Video
    uniqueKey: string;
  };
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
  heroImages: {
    fileUrl: string; // Image
    uniqueKey: string;
  }[];
  residential: {
    hero: {
      fileUrl: string; // Image
      uniqueKey: string;
    };
    cover: {
      fileUrl: string; // Image
      uniqueKey: string;
    }
  },
  admin: {
    hero: {
      fileUrl: string; // Image
      uniqueKey: string;
    };
    cover: {
      fileUrl: string; // Image
      uniqueKey: string;
    }
  },
  commercial: {
    hero: {
      fileUrl: string; // Image
      uniqueKey: string;
    };
    cover: {
      fileUrl: string; // Image
      uniqueKey: string;
    }
  },
  coastal: {
    hero: {
      fileUrl: string; // Image
      uniqueKey: string;
    };
    cover: {
      fileUrl: string; // Image
      uniqueKey: string;
    }
  }
}

export type AboutPage = {
  aboutUs: {
    title: string;
    text: string;
    ourStory: string;
  },
  ourEthos: {
    title: string;
    etho1Title: string;
    etho1Text: string;
    etho2Title: string;
    etho2Text: string;
  },
  goalsAndObjectives: {
    ourGoals: string;
    objective: string;
  },
  peopleBehindTheCraft: {
    text: string;
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