// Importing the necessary function from the Redux library.
import { createStore } from "redux";

// Importing the reducer function (`todoReducer`) that will manage the state of the application.
import todoReducer from "./reducer";

// Create a Redux store using the `createStore` function and the `todoReducer`.
// The `createStore` function initializes the store with the given reducer and optional middleware.
const store = createStore(todoReducer);

// Exporting the Redux store as the default export.
export default store;
