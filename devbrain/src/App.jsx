import React, { useState } from 'react'

const App = () => {
  const a = 20
  const [user, setUser] = useState("honours")
    const [num, setnum] = useState(0)
  const changeName = () => {
    setUser("aryan") // update the state
    console.log("changed the name")
  }

  return (
    <div>
      <h1>value of a is {a}</h1>
      <h2>hello {user} age {num}</h2>
      <button onClick={changeName} >change the name </button>
      <button onClick={()=> {setnum(num+10)}}>incriment </button>
    </div>
  )
}

export default App
