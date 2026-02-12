//import { useState , useRef } from "react";

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
// import Parent from "./Components/Parent";
// function App(){
//   const user= {name:"Pranjal",city:"Bareilly"};

//   return (
//     <div>
//       <h1>App component </h1>
//       < Parent user={user} />
//     </div> 
//   )
// }

// import { useState } from "react";
// function useInput(){
//   const [count,setCount] = useState(0);
//   const input = {}
// }

// function App(){
//   const name="Pranjal";
//   const Email="agarwalpranjal2006@gmail.com";

//   return (
//     <div>
      
//     </div>
//   )
// }
// export default App;





import React, { useState } from "react";
import useInput from "./Components/useInput"

function App() {
  // const [name, setName]=useState('');
  // const [password, setPassword]=useState('')
  // const [email, setEmail]=useState('')
  // <>
  // <form action="" method="get">
  //   <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' />
  //       <br /> <br />
  //       <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password' />
  //       <br /> <br />
  //       <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email' />
  //       <br /> <br />
  //       <button>Submit</button>
  //       <button onClick={()=>{setEmail('');setName('');setPassword('')}}>Clear</button>
  //       <h3>{name}</h3>
  //       <h3>{password}</h3>
  //       <h3>{email}</h3>
  // </form>
  // </>
  // const name = useInput("");
  // const email = useInput("");

  // function handleReset() {
  //   name.reset();
  //   email.reset();
  // }

  // return (
  //   <div >
  //     <h2>Custom Hook - useInput</h2>

  //     <div>
  //       <label>Name: </label>
  //       <input
  //         type="text"
  //         value={name.value}
  //         onChange={name.handleChange}
  //       />
  //     </div>

  //     <br />

  //     <div>
  //       <label>Email: </label>
  //       <input
  //         type="email"
  //         value={email.value}
  //         onChange={email.handleChange}
  //       />
  //     </div>

  //     <br />

  //     <button onClick={handleReset}>Reset</button>

  //     <hr />

  //     <h3>Entered Values:</h3>
  //     <p>Name: {name.value}</p>
  //     <p>Email: {email.value}</p>
  //   </div>
  // );

  const [name, setName]=useState('');
  const [password, setPassword]=useState('')
  const [email, setEmail]=useState('')
  <>
  <form action="" method="get">
          <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' />
          <br /> <br />
          <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password' />
          <br /> <br />
          <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email' />
          <br /> <br />
          <button>Submit</button>
          <button onClick={()=>{setEmail('');setName('');setPassword('')}}>Clear</button>
          <h3>{name}</h3>
          <h3>{password}</h3>
          <h3>{email}</h3>
  </form>
  </>
}

export default App;

