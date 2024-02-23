import './App.css';
import React,{useState} from 'react';
function App() {
  const [count,setCount]=useState(0);
  const increment =()=>{
    setCount((val)=>val+1)
  }
  const decrement=()=>{
    setCount((val)=>val-1)
  }
  return (
    <div>
      <h1>
        Counter App
      </h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>  
    );
}

export default App;
