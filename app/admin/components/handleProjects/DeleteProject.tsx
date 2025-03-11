"use client";
import { Project, Unit } from "@/lib/types";
import { useState } from "react";
import { handleDelete as deleteFile } from "@/lib/r2storage";
import { deleteProject } from "@/actions/projectActions/firebaseDeleteActions";
import { deleteUnit } from "@/actions/unitActions/firebaseDeleteAction";

type Props = {
  project: Project;
  units: Unit[];
};
export default function DeleteProject({ project, units }: Props) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const unitsOfProject = units.filter((unit) => unit.projectId === project.id)

  const handleDelete = async () => {
    try {
      setLoading(true);
      setIsOpen(false);

      const id = project.id;

      await Promise.all(unitsOfProject.map(async (unit) => {
        // Delete unitImages
        await Promise.all(unit.unitImages.map((unitImage) => deleteFile(unitImage.uniqueKey)));

        // Delete unitPlans
        await Promise.all(unit.unitPlans.map((unitPlan) => deleteFile(unitPlan.uniqueKey)));

        // Now delete the unit itself
        await deleteUnit({ id: unit.id });
      }));


      // Delete hero images in parallel
      if (project.heroImages.length > 0) {
        await Promise.all(
          project.heroImages.map(({ uniqueKey }) => 
            deleteFile(uniqueKey)
          )
        );
      }

      // Delete other attributes if they exist
      if (project.plan?.uniqueKey) {
        await deleteFile(project.plan.uniqueKey);
      }
      if (project.map?.uniqueKey) {
        await deleteFile(project.map.uniqueKey);
      }
      if (project.brochure?.uniqueKey) {
        await deleteFile(project.brochure.uniqueKey);
      }

      // Delete the project
      const response = await deleteProject({ id });

      if (!response.success) {
        console.error("Error deleting project:", response.error);
      } else {
        alert("Project deleted successfully");
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