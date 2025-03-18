"use client";
import { ProjectPage } from "@/lib/types";
import { toggleAdmin } from "@/store/adminSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminHeroImageToDatabase,
  addCoastalHeroImageToDatabase,
  addCommercialHeroImageToDatabase,
  addAdminCoverImageToDatabase,
  addCoastalCoverImageToDatabase,
  addCommercialCoverImageToDatabase,
  addResidentialHeroImageToDatabase,
  addResidentialCoverImageToDatabase,
} from "@/actions/pageActions/firebaseAddActions";
import ProjectCategory from "./CategoryAdd";

type Props = {
  projectPage: ProjectPage;
};


export default function ProjectPageSection({ projectPage }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);

  return (
    <div className="max-w-full w-[800px] flex flex-col items-center">
      <h1 onClick={() => dispatch(toggleAdmin(toggle === "projectPage" ? "" : "projectPage"))} className="text-[24px] text-center cursor-pointer lowercase">
        Update Project Page
      </h1>

      <div className={`flex flex-col items-center w-full gap-4 ${toggle === "projectPage" ? "h-auto" : "h-0"} overflow-hidden`}>
        <ProjectCategory
          title="Residential" 
          hero={projectPage.residential.hero} 
          cover={projectPage.residential.cover} 
          heroAction={addResidentialHeroImageToDatabase} 
          coverAction={addResidentialCoverImageToDatabase} 
        />
        <ProjectCategory 
          title="Admin" 
          hero={projectPage.admin.hero} 
          cover={projectPage.admin.cover} 
          heroAction={addAdminHeroImageToDatabase} 
          coverAction={addAdminCoverImageToDatabase} 
        />
        <ProjectCategory 
          title="Commercial" 
          hero={projectPage.commercial.hero} 
          cover={projectPage.commercial.cover} 
          heroAction={addCommercialHeroImageToDatabase} 
          coverAction={addCommercialCoverImageToDatabase} 
        />
        <ProjectCategory 
          title="Coastal" 
          hero={projectPage.coastal.hero} 
          cover={projectPage.coastal.cover} 
          heroAction={addCoastalHeroImageToDatabase} 
          coverAction={addCoastalCoverImageToDatabase} 
        />
      </div>
    </div>
  );
}