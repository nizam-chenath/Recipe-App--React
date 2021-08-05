import React, { useState } from "react";

function App (){
   //let delclare a state
   const [count, setCount] = useState(0);

   function incrementHandler () {
     return(
         setCount(56)
     )
   }
   
   function decrementHandler () {
     return console.log("yes");
   }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;