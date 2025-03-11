import { Project, Unit } from "@/lib/types";
import AddUnit from "./AddUnit";
import Units from "./Units";

type Props = {
  project: Project;
  units: Unit[];
};
export default function UnitSection({ project, units }:Props) {
  return (
    <div>
      <AddUnit projectId={project.id} units={units}/>
      <Units units={units} projectId={project.id}/>
    </div>
  )
}
