"use client";
import { Unit } from "@/lib/types";
import { useState } from "react";
import { deleteUnit } from "@/actions/unitActions/firebaseDeleteAction";
import { handleDelete as deleteFile } from "@/lib/r2storage";

type Props = {
  unit: Unit;
};
export default function DeleteUnit({ unit }: Props) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      setIsOpen(false);

      const id = unit.id;

      // Delete unit images in parallel
      if (unit.unitImages.length > 0) {
        await Promise.all(
          unit.unitImages.map(({ uniqueKey }) => 
            deleteFile(uniqueKey)
          )
        );
      }

      // Delete plan images in parallel
      if (unit.unitPlans.length > 0) {
        await Promise.all(
          unit.unitPlans.map(({ uniqueKey }) => 
            deleteFile(uniqueKey)
          )
        );
      }

      // Delete the unit
      const response = await deleteUnit({ id });

      if (!response.success) {
        console.error("Error deleting unit:", response.error);
      } else {
        alert("Unit deleted successfully");
      }
    } catch (error) {
      console.error("Error in handleDelete:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        className="text-[#af1717] hover:underline mx-3"
        onClick={() => setIsOpen(true)}
        disabled={loading}
      >
        {loading ? "deleting..." : "delete"}
      </button>

      {/* Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Are you sure?</p>
            <p className="text-sm text-gray-600">This action cannot be undone.</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}