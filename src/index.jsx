import React from "react";
import { useState } from "react";



function App(){
    const [ agreement, setAgree] = useState(false);
    return agreement ? <Main /> : <Entry isAgree={setAgree} />;
}

export default App;

//Pages:

function Entry({ isAgree }){
    return (
        <div>
            <h1>Welcome to my Todo App</h1>
            <button id="Entry-Button" onClick={()=>{
                isAgree(true)
            }}>Enter</button>
        </div>
    )
}

function Main(){
    return (
        <div>
            <h1>Welcome to Main Page</h1>
        </div>
    )
}