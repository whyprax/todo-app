import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

// Importing necessary functions from React Redux (`useSelector` for accessing state).
// Importing the `TodoItem` component to render each individual to-do item.

const TodoList = () => {
  // The `TodoList` component renders the list of filtered to-dos based on the current state.

  // Accessing the filtered list of to-dos using `useSelector` and a custom filter function.
  // The function returns a filtered list of to-dos based on the current filter and search term.
  const filteredTodos = useSelector((state) => {
    // Extract todos, filter, and search term from the state.
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search.

    // Filter the list of to-dos based on the filter and search term.
    return todos.filter((todo) => {
      // Determine if the to-do matches the current filter (ALL, COMPLETED, or INCOMPLETE).
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      // Determine if the to-do matches the current search term.
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      // Return true if the to-do matches both the filter and search term.
      return matchesFilter && matchesSearch;
    });
  });

  return (
    // Render the list of filtered to-dos as an unordered list (`ul`).
    <ul>
      {/* Display a placeholder text at the beginning of the list */}
      <li className="my-2 text-sm italic">All Your Notes Here...</li>

      {/* Map over the filtered list of to-dos and render each as a `TodoItem` component */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
// Exporting the `TodoList` component as the default export.
