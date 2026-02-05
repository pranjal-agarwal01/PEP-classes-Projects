// import './App.css'

// function Header() {
//  return <h2> This is outside function</h2>
// }

// function App() {
//   return (
//     <div>
//       <Header/>
//       <p> this is inside the function?</p>
//     </div>
//   )
// }

// export default App

import './App.css'

function ProfileCard (){
    const greeting = "Hello!";
    const age = 25;
    const city = "New York";
    

    return (
        <div className="card">
            <h1> {greeting}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <img src = "/MY photo on platforms.png" alt = "Profile Picture"/>

        </div>

    )
}
function callName(name){
    alert(name);
}

import {useState} from 'react';
function IncrementCounter(){
    const[count, setCount] = useState (0);
    return (

        <div>
            <h1> Count: {count}</h1>
            { (count ===0 || count === 10) && (
                <p> Count is either 0 or 10!</p>
            )}
            <button onClick ={() => setCount(count+1)} disabled = {count===10}> Increment</button>
            <button onClick = { () => setCount(count-1) } disabled ={count===0}> Decrement</button>
            <button onClick = { () => setCount(0) }  > Reset </button> 
            
             
            
        </div>
    )
}

function App() {
    // function callName(name){
    //     alert(name);
    
    return (
        <div>
            <IncrementCounter/>
        </div>
        // <div>
        //     <button onClick={() => callName("Sneha")} > Sneha</button>
        // </div>
        // <div className="App">
        //     <ProfileCard/>
        // </div>
    )
}
export default App;