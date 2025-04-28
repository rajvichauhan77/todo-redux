import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearTodo, removeTodo, updateTodo } from "../Todoredux/action";

const Todo = () => {

    const [input , setInput] = useState("")

    const dispatch = useDispatch()
        
    let todo = useSelector((state) => state)

    console.log(todo)


    return(
        <>
            <div className="mt-15  m-auto border p-5">
                <input value={input} className='border m-auto rounded-xl p-4' placeholder="Enter task" type='text'onChange={(e)=>setInput(e.target.value)} />

                <br />
                <br />

                <div className="w-lg gap-3 ">

                <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => dispatch(addTodo(input))}>Add</button>

                <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => dispatch(clearTodo())}>Clear</button>

                <br />
                <br />

                <div className="font-2xl">{ todo && todo.length}</div>

                {
                    todo?.map((ele) => (
                        <div key={ele.id} className='flex gap-2 justify-between my-2 w-lg shadow shadow-pink-200 rounded-lg p-3'>
                            <div>{ele.id}</div>
                            <div>{ele.title}</div>
                            <div>
                                <button onClick={() => dispatch(updateTodo(ele.id))}>{ele.status ? "✅" : "❌"}</button>
                            </div>
                            <div>  <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-auto me-2 mb-2" onClick={() => dispatch(removeTodo(ele.id))}>Remove</button></div>
                        </div>
                    ))
                }
                </div>
                
            </div>
        </>
    )

}
export default Todo