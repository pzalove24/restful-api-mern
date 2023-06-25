import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoListView from "./components/TodoListView";

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [todo, setTodo] = useState("");
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      axios.get("http://localhost:6001/todo/gets").then((res) => {
        setTodoList(res.data);
      });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [todoList]);

  const addTodoHandler = () => {
    axios
      .post("http://localhost:6001/todo/post", {
        todo: todo,
        people: people,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div
      className="flex min-h-full flex-col justify-center items-center lg:px-8
      bg-white border-b border-b-[#e6ebf4]"
    >
      <header 
      className=" p-6 mt-5 max-w-sm mx-auto bg-[#dad6d6] rounded-xl shadow-lg flex items-center space-x-4">
        
        Task Todo
        
      </header>
      <p className="mt-5">MERN</p>
      <div>
        <h5>Add todo task</h5>
        <span className="space-x-4">
          <input
            className="bg-gray-50 border border-gray-400 text-center
            text-gray-950 text-sm rounded-lg focus:border-[#4649ff] focus:ring-[#4649ff]
            outline-none p-3"
            placeholder="Todo"
            onChange={(event) => setTodo(event.target.value)}
          />
          <input
            className="bg-gray-50 border border-gray-400 text-center
            text-gray-950 text-sm rounded-lg focus:border-[#4649ff] focus:ring-[#4649ff]
            outline-none p-3"
            placeholder="People"
            onChange={(event) => setPeople(event.target.value)}
          />
        </span>
      </div>
      <div className="flex min-h-full flex-col justify-center items-center">
        <button
          className="mt-3 border border-gray-900 rounded-lg p-1
          text-white bg-green-700 font-medium text-sm hover:bg-green-600 "
          onClick={addTodoHandler}
        >
          Add todo
        </button>
        <h5 className="text-lg mt-5 font-inter font-medium ">Your todo list</h5>
        <div>{loading ? "loading" : <TodoListView props={todoList} />}</div>
      </div>
      <h6 className="mt-10">Copyright 2023, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
