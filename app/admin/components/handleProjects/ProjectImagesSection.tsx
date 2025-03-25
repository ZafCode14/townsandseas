import AddImage from "../handleImages/AddImage";
import Image from "next/image";
import DeleteImage from "../handleImages/DeleteImage";
import { Project } from "@/lib/types";
import { deleteHeroImageFromProject } from "@/actions/projectActions/firebaseDeleteActions";
import { addBrochureToProject, addHeroImageToProject, addMapToProject, addPlanToProject } from "@/actions/projectActions/firebaseAddActions";
import AddAndDeleteImage from "../handleImages/AddAndDeleteImage";

type Props = {
  project: Project;
};
export default function ProjectImagesSection({ project }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center uppercase">Add Image To Project</h3>
      <AddImage 
        id={project.id} 
        addImageToDatabase={addHeroImageToProject}
      />
      <div className={`w-full flex overflow-auto self-start`}>
        {
          project.heroImages.map((image, index) => {
            return (
              <div key={index}
                className={`mx-2 py-3 flex flex-col`}
              >
                <Image
                  src={image.fileUrl}
                  alt="hero image"
                  width={1100}
                  height={800}
                  className="flex-1 h-[130px] min-w-[200px] object-cover mb-2"
                />
                <DeleteImage 
                  uniqueKey={image.uniqueKey} 
                  id={project.id} 
                  deleteImageFromDatabase={deleteHeroImageFromProject}
                />
              </div>
            )
          })
        }
      </div>
      {/** Adding and Deleting the MAP */}
      <h3 className="text-center uppercase w-full mt-5">Change Project Map</h3>
      <AddAndDeleteImage
        uKey={project.map.uniqueKey}
        id={project.id}
        addImageToDatabase={addMapToProject}
      />
      { project.map.fileUrl &&
      <div className="flex flex-col w-full">
        <Image
          src={project.map.fileUrl}
          alt="map image"
          width={1100}
          height={800}
          className="flex-1 max-h-[200px] min-w-[200px] object-contain mb-2"
        />
      </div>
      }

      {/** Adding and Deleting the PLAN */}
      <h3 className="text-center uppercase mt-5">Change Project Plan</h3>
      <AddAndDeleteImage
        uKey={project.plan.uniqueKey}
        id={project.id}
        addImageToDatabase={addPlanToProject}
      />
      { project.plan.fileUrl &&
      <div className="flex flex-col w-full">
        <Image
          src={project.plan.fileUrl}
          alt="plan image"
          width={1100}
          height={800}
          className="flex-1 max-h-[200px] min-w-[200px] object-contain mb-2"
        />
      </div>
      }

      {/** Adding and Deleting the BROCHURE */}
      <h3 className="text-center uppercase mt-5">Change Project Brochure</h3>
      <AddAndDeleteImage
        uKey={project.brochure.uniqueKey}
        id={project.id}
        addImageToDatabase={addBrochureToProject}
        noSizeLimit={true}
        type={"pdf"}
      />
      { project.brochure.fileUrl &&
      <div className="flex flex-col w-full">
        <a href={project.brochure.fileUrl} 
          className="px-4 py-2 border border-black text-center mb-2"
          target="_blank" 
          rel="noopener noreferrer"
        >Brochure</a>
      </div>
      }
    </div>
  )
}