import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

// Importing constants for action types from the actionTypes file.

const initialState = { todos: [], filter: "ALL", searchTerm: "" };
// Initial state of the application, containing an empty list of to-dos, default filter set to 'ALL', and an empty search term.

const todoReducer = (state = initialState, action) => {
  // The `todoReducer` function takes the current state and an action, and returns the new state based on the action type.
  switch (action.type) {
    // Handling the action type for adding a new to-do.
    case ADD_TODO:
      return {
        // Add a new to-do to the list with the provided text and set its completed status to false.
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for toggling the completion status of a to-do.
    case TOGGLE_TODO:
      return {
        // Toggle the completed status of the to-do at the specified index.
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for removing a to-do.
    case REMOVE_TODO:
      return {
        // Remove the to-do at the specified index from the list.
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for marking a to-do as completed.
    case MARK_COMPLETED:
      return {
        // Set the completed status of the to-do at the specified index to true.
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for marking a to-do as incomplete.
    case MARK_INCOMPLETE:
      return {
        // Set the completed status of the to-do at the specified index to false.
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for changing the filter.
    case FILTER_TODOS:
      return {
        // Update the filter based on the action payload.
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    // Handling the action type for updating the search term.
    case UPDATE_SEARCH_TERM:
      return {
        // Update the search term based on the action payload.
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    // Handling the action type for marking all to-dos as completed.
    case MARK_ALL_COMPLETED:
      return {
        // Set all to-dos as completed.
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Return the current state if the action type doesn't match any cases.
    default:
      return state;
  }
};

export default todoReducer;
// Exporting the `todoReducer` function as the default export.
