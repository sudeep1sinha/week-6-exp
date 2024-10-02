import { useState, useRef, useEffect } from "react";

function App(){
    const [incomeTax , setIncomeTax]=useState(2000);
    const divRef=useRef();

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divRef.current);
            divRef.current.innerHTML=10
        },3000);
    }, [])

    return (
        <div>
            hey blud , your income tax returns are <div ref={divRef}>{incomeTax}</div>
        </div>
    )
}

export default App