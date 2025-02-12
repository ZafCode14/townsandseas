"use client";
import { toggleAbout } from "@/store/aboutSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function AboutNav() {
  const dispatch = useDispatch()
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <div className="uppercase text-[14px] md:text-[20px] lg:text-[24px] relative lg:top-[40px] pl-5 md:pl-0">
      <p className={`mb-2 hover:underline cursor-pointer ${active === "about" && "underline"}`} onClick={() => dispatch(toggleAbout("about"))}>about us</p>
      <p className={`mb-2 hover:underline cursor-pointer ${active === "mission" && "underline"}`} onClick={() => dispatch(toggleAbout("mission"))}>OUR ETHOS</p>
      <p className={`mb-2 hover:underline cursor-pointer ${active === "goals" && "underline"}`} onClick={() => dispatch(toggleAbout("goals"))}>GOALS & OBJECTIVE</p>
      <p className={`mb-2 hover:underline cursor-pointer ${active === "team" && "underline"}`} onClick={() => dispatch(toggleAbout("team"))}>PEOPLE BEHIND THE CRAFT</p>
      {/**
      <p className={`hover:underline cursor-pointer ${active === "values" && "underline"}`} onClick={() => dispatch(toggleAbout("values"))}>core values</p>
       */}
    </div>
  );
}