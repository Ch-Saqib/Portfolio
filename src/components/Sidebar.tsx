import { Envelope, Linkedin, Medium, Twitter } from "@/icons";

import { personalData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const personal = personalData;
  return (
    <div className="bg-black flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white  flex flex-col p-10 items-center">
        <Image
          src={"/image.jpg"}
          alt="image"
          width={300}
          height={200}
          priority
          className="rounded-full h-[250px] w-[250px] mb-6"
        />
        <div className="text-5xl p-6 font-extrabold text-yellow-400 ">
          {personal.name}
        </div>
        <div className="text-3xl font-bold p-4 ">{personal.role}</div>
        <div className="text-xm font-bold">{personal.education[0]}</div>
        <div className="text-xm font-bold">{personal.education[1]}</div>
        <div>
          <div className="text-2xl font-extrabold  mt-4 mb-4"> Contact Me</div>

          <div className="flex gap-10 justify-center text-2xl ">
           
            <Link href={personal.contactLinks[1]}>
              {" "}
              <Twitter />
            </Link>
            <Link href={personal.contactLinks[0]}>
              {" "}
              <Medium />
            </Link>
            <Link href={personal.contactLinks[2]}>
              {" "}
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
