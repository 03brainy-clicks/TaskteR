const { create } = require("zustand");

const useFilter = create((set) => ({
  filter: "All",
  setActiveFilter: (filter) => {
    set((state) => ({ filter: filter }));
  },
}));

export default useFilter;
