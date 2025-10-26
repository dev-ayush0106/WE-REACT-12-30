import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import "./todo.css"
import { toast } from 'react-toastify';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");

    function handleSumbit(e) {
        e.preventDefault();

        let copyTodo = [...todo]

        let newTodo = {
            id: nanoid(),
            title,
            isCompleted: false
        }

        copyTodo.push(newTodo)
        setTodo(copyTodo)
        setTitle("")

        toast.success("Todo Created")
    }

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function toggleTask(id) {
        setTodo((prev)=>(
            prev.map((el)=>el.id===id ? {...el, isCompleted:!el.isCompleted}:el)
        ))
    }

    function deleteTodo(id){
        let filteredTodo=todo.filter((el)=>id!==el.id)
        setTodo(filteredTodo)
        toast.error("Todo Deleted")
    }

console.log(todo)
return (
    <div>
        <h1>Todo List</h1>
        <form action="" onSubmit={handleSumbit}>
            <input value={title} onChange={handleChange} type="text" placeholder='Enter The todo' />
            <input type="submit" />
        </form>
        <ul>
            {
                todo.map((el) => (
                    <>
                        <li onClick={() => { toggleTask(el.id) }} className={el.isCompleted?"line":""}>{el.title}</li>
                        <button onClick={()=>{deleteTodo(el.id)}}>Delete Todo</button>
                    </>
                ))
            }
        </ul>
    </div>
)
}

export default Todo
