import React,{useState} from 'react'
import ToDoItem from '../components/ToDoItem'
import {Redirect} from 'react-router-dom'
import '../css/todo.css'
import { FaSignOutAlt } from 'react-icons/fa'

const ToDoList = () => {


    const [item,setItem] = useState('')
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todoList')) ?? [])

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const removeToDo = (name) => {
        setTodos(todos.filter(todo => todo !== name))
        localStorage.setItem('todoList',JSON.stringify(todos.filter(todo => todo !== name)))
    }

    const updateTodo = (name,newValue) => {
        var index = todos.indexOf(name)
        const temp = [...todos]
        if(index !== -1) {
            temp[index] = newValue
            setTodos([...temp])
            localStorage.setItem('todoList',JSON.stringify(temp))
        }
    }

    return (
        <div>
            <div className="todo-container">
                <div className="logout" onClick={() => {
                    window.location.href = '/'
                }}>
                    <>Log Out</>
                    <FaSignOutAlt size='30' />
                </div>
                <div className="todo-wrap">
                    <h1>Todoey</h1>
                    <div className="search-bar">
                        <input onChange={handleChange} type="text" className="search" />
                        <button onClick={(e) => {
                            if(item !== '') {
                                setTodos([...todos,item])
                                localStorage.setItem('todoList',JSON.stringify([...todos,item]))
                            }   
                            }} className="add-btn">
                            ADD
                        </button>
                    </div>
                    <div className="todo-list">
                        {
                            todos.reverse().map((todo) => {
                                return <ToDoItem key={todo} text={todo} remove={() => removeToDo(todo)} updateTodo={updateTodo}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList
