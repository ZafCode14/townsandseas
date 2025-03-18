import Image from "next/image";
import AddAndDeleteImage from "../handleImages/AddAndDeleteImage";

type CategoryProps = {
  title: string;
  hero: { uniqueKey: string; fileUrl: string };
  cover: { uniqueKey: string; fileUrl: string };
  heroAction: ({ id, fileUrl, uniqueKey }: { id: string; fileUrl: string; uniqueKey: string; }) => Promise<{ success: boolean; error?: undefined; } | { success: boolean; error: unknown; }>;
  coverAction: ({ id, fileUrl, uniqueKey }: { id: string; fileUrl: string; uniqueKey: string; }) => Promise<{ success: boolean; error?: undefined; } | { success: boolean; error: unknown; }>;
};


export default function ProjectCategory({ title, hero, cover, heroAction, coverAction }: CategoryProps){
  return (
    <div className="w-full">
      <h3 className="text-center uppercase mt-5">{title} Project</h3>
      <div className="flex flex-col md:flex-row w-full gap-3">
        <div>
          <h3 className="text-center uppercase mt-5">Hero</h3>
          <AddAndDeleteImage uKey={hero?.uniqueKey} id={"V6bbirYNTyfPoAOFQNbU"} addImageToDatabase={heroAction} />
          {hero?.fileUrl && (
            <div className="flex flex-col w-full items-center">
              <Image 
                src={hero?.fileUrl} 
                alt={`${title} project image`} 
                width={1100} 
                height={800} 
                className="w-[400px] max-w-full object-contain mb-2" 
              />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-center uppercase mt-5">Cover</h3>
          <AddAndDeleteImage uKey={cover?.uniqueKey} id={"V6bbirYNTyfPoAOFQNbU"} addImageToDatabase={coverAction} />
          {cover?.fileUrl && (
            <div className="flex flex-col w-full items-center">
              <Image 
                src={cover?.fileUrl} 
                alt={`${title} project cover image`} 
                width={1100} 
                height={800} 
                className="w-[400px] max-w-full object-contain mb-2" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}