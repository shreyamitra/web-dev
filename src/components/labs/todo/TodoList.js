import React from "react";
import TodoItem from "./TodoItem.js";
import todos from "./todos.js";


const TodoList = () => {
    return(
        <ul>
             {
        todos.map(todo => {
            return(<TodoItem todo={todo}/>);
        })
    }
        </ul>
    );
}
export default TodoList;


