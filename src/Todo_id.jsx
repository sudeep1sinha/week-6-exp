import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App(){
    const [selectid , setSelectid]=useState(1);
    return <div>
        <button onClick={function(){
            setSelectid(1);
        }}>1</button>

        <button onClick={function(){
            setSelectid(2);
        }}>2</button>

        <button onClick={function(){
            setSelectid(3);
        }}>3</button>
        
        <Todo id={selectid} />
    </div>
}

function Todo({id}){
    const [todo , setTodo]=useState({});

    useEffect(()=>{
        setTimeout(() => {
       // axios.get("http://localhost:8080/todo?id="+id)
        axios.get(`http://localhost:8080/todo?id=${id}`)
        .then(response=>{
            setTodo(response.data.todo)
        })
    },3000)
    }, [id])
   
    return <div>
        
        <h2>
            {todo.title}
        </h2>

        <h2>
            {todo.description}
        </h2>
    </div>
}


export default App;