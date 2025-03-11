import { updateProject } from "@/actions/projectActions/firebaseEditActions";
import { Project } from "@/lib/types";
import { useState } from "react";

type Props = {
  project: Project;
};

export default function ProjectForm({ project }: Props) {
  const inputFields = [
    { name: "name", type: "text", label: "name" },
    { name: "location", type: "text", label: "location" },
    { name: "description", type: "textarea", label: "description" },
  ];

  const [formData, setFormData] = useState<Partial<Project>>({
    name: project.name,
    category: project.category,
    location: project.location,
    description: project.description,
    spaces: {
      from: project.spaces.from,
      to: project.spaces.to,
    },
    farFrom: {
      location1: { 
        name: project.farFrom.location1?.name, 
        distance: project.farFrom.location1?.distance 
      },
      location2: { 
        name: project.farFrom.location2?.name, 
        distance: project.farFrom.location2?.distance 
      },
      location3: { 
        name: project.farFrom.location3?.name, 
        distance: project.farFrom.location3?.distance 
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const categories = ["Residential", "Admin", "Commercial", "Coastal"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpacesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      spaces: { ...prev.spaces!, [name]: value },
    }));
  };

  const handleLocationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const locationKeys = ["location1", "location2", "location3"] as const;
    const locationKey = locationKeys[index];

    setFormData((prev) => ({
      ...prev,
      farFrom: {
        ...(prev.farFrom ?? { 
          location1: { name: "", distance: "" }, 
          location2: { name: "", distance: "" }, 
          location3: { name: "", distance: "" } 
        }),
        [locationKey]: {
          ...(prev.farFrom?.[locationKey] ?? { name: "", distance: "" }),
          [name]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await updateProject({ id: project.id, data: formData });

    if (response.success) {
      alert("Project Updated Successfully");
    } else {
      console.error("Error updating project:", response.error);
    }

    setLoading(false);
  };

  const locationFields = ["location1", "location2", "location3"];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
      <label htmlFor="projectCategory">category:</label>
      <select 
        id="projectCategory"
        name="category" 
        value={formData.category} 
        onChange={handleChange} 
        className="p-1 w-full bg-transparent border border-black"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {inputFields.map(({ name, type, label }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name}>{label}:</label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={(formData[name as keyof Project] as string) || ""}
              onChange={handleChange}
              className="p-1 w-full bg-transparent border border-black"
            />
          ) : (
            <input
              id={name}
              type={type}
              name={name}
              value={(formData[name as keyof Project] as string) || ""}
              onChange={handleChange}
              className="bg-transparent border border-black p-1 w-full"
              autoComplete="none"
            />
          )}
        </div>
      ))}

      <h3 className="text-center">SPACES</h3>
      <div className="flex gap-2">
        <div className="flex flex-col flex-1">
          <label htmlFor="spaceFrom">from:</label>
          <input
            id="spaceFrom"
            type="number"
            name="from"
            value={formData.spaces?.from || ""}
            onChange={handleSpacesChange}
            className="bg-transparent border border-black p-1 w-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="spaceTo">to:</label>
          <input
            id="spaceTo"
            type="number"
            name="to"
            value={formData.spaces?.to || ""}
            onChange={handleSpacesChange}
            className="bg-transparent border border-black p-1 w-full"
          />
        </div>
      </div>

      <h3 className="text-center">FAR FROM</h3>
      {locationFields.map((location, index) => (
        <div key={location}>
          <h5>Location {index + 1}</h5>
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label htmlFor={`${location}Name`}>name:</label>
              <input
                id={`${location}Name`}
                type="text"
                name="name"
                value={formData.farFrom?.[location as keyof typeof formData.farFrom]?.name || ""}
                onChange={(e) => handleLocationChange(index, e)}
                className="bg-transparent border border-black p-1 w-full"
                autoComplete="none"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor={`${location}Distance`}>distance:</label>
              <input
                id={`${location}Distance`}
                type="text"
                name="distance"
                value={formData.farFrom?.[location as keyof typeof formData.farFrom]?.distance || ""}
                onChange={(e) => handleLocationChange(index, e)}
                className="bg-transparent border border-black p-1 w-full"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 mt-4 rounded-md"
        disabled={loading}
      >
        {loading ? "updating..." : "update project"}
      </button>
    </form>
  );
}