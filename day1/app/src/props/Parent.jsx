import React from "react";
import Child from "./child";

class Parent extends React.Component{
    state = {
        username : "kumar"
    }
    render()
    {
        return(
            < Child name = {this.state.username} />
            
        )
    }

}
export default Parent;