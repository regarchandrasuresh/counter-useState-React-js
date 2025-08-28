import React from "react";
import React,{useState} from "react";

function Counter(){
  let [count, setCount] = useState(33);
  function Do(){
    count+=1;
    setCount(count);
  }
  return (
    <div>
      <h1>Counter={count}</h1>
      <button onClick={Do}>click me</button>
      </div>
  )
}
export default Counter;
