import axios from "axios";
import React from "react";

const Todo = (props) => {
  const deleteTodoHandler = (id) => {
    axios
      .delete(`http://localhost:6001/todo/delete/${id}`)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <p className="flex flex-col items-center space-x-4 justify-between text-justify mt-6">
          {props.props.todo} : {props.props.people}
        <button
          className="
          bg-red-700 border border-red-900 p-1 w-full 
          rounded-md text-white hover:bg-red-500"
          onClick={() => deleteTodoHandler(props.props._id)}
        >
          x
        </button>
      </p>
    </div>
  );
};

export default Todo;
