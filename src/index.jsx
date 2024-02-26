import React from "react";
import { useState } from "react";



function App(){
    return (
        <div>
            <form action="./php/message.php" method="post">
                <input type="text" name="username"/>
                <input type="submit" value="Click"/>
            </form>
        </div>
    )
}

export default App;