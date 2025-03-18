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
  const [isCustomType, setIsCustomType] = useState(false);

  // Get unique unit types from existing units
  const unitTypes = Array.from(new Set(units.map((unit) => unit.type).filter(Boolean)));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "custom") {
      setIsCustomType(true);
      setFormData({ ...formData, type: "" }); // Reset type field
    } else {
      setIsCustomType(false);
      setFormData({ ...formData, type: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isDuplicate = units
      .filter((unit) => unit.projectId === projectId)
      .some((unit) => unit.type === formData.type && unit.feature === formData.feature);

    if (isDuplicate) {
      setLoading(false);
      alert("A unit with the same type and feature already exists.");
      return;
    }

    const response = await addUnit({ data: formData as Unit });

    if (response.success) {
      alert("Unit added successfully");
      setFormData({ name: "", type: "", feature: "", projectId });
      setIsCustomType(false);
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
        autoComplete="off"
        required
      />

      {/* Dropdown for Unit Type */}
      <select
        name="type"
        value={isCustomType ? "custom" : formData.type}
        onChange={handleTypeChange}
        className="my-1 p-2 border border-gray-300 rounded w-full"
        required
      >
        <option value="" disabled>Select a Unit Type</option>
        {unitTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
        <option value="custom">Add New Type</option>
      </select>

      {/* Input for custom unit type (appears conditionally) */}
      {isCustomType && (
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Enter new type"
          className="my-1 p-2 border border-gray-300 rounded w-full"
          autoComplete="off"
          required
        />
      )}

      <input
        name="feature"
        value={formData.feature}
        onChange={handleChange}
        placeholder="Unit Feature"
        className="my-1 p-2 border border-gray-300 rounded w-full"
        autoComplete="off"
        required
      />

      <button
        type="submit"
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-gray-400 lowercase"
        disabled={loading}
      >
        {loading ? "adding..." : "add"}
      </button>
    </form>
  );
}