import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Todo1 = () => {
    const [todo,setTodo]=useState([])
    const{
        register,
        handleSubmit,
        reset
    }=useForm()

    function getTodo(data){
        data.id=nanoid()
        data.isCompleted=false;
        console.log(data)
        setTodo([...todo,data])

        reset()
    }
    console.log(todo)
  return (
    <div>
      <form action="" onSubmit={handleSubmit(getTodo)}>
        <input type="text" placeholder='Enter The Todo' {...register("title")} />
        <input type="submit" />
      </form>
      <ul>
        {
            todo.map((el)=>(
                <>
                    <li>{el.title}</li>
                    <button>Delete Todo</button>
                </>
            ))
        }
      </ul>
    </div>
  )
}

export default Todo1
