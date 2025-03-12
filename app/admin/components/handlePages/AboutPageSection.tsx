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
        className={`flex flex-col w-full gap-2 ${
          toggle === "aboutPage" ? "h-auto" : "h-0"
        } overflow-hidden`}
      >
        {/* About Us */}
        <h3 className="text-center uppercase">About Us</h3>
        <label htmlFor="aboutUsTitle" className="lowercase">Title:</label>
        <input
          id="aboutUsTitle"
          type="text"
          value={formData.aboutUs.title}
          onChange={(e) => handleChange("aboutUs", "title", e.target.value)}
          className="bg-transparent border border-black p-1 w-full"
        />
        <label htmlFor="aboutUsText" className="lowercase">Text:</label>
        <textarea
          id="aboutUsText"
          value={formData.aboutUs.text}
          onChange={(e) => handleChange("aboutUs", "text", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        <label htmlFor="aboutUsStory" className="lowercase">Our Story:</label>
        <textarea
          id="aboutUsStory"
          value={formData.aboutUs.ourStory}
          onChange={(e) => handleChange("aboutUs", "ourStory", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />

        {/* Mission & Vision */}
        <h3 className="text-center uppercase">Mission & Vision</h3>
        <label htmlFor="missionText" className="lowercase">Mission:</label>
        <textarea
          id="missionText"
          value={formData.missionAndVision.mission}
          onChange={(e) =>
            handleChange("missionAndVision", "mission", e.target.value)
          }
          className="p-1 w-full bg-transparent border border-black"
        />
        <label htmlFor="visionText" className="lowercase">Vision:</label>
        <textarea
          id="visionText"
          value={formData.missionAndVision.vision}
          onChange={(e) =>
            handleChange("missionAndVision", "vision", e.target.value)
          }
          className="p-1 w-full bg-transparent border border-black"
        />

        {/* Core Values */}
        <h3 className="text-center uppercase">Core Values</h3>
        {Object.entries(formData.coreValues).map(([key, value], index) =>
          key !== "title" && typeof value === "object" ? (
            <div key={key}>
              <h3 className="uppercase">Value {index}</h3>
              <h4>{value.title}</h4>
              <label htmlFor={`coreValueTitle${index}`} className="lowercase">Title:</label>
              <input
                id={`coreValueTitle${index}`}
                type="text"
                value={value.title}
                onChange={(e) =>
                  handleChange("coreValues", `${key}.title`, e.target.value)
                }
                className="bg-transparent border border-black p-1 w-full"
              />
              <label htmlFor={`coreValueText${index}`} className="lowercase">Text:</label>
              <textarea
                id={`coreValueText${index}`}
                value={value.text}
                onChange={(e) =>
                  handleChange("coreValues", `${key}.text`, e.target.value)
                }
                className="p-1 w-full bg-transparent border border-black"
              />
            </div>
          ) : null
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded-md lowercase"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update About Page"}
        </button>
      </form>
    </div>
  );
}