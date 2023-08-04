import Filter from "@/components/Filter";
import Tasklist from "@/components/task/TaskList";
import GetDate from "@/utils/getdate";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="py-5 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Today&#39;s Task</h3>
          <p className="text-gray-500 ">{GetDate()}</p>
        </div>

        <Link href={"/create"}>
          <button className="text-sm transition-all duration-300 font-medium py-2 px-5 rounded text-white bg-black hover:bg-gray-800 active:bg-gray-700">
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> New Task
          </button>
        </Link>
      </div>
      <Filter />
      <Tasklist />
    </>
  );
};

export default Home;
