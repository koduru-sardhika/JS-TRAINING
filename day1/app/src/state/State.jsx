//-------------------------------------------------------------------------------------------------
// import React, { useState } from 'react'

// const State = () => {
//     let [state, setState]= useState("click me")
//     console.log(state);
//     console.log(setState);

//     let demo=()=>{
//         setState("sardhika")
//     }
    
    
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={demo}>click</button>
//     </div>
//   )
// }

// export default State
//------------------------------------------------------------------------------------------------ 

// import React, {useState} from 'react'

// const State =() =>{
//   let [name , setName] = useState()
//   let [password , setPassword] = useState()

//   let demo = (e)=>{
//     e.preventDefault()
//     console.log({name , password});

//     name === 'admin' && password === '12345' ?
//     window.open("http://www.pixabay.com"):window.location.reload()
// }
//   return (
//     <div>
//       <form action="">
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" id="name" value={name}
//         onChange={(e) => {setName(e.target.value)}}/>

//         <br/>

//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" id="password" value={password}
//         onChange={(e)=>{setPassword(e.target.value)} }/>
//         <br/>
//         <button onClick={demo}>submit</button>
//          </form>
//     </div>
//   )
// }

// export default State;
// ---------------------------------------------------------------------------------
// import React, {useState} from 'react'
import video1 from "./video.mp4"

const State = () => {
  let [state , setState] = useState(true)

  let demo=()=>{
    let demo1 = document.getElementById("demo")
    console.log(demo);
    setState(!state)
    state === true ? demo1.play() : demo1.pause()
  }
  return (

    <div>
      <video src={video1} height="300px" id="demo" onClick={demo} ></video>
    </div>
  )
}

export default State;




