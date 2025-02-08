// import React from 'react'
import List from './list'
const comp3 = () => {
    let demo = [
    {   name : "sanjay",
        id:1
    },
    {
        name : "siddhu",
        id:2
    },
    {
        name : "rosi",
        id:3
    }
]

  return (
    <div>
      <List main = {demo} />
    </div>
  )
}

export default comp3
