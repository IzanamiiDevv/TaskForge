import React from "react";
import './styles/container.css'


function Container(attribute){
    return(
        <div id="container">
            <button onClick={()=>{
                console.log(attribute.obj.id)
            }}>See ID</button>
            <label>{attribute.obj.content}</label>
            <button onClick={()=>{
                attribute.onDelete(attribute.obj.id)
            }}>Delete</button>
        </div>
    )
}

export default Container;