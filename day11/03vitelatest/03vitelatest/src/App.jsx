import { useState , useRef } from "react";

// function Counter(){
//   const [count,setCount] = useState(0);
//   const renderCount=useRef(0);
//   renderCount.current+=1;
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <h2>Render Count: {renderCount.current}</h2>
//       <button onClick={() =>count<10 && setCount(count+1)}>Increment</button>
      
//       <button onClick= {() =>count >0 && setCount(count-1)}>Decrement</button>
//     </div>
//   )  
// }
import Parent from "./Components/Parent";
function App(){
  const user= {name:"Pranjal",city:"Bareilly"};

  return (
    <div>
      <h1>App component </h1>
      < Parent user={user} />
    </div> 
  )
}
export default App;
