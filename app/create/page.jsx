"use client";
import useTask from "@/store/useTask";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

useRouter;
const Create = () => {
  const [task, setTask] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const { addTask } = useTask((state) => state);

  const [taskVal, setTaskVal] = useState(false);
  const [taskValDesc, setTaskValDesc] = useState(false);

  const router = useRouter();

  const Reset = () => {
    setTask("");
    setTaskDesc("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!task) {
      setTaskVal(true);
    }
    if (!taskDesc) {
      setTaskValDesc(true);
    }
    if (task && taskDesc) {
      setTaskVal(false);
      setTaskValDesc(false);
      const taskData = {
        title: task,
        desc: taskDesc,
        status: false,
        id: uuidv4(),
      };
      addTask(taskData);
      Reset();
      router.push("/");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    Reset();
    router.push("/");
  };

  return (
    <div className="my-5">
      <h4 className="text-xl font-bold">Create Task</h4>
      <p className="text-gray-400">
        Create task and track your progress and increase your productivity
      </p>
      <form className="my-7 p-5 glass flex gap-4 flex-col">
        <div>
          <label htmlFor="task" className="text-sm">
            Your Task
          </label>{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="w-full mt-1  py-1 px-2 rounded outline-none text-sm"
          />
          {taskVal && (
            <span className=" text-red-500 text-xs">Task cannot be empty</span>
          )}
        </div>
        <div>
          <label htmlFor="desc" className="text-sm">
            Task Description
          </label>{" "}
          <br />
          <textarea
            name="desc"
            cols="30"
            onChange={(e) => setTaskDesc(e.target.value)}
            value={taskDesc}
            rows="5"
            className="w-full mt-1  py-1 px-2 rounded outline-none text-sm"
          />
          {taskValDesc && (
            <span className=" text-red-500 text-xs">
              Task Description cannot be empty
            </span>
          )}
        </div>
        <div className="flex gap-4 justify-end items-center">
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-500 active:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="text-sm transition-all duration-300 font-medium py-2 px-5 rounded text-white bg-black hover:bg-gray-800 active:bg-gray-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
