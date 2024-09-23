import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
      <div>
        <HeaderWithButton></HeaderWithButton> 
        <Header title="khati"></Header>
       </div>
  )
  function HeaderWithButton(){
    const [title, setTitle] = useState("sudeep")
  function updateTitle(){
    setTitle("my name is " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>update the title</button>
    <Header title={title}></Header>
  
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}
}


export default App
