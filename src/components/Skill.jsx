"use client";
import React from "react";
import { useState } from "react";
export const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active) =>
    active === "soft" ? "bg-yellow-300" : "bg-gray-300";

  const setTabsAlignment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((item) => (
        <button
        key={item}
          className={`text-black w-1/2 bg-gray-500 duration-200 ease-in-out uppercase text-lg py-2 px-4 rounded hover:text-black hover:bg-yellow-300 hover:scale-105 transition font-display  ${setTabsAlignment(
            item
          )} ${setBg(item)} `}
          onClick={() => setActiveTab(item)}
        >
          {item} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text, i }) => (
        <li
          key={i}
          className="bg-green-200 text-lg py-2 px-4 w-fit rounded-md"
        >
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs} {content}
    </div>
  );
};
