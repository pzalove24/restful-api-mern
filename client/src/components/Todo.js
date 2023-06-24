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
      <p>
        <span>{props.props.todo} : </span> {props.props.people}
        <button onClick={() => deleteTodoHandler(props.props._id)}>x</button>
      </p>
    </div>
  );
};

export default Todo;
