import { useState } from "react";
import { useEffect } from "react";

function App(){
    const [todos , setTodos]=useState([])

    useEffect(()=> {
        setInterval(()=>{
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async function(res){
                const json= await res.json();
                setTodos(json.todos);
            })
        },10000)
    }, [])
    return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} ></Todo> )}
    </div>
    
}

function Todo({title , description}){
    return <div>
        <h3>
            {title}
        </h3>
        <h2>
            {description}
        </h2>
    </div>
}

export default App