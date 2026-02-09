// import Chai from './chai.jsx'
// function Greeting(){
//   const name ="Pranjal";
//   return <h1>Hello {name}</h1>
// }
// function Greet(name){
//   return "Hello" +name;

// }

// import { useState } from 'react';

// function Count(){
//   const [count,setCount] = useState(0);

//   function increase(){
//     setCount(count+1);
//   }

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//     </>
//   )
// }

// function Card(){
//   return (
//     <h1 id=""> </h1>
//   )
// }

// function App() {
//   return (
//     <>
//     <Count/>
//     <Chai/>
//     <h1>pranjal is learning react</h1>
//     <Greeting/>
//     <h1>{Greet("Pranjal")}</h1>
//     </>
//   );

// }


// function App(){
//   return (
//     <div className="card">
//     <h1>Hello Pranjal</h1>
//     <p> City <span> Abu , Rajasthan</span></p>
//     <img src = "/MY photo on platforms.png" alt = "Profile Picture"/>
//     <p>Student at ABC COLLEGE</p>
//     </div>
    
//   )
// }
// export default App;

// function callName(name){
//     alert(name);
//   }
// function App() {
// function callName(name){
//     alert(name);
//   }
// return (
//     <div> 
// <button onClick={()=>callName("Sneha")}>Sneha</button>
//     </div>
//    )
// }
// export default App

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Rashmi" />
      <Greeting name="Sarah" />
    </div>
  );
}

export default App;
