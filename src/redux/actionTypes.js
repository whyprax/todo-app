// Define constants for action types used in the Redux store.

export const ADD_TODO = "ADD_TODO";
// Action type for adding a new to-do item. Dispatched when a new to-do is added.

export const TOGGLE_TODO = "TOGGLE_TODO";
// Action type for toggling the completion status of a to-do item. Dispatched when a to-do's completion status changes.

export const REMOVE_TODO = "REMOVE_TODO";
// Action type for removing a to-do item. Dispatched when a to-do is deleted from the list.

export const MARK_COMPLETED = "MARK_COMPLETED";
// Action type for marking a to-do item as completed. Dispatched when a to-do is explicitly marked as completed.

export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
// Action type for marking a to-do item as incomplete. Dispatched when a to-do is explicitly marked as incomplete.

export const FILTER_TODOS = "FILTER_TODOS";
// Action type for filtering the list of to-do items based on their completion status. Dispatched when the filter changes.

export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
// Action type for marking all to-do items as completed. Dispatched when the user chooses to complete all to-dos.

export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
// Action type for updating the search term for filtering to-dos. Dispatched when the user updates the search input.
