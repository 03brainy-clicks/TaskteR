import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TaskCard = ({ task, handleDelete, handleStatus }) => {
  return (
    <div className="glass px-5 py-3 flex items-center justify-center">
      <div className="w-full">
        <h4 className={`font-medium ${task.status && "line-through"}`}>
          {task.title}
        </h4>
        <p className="text-sm text-gray-500">{task.desc}</p>
      </div>
      <div className="flex gap-3 items-center">
        <span
          onClick={() => handleStatus(task.id)}
          className={`h-5 w-5  ${
            task.status ? "" : "border border-gray-200 hover:border-gray-400"
          } overflow-hidden cursor-pointer rounded-full flex transition-all duration-300`}
        >
          {task.status ? (
            <FontAwesomeIcon icon={faCheckCircle} className="w-full h-full" />
          ) : (
            <></>
          )}
        </span>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDelete(task.id)}
          className="text-gray-200 cursor-pointer hover:text-red-500 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default TaskCard;
