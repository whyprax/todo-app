import "./App.css";
import Todo from "./components/Todo";

// Importing the CSS file for styling the application and the `Todo` component from the components folder.

function App() {
  // The `App` function is the root component of the application. It returns the JSX structure representing the application's UI.

  return (
    <>
      {/* The `Todo` component is rendered inside the App component. The `Todo` component contains the functionality for adding, displaying, and deleting tasks (as specified in the task prompt). */}

      <Todo />
    </>
  );
}

export default App;
// The `App` component is exported as the default export of the module so that it can be imported and used as the main component in other files, such as `index.js`.
