"use client";
import Image from "next/image";
import { ProjectPage } from "@/lib/types";
import { toggleAdmin } from "@/store/adminSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { addAdminImageToDatabase, addCoastalImageToDatabase, addCommercialImageToDatabase, addRsidentialImageToDatabase } from "@/actions/pageActions/firebaseAddActions";
import AddAndDeleteImage from "../handleImages/AddAndDeleteImage";

type Props = {
  projectPage: ProjectPage;
};

export default function ProjectPageSection({ projectPage }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);

  return (
    <div className="max-w-full flex flex-col items-center">
      <h1
        onClick={() => dispatch(toggleAdmin(toggle === "projectPage" ? "" : "projectPage"))}
        className="text-[24px] text-center cursor-pointer"
      >
        update project page
      </h1>

      <div className={`flex flex-col items-center w-full gap-4 ${toggle === "projectPage" ? "h-auto" : "h-0"} overflow-hidden`}>
        
        {/* Residential */}
        <h3 className="text-center uppercase mt-5">Residential Project</h3>
        <AddAndDeleteImage 
          uKey={projectPage.residential.uniqueKey}
          id={"V6bbirYNTyfPoAOFQNbU"} 
          addImageToDatabase={addRsidentialImageToDatabase}
        />
        {projectPage.residential.fileUrl && (
          <div className="flex flex-col w-full items-center">
            <Image
              src={projectPage.residential.fileUrl}
              alt="Residential project image"
              width={1100}
              height={800}
              className="flex-1 w-[400px] max-w-full object-contain mb-2"
            />
          </div>
        )}

        {/* Admin */}
        <h3 className="text-center uppercase mt-5">Admin Project</h3>
        <AddAndDeleteImage 
          uKey={projectPage.admin.uniqueKey}
          id={"V6bbirYNTyfPoAOFQNbU"} 
          addImageToDatabase={addAdminImageToDatabase} 
        />
        {projectPage.admin.fileUrl && (
          <div className="flex flex-col items-center w-full">
            <Image
              src={projectPage.admin.fileUrl}
              alt="Admin project image"
              width={1100}
              height={800}
              className="flex-1 w-[400px] max-w-full object-contain mb-2"
            />
          </div>
        )}

        {/* Commercial */}
        <h3 className="text-center uppercase mt-5">Commercial Project</h3>
        <AddAndDeleteImage 
          uKey={projectPage.commercial.uniqueKey}
          id={"V6bbirYNTyfPoAOFQNbU"} 
          addImageToDatabase={addCommercialImageToDatabase}
        />
        {projectPage.commercial.fileUrl && (
          <div className="flex flex-col w-full items-center">
            <Image
              src={projectPage.commercial.fileUrl}
              alt="Commercial project image"
              width={1100}
              height={800}
              className="flex-1 w-[400px] max-w-full object-contain mb-2"
            />
          </div>
        )}

        {/* Coastal */}
        <h3 className="text-center uppercase mt-5">Coastal Project</h3>
        <AddAndDeleteImage 
          uKey={projectPage.coastal.uniqueKey}
          id={"V6bbirYNTyfPoAOFQNbU"} 
          addImageToDatabase={addCoastalImageToDatabase}
        />
        {projectPage.coastal.fileUrl && (
          <div className="flex flex-col w-full items-center">
            <Image
              src={projectPage.coastal.fileUrl}
              alt="Coastal project image"
              width={1100}
              height={800}
              className="flex-1 w-[400px] max-w-full object-contain mb-2"
            />
          </div>
        )}

      </div>
    </div>
  );
}