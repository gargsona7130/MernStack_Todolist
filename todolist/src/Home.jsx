import React from 'react'

function Home(){
    const [todos, setTodos ] = useState([])
    return(
        <div> 
            <h2> Todo List </h2>
            <Create />
            {
                 todos.map(todo => (
                    <div>
                        {todo}
                        </div>
                ))
            }
        </div>
    )
}

export default Home