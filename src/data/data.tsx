
export const personalData = {
  name: "Saqib Imran",
  role: "Web Developer",
  education: [
    "Matric of Science in Biology, Govt. Boys High School (2019-2021)",
    "Intermediate of Science in Biology , Govt. Islamia College (2021-2023)",
  ],
  contactLinks: [
    "https://github.com/",
    "https://twitter.com/home",
    "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
  ],
};

export const aboutMe = {
  title: "About Me",
  body: [
    "As a Full Stack Developer, I bring a passion for technology and a deep understanding of both front-end and back-end development to create dynamic and efficient web applications.I have honed my skills in various languages",
  ],
};

export const skills = {
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  hard: [
    { icon: "💻", text: "Python" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "🚀", text: "React" },
    { icon: "💾", text: "SQL" },
    { icon: "💾", text: "Tailwind" },
    { icon: "💾", text: "NextJs" },
    { icon: "📈", text: "Data Structures and Algorithms" },
  ],
};

export const professionalData = {
  title: "Professional Experience",
  experiences: [
    {
      role: "Graphic Designer, Nfts Maker (2022-Present)",
      description: "I made a personal NFTs above 10 millions .",
      current: true,
    },
  ],
};






// export const Skills = ({ data }) => {
//   const skill = skills;
//   const [activeTab, setActiveTab] = useState("soft");
// 
//   const setBg = (active) =>
//     active === "soft" ? "bg-yellow-300" : "bg-gray-300";
//   
//   const setTabsAlignment = (tab) =>
//     tab === "soft" ? "text-left" : "text-right";

//   const tabs = (
//     <div className="flex">
//       {["soft", "hard"].map((item) => (
//         <button
//           key={item}
//           className={`w-1/2 text-black uppercase text-xl font-display 
//           ease-in-out h-12  px-4 transition duration-200 hover:scale-105
//           ${setBg(item)} ${setTabsAlignment(item)}`}
//           onClick={()=> setActiveTab(item) }
//         >
//           {item} Skills
//         </button>
//       ))}
//     </div>
//   );
//   const content = (
//     <ul
//       className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
//         activeTab === "soft" ? "justify-start" : "justify-end"
//       }`}
//     >
//       {data[activeTab].map(({ icon, text }) => (
//         <li
//           key={text}
//           className="bg-green-200 text-lg py-2 px-4 w-fit rounded-md"
//         >
//           <span> {icon}</span> {text}
//         </li>
//       ))}
//     </ul>
//   );
//   return (
//     <div>
//       {tabs}
//       {content}
//     </div>
//   );
// };
