import React, {useState}from 'react'
import {FaCheckCircle,FaTimesCircle,FaEdit} from 'react-icons/fa'

const ToDoItem = ({text,remove,updateTodo}) => {


    const [clicked,setClicked] = useState(false)
    const [input,setInput] = useState(text)


    return (
        <>
         <div className="todo-tile" id={text}>
             <div className="text-wrap">
                 {
                     clicked ? 
                     <input type='text' name={input} value={input} onKeyDown={(e) =>{
                        if(e.key === 'Enter') {
                            setClicked(false)
                            updateTodo(text,input)
                        }
                     }} onChange={
                         (e) => {
                            setInput(e.target.value)
                         }} /> :
                     <h3>
                        {input}
                    </h3>
                 }
                 <div className="todo-actions">
                     <FaCheckCircle color='green' size='28' onClick={() => {
                         document.getElementById(text).style.opacity = 0.2
                         
                     }} />
                     <FaEdit color='rgb(42, 161, 235)' size='28' onClick={() => {
                         setClicked(true)
                     }} />
                     <FaTimesCircle color='red' size='28' onClick={remove} />
                 </div>
             </div>
         </div>   
        </>
    )
}

export default ToDoItem
