import React,{ useState, useEffect } from 'react'
import Create from './Create'
import './App.css';
import axios from 'axios'
function Home(){
    const [todos, setTodos ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    
    const handleEdit = () => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
    return(
        <div className="main-container"> 
            <h2> Todo List </h2>
            <Create />
            {
                todos.length === 0
                ?
                <div> <h2> No Record </h2> </div>
                :
                todos.map(todo => (
                    <div className='task'>
                        <div className='checkbox' onClick= {()=> handleEdit(todo._id)}>   
                            {todo.done}
                        <p className={todo.done ? "line_through" : ""}> {todo.task} </p>
                        </div>
                        </div>
                ))
            }
        </div>
    )
}

export default Home