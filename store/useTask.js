const { create } = require("zustand");

const useTask = create((set) => ({
  tasks: [],
  addTask: (taskDetails) => {
    set((state) => ({ tasks: [taskDetails, ...state.tasks] }));
  },
  updateTaskStatus: (taskID) => {
    set((state) => ({
      tasks: state.tasks?.map((task) => {
        if (taskID === task.id) {
          return {
            ...task,
            status: !task.status,
          };
        }
        return task;
      }),
    }));
  },
  deleteTask: (taskID) => {
    set((state) => ({
      tasks: state.tasks?.filter((task) => task.id !== taskID),
    }));
  },
}));

export default useTask;
