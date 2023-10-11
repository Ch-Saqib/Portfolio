import { About } from "@/components/about-me";
import ProfessionalExperience from "@/components/professional";
import { professionalData, skills } from "@/data/data";
export default function Home() {
  return <div>
    <About  data={skills}/>
   <ProfessionalExperience data={professionalData} />
  </div>
}
