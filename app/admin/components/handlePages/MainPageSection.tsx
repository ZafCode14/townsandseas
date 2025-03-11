"use client";
import { updateMainPage } from "@/actions/pageActions/firebaseEditActions";
import { MainPage } from "@/lib/types";
import { toggleAdmin } from "@/store/adminSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  mainPage: MainPage;
}
export default function MainPageSection({ mainPage }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);

  const sections = [
    { key: "ourProjects", label: "Our Projects" },
    { key: "ourStory", label: "Our Story" },
    { key: "discoverMore", label: "Discover More" },
    { key: "learnMore", label: "Learn More" },
    { key: "contact", label: "Contact", hasSlogan: true },
  ];

  const [formData, setFormData] = useState<MainPage>({
    ourProjects: { ...mainPage?.ourProjects },
    ourStory: { ...mainPage?.ourStory },
    discoverMore: { ...mainPage?.discoverMore },
    learnMore: { ...mainPage?.learnMore },
    contact: { ...mainPage?.contact },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    section: keyof MainPage,
    field: keyof MainPage[typeof section] | "slogan",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
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
        onClick={() =>
          dispatch(toggleAdmin(toggle === "mainPage" ? "" : "mainPage"))
        }
        className="text-[24px] text-center cursor-pointer"
      >
        update main page
      </h1>
      <form onSubmit={handleSubmit} className={`flex flex-col w-full gap-2 ${toggle === "mainPage" ? "h-auto" : "h-0"} overflow-hidden`}>
        {sections.map(({ key, label, hasSlogan }) => (
          <div key={key} className="flex flex-col gap-2">
            <h3 className="text-center uppercase">{label}</h3>
            <label htmlFor={`${key}Title`}>title:</label>
            <input
              id={`${key}Title`}
              type="text"
              name="title"
              value={formData[key as keyof MainPage].title}
              onChange={(e) => handleChange(key as keyof MainPage, "title", e.target.value)}
              className="bg-transparent border border-black p-1 w-full"
              autoComplete="off"
            />
            <label htmlFor={`${key}Text`}>text:</label>
            <textarea
              id={`${key}Text`}
              name="text"
              value={formData[key as keyof MainPage].text}
              onChange={(e) => handleChange(key as keyof MainPage, "text", e.target.value)}
              className="p-1 w-full bg-transparent border border-black"
            />
            {hasSlogan && (
              <>
                <label htmlFor="contactSlogan">slogan:</label>
                <input
                  id="contactSlogan"
                  type="text"
                  name="slogan"
                  value={formData.contact.slogan}
                  onChange={(e) => handleChange("contact", "slogan", e.target.value)}
                  className="bg-transparent border border-black p-1 w-full"
                  autoComplete="off"
                />
              </>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded-md"
          disabled={loading}
        >
          {loading ? "updating..." : "update main page"}
        </button>
      </form>
    </div>
  )
}