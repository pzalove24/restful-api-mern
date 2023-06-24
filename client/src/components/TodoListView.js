import React from 'react'
import TodoItem from './Todo'

const TodoListView = (props) => {
  return (
    <div>
        <ul>
            {props.props.map((item, index) => {
                return (
                    <li key={index}>
                        <TodoItem props={item} />
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoListView