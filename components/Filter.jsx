"use client";
import useFilter from "@/store/useFilter";
import React from "react";

const Filter = () => {
  const { filter, setActiveFilter } = useFilter((state) => state);
  const filterType = [
    {
      type: "All",
      id: 1,
    },
    {
      type: "Open",
      id: 1,
    },
    {
      type: "Closed",
      id: 2,
    },
  ];
  return (
    <ul className="flex gap-7 text-gray-500 p-5 my-5 justify-center glass mx-auto rounded ">
      {filterType.map((item) => {
        return (
          <li
            key={item.id}
            className={`cursor-pointer ${
              filter === item.type ? "text-black font-medium" : ""
            }`}
            onClick={() => setActiveFilter(item.type)}
          >
            {item.type}
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
