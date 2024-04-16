import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Importing the necessary modules. `ReactDOM` is used for rendering the React app into the DOM, `App` is the root React component of the application, and `Provider` is a component from `react-redux` that connects the Redux store with the application. `store` is the Redux store that manages the state of the application.

ReactDOM.createRoot(document.getElementById("root")).render(
  // The root of the React application is created using `ReactDOM.createRoot`.

  // Wrapping the App component inside the `Provider` component from `react-redux` allows the Redux store to be accessible throughout the entire application. This is how React components in the app can connect to the store to read and update the application's state.

  // The `store` prop provided to the `Provider` component is the Redux store that holds the state of the application.

  <Provider store={store}>
    <App />
  </Provider>
);
