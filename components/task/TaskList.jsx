"use client";
import useTask from "@/store/useTask";
import React from "react";
import TaskCard from "./TaskCard";
import { FilterData } from "@/utils/filterFunction";
import useFilter from "@/store/useFilter";

const TaskList = () => {
  const { tasks, updateTaskStatus, deleteTask } = useTask((state) => state);
  const { filter } = useFilter((state) => state);
  const filterData = FilterData(tasks, filter);
  return (
    <div className="my-11 flex gap-3 flex-col">
      {filterData.map((task) => {
        return (
          <TaskCard
            task={task}
            key={task.id}
            handleStatus={updateTaskStatus}
            handleDelete={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
