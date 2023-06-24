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
    <div className="App">
      <h1>Task Todo</h1>
      <h6>MERN</h6>
      <div>
        <h5>Add todo task</h5>
        <span>
          <input
            placeholder="Todo"
            onChange={(event) => setTodo(event.target.value)}
          />
          <input
            placeholder="People"
            onChange={(event) => setPeople(event.target.value)}
          />
          <button onClick={addTodoHandler}>Add todo</button>
        </span>
        <h5>Your todo list</h5>
        <div>
          {loading ? 'loading' : (
            <TodoListView props={todoList} />
          )}
        </div>
      </div>
      <h6>Copyright 2023, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
