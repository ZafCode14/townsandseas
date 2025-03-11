"use client";
import { useState } from "react";
import { addProject } from "@/actions/projectActions/firebaseAddActions";
import { Project } from "@/lib/types";

const categories = ["Residential", "Admin", "Commercial", "Coastal"];

export default function AddProject() {
  const [formData, setFormData] = useState<Partial<Project>>({
    name: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await addProject({ data: formData as Project });

    if (response.success) {
      alert('Project created successfully');
      setFormData({ name: "", category: "" });
    } else {
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[300px] items-center mb-5">
      <h1 className="mb-4 text-[20px]">add a new project</h1>
      
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="my-1 p-2 border border-gray-300 rounded w-full"
        autoComplete="none"
        required
      />
      
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="my-1 p-2 border border-gray-300 rounded w-full"
        required
      >
        <option value="" disabled>Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "adding..." : "add"}
      </button>
    </form>
  );
}