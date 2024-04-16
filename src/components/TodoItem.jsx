import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
// Importing required action creators from Redux (`toggleTodo`, `removeTodo`, `markCompleted`, `markIncomplete`).
// Importing icons for buttons from the `react-icons` library.

const TodoItem = ({ todo, index }) => {
  // The `TodoItem` component represents a single to-do item.

  // Get the Redux dispatch function to dispatch actions.
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      {/* List item representing a to-do */}

      {/* Displaying the to-do's index and text */}
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        {/* Apply line-through styling if the to-do is completed */}
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Buttons to perform actions on the to-do */}
      <div className="space-x-3 ml-8">
        {/* Button to toggle the completion status of the to-do */}
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>

        {/* Button to remove the to-do */}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>

        {/* If the to-do is incomplete, show a button to mark it as completed */}
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}

        {/* If the to-do is completed, show a button to mark it as incomplete */}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
// Exporting the `TodoItem` component as the default export.
