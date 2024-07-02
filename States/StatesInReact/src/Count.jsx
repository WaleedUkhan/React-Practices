 import { useState } from "react";
 

 function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
  }

 function Counter(){

    let [count, setCount] = useState(0);

    function incCounter(){
       setCount(count+1);
        // console.log(count);
        
    }

   
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCounter}>Increase Count</button>
            <FavoriteColor />
        </div>
    )
}


export default Counter;