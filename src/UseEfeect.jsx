import { useEffect ,useState} from "react";
import axios from "axios";

function App(){
    const [todos , setTodos]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/todos")
        .then(function(response){
            setTodos(response.data.todos)
        })
    },[]);

    return (
        <>
        {todos.map(todo =><Todo title={todo.title} description={todo.description}></Todo>)}
        </>
    )
}

function Todo({title , description}){
    return <div>
        <h2>{title}</h2>
        {description}
    </div>
}

export default App