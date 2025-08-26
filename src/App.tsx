import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First Application</h1>
      <div className="card">
        {"Profile"}
           <Button title='SignOut' onClick={()=>alert("Sign Out")}/>
      </div>

      <div className="card">
        {"Home"}
           <Button title='SignIn' objArr={[{id:"",title:'g'}]}/>
      </div>
     
    </>
  )
}

export default App
