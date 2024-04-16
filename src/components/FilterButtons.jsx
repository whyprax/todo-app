import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

// Importing React and necessary hooks from Redux: `useDispatch` to dispatch actions and `useSelector` to access state.
// Importing the action creators (`filterTodos` and `markAllCompleted`) from the Redux actions file.

const FilterButtons = () => {
  // The `FilterButtons` component allows the user to filter the to-dos and mark all to-dos as completed.

  // Get the Redux dispatch function to dispatch actions.
  const dispatch = useDispatch();

  // Get the current filter state from Redux using `useSelector`.
  const currentFilter = useSelector((state) => state.filter);

  // Function to handle the filter selection and dispatch the action to filter todos.
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      {/* Dropdown for selecting filter option */}
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        {/* Options for the filter: "ALL" (default), "COMPLETED", and "INCOMPLETE" */}
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Button to mark all to-dos as completed */}
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
// Exporting the `FilterButtons` component as the default export.
