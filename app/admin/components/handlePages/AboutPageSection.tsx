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
    ourEthos: { ...aboutPage?.ourEthos },
    goalsAndObjectives: { ...aboutPage?.goalsAndObjectives },
    peopleBehindTheCraft: { ...aboutPage?.peopleBehindTheCraft },
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
        
        {/* Our Ethos */}
        <h3 className="text-center uppercase">Our Ethos</h3>
        <label htmlFor="ethosTitle" className="lowercase">Title:</label>
        <input
          id="ethosTitle"
          type="text"
          value={formData.ourEthos.title}
          onChange={(e) => handleChange("ourEthos", "title", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        
        {/* Additional Ethos Fields */}
        <label htmlFor="ethos1Title" className="lowercase">Etho 1 Title:</label>
        <input
          id="ethos1Title"
          type="text"
          value={formData.ourEthos.etho1Title}
          onChange={(e) => handleChange("ourEthos", "etho1Title", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        
        <label htmlFor="ethos1Text" className="lowercase">Etho 1 Text:</label>
        <textarea
          id="ethos1Text"
          value={formData.ourEthos.etho1Text}
          onChange={(e) => handleChange("ourEthos", "etho1Text", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        
        {/* Goals & Objectives */}
        <h3 className="text-center uppercase">Goals and Objectives</h3>
        <label htmlFor="ourGoals" className="lowercase">Our Goals:</label>
        <textarea
          id="ourGoals"
          value={formData.goalsAndObjectives.ourGoals}
          onChange={(e) => handleChange("goalsAndObjectives", "ourGoals", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        
        <label htmlFor="objective" className="lowercase">Objective:</label>
        <textarea
          id="objective"
          value={formData.goalsAndObjectives.objective}
          onChange={(e) => handleChange("goalsAndObjectives", "objective", e.target.value)}
          className="p-1 w-full bg-transparent border border-black"
        />
        
        {/* Submit Button */}
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