"use client";
import { Project, Unit } from '@/lib/types'
import AddProject from './AddProject'
import Projects from './Projects'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleAdmin } from '@/store/adminSlice';

type Props = {
  projects: Project[];
  units: Unit[];
}
export default function ProjectSection({ projects, units }: Props) {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.admin.value);
  return (
    <>
      <h1
        onClick={() =>
          dispatch(toggleAdmin(toggle === "updateProject" ? "" : "updateProject"))
        }
        className="text-[24px] cursor-pointer"
      >
        update projects
      </h1>

      <div className={`flex flex-col items-center w-full ${toggle === "updateProject" ? "h-auto" : "h-0"} overflow-hidden`}>
        <AddProject/>
        <Projects projects={projects} units={units}/>
      </div>
    </>
  )
}
