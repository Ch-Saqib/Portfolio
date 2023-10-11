import { aboutMe, skills } from "@/data/data";
import { Skills } from "./Skill";

export const About = () => {
  const about = aboutMe;
  return (
    <div>
      <div className="text-3xl font-bold mb-4 uppercase">{about.title}</div>
      <div className="text-lg mb-4">{about.body}</div>
      <Skills data={skills}/>
    </div>
  );
};
