import AddImage from "../handleImages/AddImage";
import Image from "next/image";
import DeleteImage from "../handleImages/DeleteImage";
import { Unit } from "@/lib/types";
import { addImageToUnit, addImageToUnitPlan } from "@/actions/unitActions/firebaseAddActions";
import { deletePlanImageFromList, deleteUnitImageFromList } from "@/actions/unitActions/firebaseDeleteAction";

type Props = {
  unit: Unit;
};
export default function UnitImagesSection({ unit }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center mt-5 uppercase">Add Image To Unit</h3>
      <AddImage 
        id={unit.id} 
        addImageToDatabase={addImageToUnit}
      />
      <div className={`flex overflow-auto self-start w-full`}>
        {
          unit.unitImages.map((image, index) => {
            return (
              <div key={index}
                className={`mx-2 py-3 flex flex-col`}
              >
                <Image
                  src={image.fileUrl}
                  alt="hero image"
                  width={1100}
                  height={800}
                  className="flex-1 h-[130px] min-w-[200px] object-contain mb-2"
                />
                <DeleteImage 
                  uniqueKey={image.uniqueKey} 
                  id={unit.id} 
                  deleteImageFromDatabase={deleteUnitImageFromList}
                />
              </div>
            )
          })
        }
      </div>

      <h3 className="text-center uppercase">Add Image To Plans</h3>
      <AddImage 
        id={unit.id} 
        addImageToDatabase={addImageToUnitPlan}
      />
      <div className={`flex overflow-auto w-full`}>
        {
          unit.unitPlans.map((image, index) => {
            return (
              <div key={index}
                className={`mx-2 py-3 flex flex-col`}
              >
                <Image
                  src={image.fileUrl}
                  alt="hero image"
                  width={1100}
                  height={800}
                  className="flex-1 h-[130px] min-w-[200px] object-contain mb-2"
                />
                <DeleteImage 
                  uniqueKey={image.uniqueKey} 
                  id={unit.id} 
                  deleteImageFromDatabase={deletePlanImageFromList}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
