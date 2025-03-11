"use client";
import { addUnit } from "@/actions/unitActions/firebaseAddActions";
import { Unit } from "@/lib/types";
import { useState } from "react";

type Props = {
  projectId: string;
  units: Unit[];
};

export default function AddUnit({ projectId, units }: Props) {
  const [formData, setFormData] = useState<Partial<Unit>>({
    name: "",
    type: "",
    feature: "",
    projectId,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Check if a unit with the same type and feature already exists
    const isDuplicate = units.filter((unit) => unit.projectId === projectId).some(
      (unit) => unit.type === formData.type && unit.feature === formData.feature
    );

    if (isDuplicate) {
      setLoading(false);
      alert("A unit with the same type and feature already exists.");
      return;
    }

    const response = await addUnit({ data: formData as Unit });

    if (response.success) {
      alert("Unit added successfully");
      setFormData({ name: "", type: "", feature: "", projectId });
    } else {
      alert("An error occurred while adding the unit.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full px-2 items-center">
      <h3 className="uppercase">Add a New Unit</h3>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Unit Name"
        className="my-1 p-2 border border-gray-300 rounded w-full"
        autoComplete="none"
        required
      />
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Unit Type"
        className="my-1 p-2 border border-gray-300 rounded w-full"
        autoComplete="none"
        required
      />
      <input
        name="feature"
        value={formData.feature}
        onChange={handleChange}
        placeholder="Unit Feature"
        className="my-1 p-2 border border-gray-300 rounded w-full"
        autoComplete="none"
        required
      />

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