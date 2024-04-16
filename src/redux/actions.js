// Importing constants for action types from a separate file (`actionTypes`).
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

// Action creator function for adding a new to-do.
// The action has a type of `ADD_TODO` and a payload containing the new to-do's text.
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Action creator function for toggling the completion status of a to-do by ID.
// The action has a type of `TOGGLE_TODO` and a payload containing the to-do's ID.
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Action creator function for removing a to-do by ID.
// The action has a type of `REMOVE_TODO` and a payload containing the to-do's ID.
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// Action creator function for marking a to-do as completed by ID.
// The action has a type of `MARK_COMPLETED` and a payload containing the to-do's ID.
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// Action creator function for marking a to-do as incomplete by ID.
// The action has a type of `MARK_INCOMPLETE` and a payload containing the to-do's ID.
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// Action creator function for filtering the list of to-dos by a specified filter.
// The action has a type of `FILTER_TODOS` and a payload containing the filter type.
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

// Action creator function for marking all to-dos as completed.
// The action has a type of `MARK_ALL_COMPLETED` and no payload.
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Action creator function for updating the search term.
// The action has a type of `UPDATE_SEARCH_TERM` and a payload containing the search term.
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
