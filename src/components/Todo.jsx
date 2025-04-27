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
                <input value={input} className='border m-auto rounded-xl p-4' type='text'onChange={(e)=>setInput(e.target.value)} />

                <br />
                <br />

                <div className="w-lg gap-3 ">

                <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => dispatch(addTodo(input))}>Add</button>

                <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => dispatch(clearTodo())}>Clear</button>

                <br />
                <br />

                <div className="font-2xl">{ todo && todo.length}</div>

                {
                    todo?.map((ele) => (
                        <div key={ele.id} className='flex gap-2 justify-between my-2 w-lg shadow shadow-amber-400 rounded-lg p-3'>
                            <div>{ele.id}</div>
                            <div>{ele.title}</div>
                            <div>
                                <button onClick={() => dispatch(updateTodo(ele.id))}>{ele.status ? "✅" : "❌"}</button>
                            </div>
                            <div>  <button onClick={() => dispatch(removeTodo(ele.id))}>Remove</button></div>
                        </div>
                    ))
                }
                </div>
                
            </div>
        </>
    )

}
export default Todo