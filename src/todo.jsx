import { useState } from "react";

let counter=4;
function App(){
    const [todos , setTodos]=useState([{
        id:1,
        title:"eat food",
        description:"eat pasta"
    },{
        id:2,
        title:"go to class",
        description:"maths class to attend"
    },{
        id:3,
        title:"go to gym",
        description:"cardio workout"
    }
])
function addTodo(){
    setTodos([...todos,{
        id:counter++,
        title:Math.random(),
        description:Math.random()
    }
    ])
}
return (
    <div>
        <button onClick={addTodo}>add a todo</button>
        {todos.map(todo=><Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
)

}

function Todo({id ,title , description}){
    return <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App