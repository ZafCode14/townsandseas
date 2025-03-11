"use client";
import { updateUnit } from "@/actions/unitActions/firebaseEditAction";
import { Unit } from "@/lib/types";
import { useState } from "react";

type Props = {
  unit: Unit;
};

export default function UnitForm({ unit }: Props) {
  const inputFields = [
    { name: "name", type: "text", label: "name" },
    { name: "type", type: "text", label: "type" },
    { name: "feature", type: "text", label: "feature" },
    { name: "viewer", type: "text", label: "viewer link" },
    { name: "description", type: "textarea", label: "description" },
  ];

  const [formData, setFormData] = useState<Partial<Unit>>({
    name: unit.name,
    type: unit.type,
    feature: unit.feature,
    viewer: unit.viewer,
    description: unit.description,
    attributes: unit.attributes || [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttributeChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newAttributes = [...(prev.attributes || [])];
      newAttributes[index] = value;
      return { ...prev, attributes: newAttributes };
    });
  };

  const handleAddAttribute = () => {
    setFormData((prev) => ({
      ...prev,
      attributes: [...(prev.attributes || []), ""],
    }));
  };

  const handleDeleteAttribute = (index: number) => {
    setFormData((prev) => {
      const newAttributes = prev.attributes?.filter((_, i) => i !== index);
      return { ...prev, attributes: newAttributes || [] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await updateUnit({ id: unit.id, data: formData });

    if (response.success) {
      alert("Unit Updated Successfully");
    } else {
      console.error("Error updating unit:", response.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
      {inputFields.map(({ name, type, label }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name}>{label}:</label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={(formData[name as keyof Unit] as string) || ""}
              onChange={handleChange}
              className="p-1 w-full bg-transparent border border-black"
            />
          ) : (
            <input
              id={name}
              type={type}
              name={name}
              value={(formData[name as keyof Unit] as string) || ""}
              onChange={handleChange}
              className="bg-transparent border border-black p-1 w-full"
              autoComplete="none"
            />
          )}
        </div>
      ))}

      <h3 className="text-center uppercase">Attributes</h3>

      <button
        type="button"
        onClick={handleAddAttribute}
        className="bg-green-600 text-white p-2 rounded-md"
      >
        add attribute
      </button>

      {formData.attributes?.map((attr, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            id={`attribute-${index}`}
            placeholder={`Attribute ${index + 1}`}
            type="text"
            value={attr}
            onChange={(e) => handleAttributeChange(index, e.target.value)}
            className="bg-transparent border border-black p-1 w-full"
          />
          <button
            type="button"
            onClick={() => handleDeleteAttribute(index)}
            className="text-red-600"
          >
            delete
          </button>
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 mt-4 rounded-md"
        disabled={loading}
      >
        {loading ? "updating..." : "update unit"}
      </button>
    </form>
  );
}