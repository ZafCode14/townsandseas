"use client";

import { updateMainPage } from "@/actions/pageActions/firebaseEditActions";
import { MainPage } from "@/lib/types";
import { toggleAdmin } from "@/store/adminSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddImage from "../handleImages/AddImage";
import Image from "next/image";
import DeleteImage from "../handleImages/DeleteImage";
import { addHeroImageToMainPage } from "@/actions/pageActions/firebaseAddActions";
import { deleteHeroImageFromMainPage } from "@/actions/pageActions/firebaseDeleteActions";

type Props = {
  mainPage: MainPage;
};

type SectionKeys = keyof Pick<
  MainPage,
  "ourProjects" | "ourStory" | "discoverMore" | "learnMore" | "contact"
>;

type ContactKeys = keyof MainPage["contact"] | "slogan";

export default function MainPageSection({ mainPage }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);

  const sections: { key: SectionKeys; label: string; hasSlogan?: boolean }[] = [
    { key: "ourProjects", label: "Our Projects" },
    { key: "ourStory", label: "Our Story" },
    { key: "discoverMore", label: "Discover More" },
    { key: "learnMore", label: "Learn More" },
    { key: "contact", label: "Contact", hasSlogan: true },
  ];

  const [formData, setFormData] = useState<MainPage>({
    receiverEmail: mainPage.receiverEmail,
    ourProjects: { ...mainPage.ourProjects },
    ourStory: { ...mainPage.ourStory },
    discoverMore: { ...mainPage.discoverMore },
    learnMore: { ...mainPage.learnMore },
    contact: { ...mainPage.contact },
    heroImages: mainPage.heroImages || [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = <T extends SectionKeys>(
    section: T,
    field: T extends "contact" ? ContactKeys : keyof MainPage[T],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await updateMainPage({ data: formData });
    if (response.success) {
      alert("Main Page Updated Successfully");
    } else {
      console.error("Error updating main page:", response.error);
    }

    setLoading(false);
  };

  return (
    <div className="w-[800px] max-w-full">
      <h1
        onClick={() => dispatch(toggleAdmin(toggle === "mainPage" ? "" : "mainPage"))}
        className="text-[24px] text-center cursor-pointer lowercase"
      >
        Update Main Page
      </h1>

      <form onSubmit={handleSubmit} className={`flex flex-col w-full gap-2 ${toggle === "mainPage" ? "h-auto" : "h-0"} overflow-hidden`}>
        <h3 className="text-center uppercase">Add Hero To Project Page</h3>
        <AddImage id="gIv6uKZrrw1nNrNlDWMw" addImageToDatabase={addHeroImageToMainPage} />

        <div className="w-full flex overflow-auto self-start">
          {formData.heroImages.map((image, index) => (
            <div key={index} className="mx-2 py-3 flex flex-col">
              <Image
                src={image.fileUrl}
                alt="hero image"
                width={1100}
                height={800}
                className="flex-1 h-[130px] min-w-[200px] object-cover mb-2"
              />
              <DeleteImage uniqueKey={image.uniqueKey} id="gIv6uKZrrw1nNrNlDWMw" deleteImageFromDatabase={deleteHeroImageFromMainPage} />
            </div>
          ))}
        </div>

        <label htmlFor="receiverEmail" className="lowercase">Receiver Email</label>
        <input
          id="receiverEmail"
          type="text"
          value={formData.receiverEmail}
          onChange={(e) => setFormData({ ...formData, receiverEmail: e.target.value })}
          className="bg-transparent border border-black p-1 w-full"
          autoComplete="off"
        />

        {sections.map(({ key, label, hasSlogan }) => {
          const sectionData = formData[key];
          if (Array.isArray(sectionData)) return null;

          return (
            <div key={key} className="flex flex-col gap-2">
              <h3 className="text-center uppercase">{label}</h3>
              <label htmlFor={`${key}Title`} className="lowercase">Title:</label>
              <input
                id={`${key}Title`}
                type="text"
                value={sectionData.title}
                onChange={(e) => handleChange(key, "title", e.target.value)}
                className="bg-transparent border border-black p-1 w-full"
                autoComplete="off"
              />
              <label htmlFor={`${key}Text`} className="lowercase">Text:</label>
              <textarea
                id={`${key}Text`}
                value={sectionData.text}
                onChange={(e) => handleChange(key, "text", e.target.value)}
                className="p-1 w-full bg-transparent border border-black"
              />
              {hasSlogan && (
                <>
                  <label htmlFor="contactSlogan" className="lowercase">Slogan:</label>
                  <input
                    id="contactSlogan"
                    type="text"
                    value={formData.contact.slogan}
                    onChange={(e) => handleChange("contact", "slogan", e.target.value)}
                    className="bg-transparent border border-black p-1 w-full"
                    autoComplete="off"
                  />
                </>
              )}
            </div>
          );
        })}

        <button type="submit" className="bg-blue-600 text-white p-2 mt-4 rounded-md lowercase" disabled={loading}>
          {loading ? "Updating..." : "Update Main Page"}
        </button>
      </form>
    </div>
  );
}