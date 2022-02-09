import { useState } from "react";
import React from "react";
let BetterTodo = () => {
    let [todos, setTodos] = useState([{ item: "Cooking", status: "Incomplete" }, { item: "DoCoding", status: "Complete" }])

    let addTodo = (event) => {
        event.preventDefault();
        let todoObject = {
            item: event.target.item.value,
            status: event.target.status.value
        };
        let newTodos = [...todos, todoObject];
        setTodos(newTodos);
    }
    let deleteTodo = (indexToDelete) => {
        let newTodos = todos.filter(function (val, index) {
            if (indexToDelete == index) {
                return false;
            } else { return true }
        });
        setTodos(newTodos);
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="item" />
                <select name="status" >
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete" >Complete</option>
                </select>
                <button>Add</button>
            </form>
            {todos.map((val, index) => {
                return (
                    <div className="divTodo">
                        Status : {val.status} <br />
                        Todo : {val.item}
                        <br />
                        <button
                            onClick={() => {
                                deleteTodo(index)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default BetterTodo;