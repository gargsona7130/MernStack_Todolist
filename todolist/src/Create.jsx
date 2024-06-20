import React from 'react'

function Create(){
    return(
        <div> 
            <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}> Add </button>
        </div>
    )
}

export default Create