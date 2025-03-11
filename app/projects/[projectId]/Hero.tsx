import { Project } from "@/lib/types";
import Slider from "./Slider";

type Props = {
  project: Project;
};

export default function Hero({ project }: Props) {
  const list = project.heroImages;
  return (
    <div className="w-full h-[300px] sm:h-[500px] md:h-[700px]">
      <Slider list={list}/>
    </div>
  );
}