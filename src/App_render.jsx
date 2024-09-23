import React from "react";
import { useState } from "react";

function App(){
    const [title , setTitle]=useState("my name is sudeep");
    function updateTitle(){
        setTitle("the number generated is " + Math.random());
    }

    return (
        <div>   
            <button onClick={updateTitle}>update the title</button>
            <Header title={title}></Header>
            <Header title="kakshi"></Header>
            <Header title="aroko"></Header>                                           
        </div>
    )
}

const Header = React.memo(function Header({title}){
    return <div>
        {title}
    </div>
})

export default App


