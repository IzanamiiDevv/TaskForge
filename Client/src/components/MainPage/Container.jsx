import React from "react";
import './styles/container.css'


function Container(attribute){
    return(
        <div id="container">
            <input type="checkbox" />
            <label>{attribute.obj.content}</label>
            <button onClick={()=>{
                attribute.onDelete(attribute.obj.id)
            }}>Delete</button>
        </div>
    )
}

export default Container;