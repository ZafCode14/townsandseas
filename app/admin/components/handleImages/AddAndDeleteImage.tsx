import { handleDelete, handleUpload } from "@/lib/r2storage";
import { useRef, useState } from "react";

type Props = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addImageToDatabase: any;
  noSizeLimit?: boolean;
  uKey: string;
  type?: string;
};
export default function AddAndDeleteImage({ id, addImageToDatabase, noSizeLimit, uKey }: Props) {
  const [image, setImage] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files ? e.target.files[0] : null;
    
    if (selectedImage) {
      // Check if the file size is less than 500 KB (500 * 1024 bytes)
      if (selectedImage.size > 2100 * 1024 && !noSizeLimit) {
        alert("File size must be less than 2100 KB");
        setImage(null); // Clear the image if it's too large
      } else {
        setImage(selectedImage);
      }
    }
  };

  const handleUploadImage = async () => {
    try {
      setIsUploading(true);

      // Handle image upload if an image is selected
      if (image) {
        // Upload the image and get the file URL and unique key
        if(uKey) {
          await handleDelete(uKey);
        }
        const { fileUrl, uniqueKey } = await handleUpload(image, setProgress);

        // Add the image to the project
        await addImageToDatabase({ id, fileUrl, uniqueKey });
      } else {
        alert("Please add an image");
      }
    } catch (error) {
      alert("Save failed");
      console.error("Save failed:", error);
    } finally {
      setIsUploading(false);
      setImage(null);

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className={`flex flex-col`}>
      <div className={`flex w-full`}>
        {/** Input Image */}
        <input
          id="heroImages"
          type="file"
          accept={noSizeLimit ? "application/pdf" : "image/*"}
          onChange={handleImageChange}
          className={`my-5 mt-2 w-[220px] text-[12px]`}
          ref={fileInputRef}
        />

        {/* Button to add the new element */}
        <button
          type="button"
          onClick={handleUploadImage}
          className={`
            relative flex-1
            max-w-[150px] h-[32px]
            ${isUploading ? "bg-[gray]" : "bg-green-600 hover:bg-green-700"} text-white rounded mb-5 w-[100px]
          `}
        >
          {!isUploading ? (
            "upload"
          ) : (
            <div
              className="rounded-md h-full bg-[#328bff] absolute left-0 top-0"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          )}
          {isUploading && (
            <p className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
              {progress}%
            </p>
          )}
        </button>
      </div>
    </div>
  );
}