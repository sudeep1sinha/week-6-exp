import {  useState } from "react";

function App(){
    const[count , setCount]=useState(0);

    return <div>
        <button onClick={()=>{
            setCount(count+1) }}>click me {count}</button>
            <Dummy></Dummy>
            <h2>facts</h2>
    </div>
}

function Dummy(){
    return <div>
        type shi
    </div>
}

export default App