import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  // Accessing todos, filter, and dispatch from Redux
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // Local state for new todo text and search term
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Load data from local storage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const savedSearchTerm = localStorage.getItem("searchTerm");

    if (savedTodos) {
      // Dispatch action to set initial todos if there are any saved
      savedTodos.forEach((todo) => dispatch(addTodo(todo.text)));
    }

    if (savedSearchTerm) {
      // Dispatch action to set initial search term if there's any saved
      dispatch(updateSearchTerm(savedSearchTerm));
      setSearchTerm(savedSearchTerm);
    }
  }, [dispatch]);

  // Save to-dos and search term to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("searchTerm", searchTerm);
  }, [todos, searchTerm]);

  // Function to handle adding a new todo
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  // Function to handle changes in the search term
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  console.log("Filtered Todos:", newTodoText);

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>

      {/* Input for adding a new todo */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      {/* Filter buttons and search input */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* Display list of todos */}
      <TodoList />
    </div>
  );
};

export default Todo;
