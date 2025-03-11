"use client";
import { updateAboutPage } from "@/actions/pageActions/firebaseEditActions";
import { AboutPage } from "@/lib/types";
import { toggleAdmin } from "@/store/adminSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  aboutPage: AboutPage;
};

export default function AboutPageSection({ aboutPage }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);

  const [formData, setFormData] = useState<AboutPage>({
    aboutUs: { ...aboutPage?.aboutUs },
    missionAndVision: { ...aboutPage?.missionAndVision },
    goalsAndObjectives: { ...aboutPage?.goalsAndObjectives },
    partnersAndTeam: { ...aboutPage?.partnersAndTeam },
    coreValues: { ...aboutPage?.coreValues },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    section: keyof AboutPage,
    field: string,
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

    const response = await updateAboutPage({ data: formData });

    if (response.success) {
      alert("About Page Updated Successfully");
    } else {
      console.error("Error updating about page:", response.error);
    }

    setLoading(false);
  };

  return (
    <div className="w-[800px] max-w-full">
      <h1
        onClick={() =>
          dispatch(toggleAdmin(toggle === "aboutPage" ? "" : "aboutPage"))
        }
        className="text-[24px] text-center cursor-pointer"
      >
        update about page
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col w-full gap-2 ${toggle === "aboutPage" ? "h-auto" : "h-0"} overflow-hidden`}
      >
        {/* About Us */}
        <h3 className="text-center uppercase">About Us</h3>
        <label>title:</label>
        <input
          type="text"
          value={formData.aboutUs.title}
          onChange={(e) => handleChange("aboutUs", "title", e.target.value)}
          className="bg-transparent border border-black p-1 w-full"
        />
        <label>text:</label>
        <textarea
          value={formData.aboutUs.text}
          onChange={(e) => handleChange("aboutUs", "text", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        <label>our story:</label>
        <textarea
          value={formData.aboutUs.ourStory}
          onChange={(e) => handleChange("aboutUs", "ourStory", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />

        {/* Mission & Vision */}
        <h3 className="text-center uppercase">mission & vision</h3>
        <label>mission:</label>
        <textarea
          value={formData.missionAndVision.mission}
          onChange={(e) => handleChange("missionAndVision", "mission", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        <label>vision:</label>
        <textarea
          value={formData.missionAndVision.vision}
          onChange={(e) => handleChange("missionAndVision", "vision", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />

        {/* Core Values */}
        <h3 className="text-center uppercase">Core Values</h3>
        {Object.entries(formData.coreValues).map(([key, value], index) => (
          key !== "title" &&
          typeof value === "object" && (
            <div key={key}>
              <h3 className="uppercase">value {index}</h3>
              <h4>{value.title}</h4>
              <label>title:</label>
              <input
                type="text"
                value={value.title}
                onChange={(e) => handleChange("coreValues", `${key}.title`, e.target.value)}
                className="bg-transparent border border-black p-1 w-full"
              />
              <label>text:</label>
              <textarea
                value={value.text}
                onChange={(e) => handleChange("coreValues", `${key}.text`, e.target.value)}
                className="p-1 w-full bg-transparent border border-black"
              />
            </div>
          )
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded-md"
          disabled={loading}
        >
          {loading ? "updating..." : "update about page"}
        </button>
      </form>
    </div>
  );
}