export const FilterData = (array, filter) => {
  if (filter === "All") return array;
  if (filter === "Open") return array.filter((task) => task.status === false);
  if (filter === "Closed") return array.filter((task) => task.status === true);
};
