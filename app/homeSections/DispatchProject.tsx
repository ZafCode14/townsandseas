"use client";
import { useDispatch } from "react-redux";
import { Project } from "@/lib/types";
import { useEffect } from "react";
import { setProjects } from "@/store/projectSlice";

type Props = {
  projects: Project[];
};

export default function DispatchProject({ projects }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [dispatch, projects]);

  return null; // No UI needed since it only dispatches projects
}