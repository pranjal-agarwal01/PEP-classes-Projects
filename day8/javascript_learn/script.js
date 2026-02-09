
//arrow function
const greet = (name) => {
    console.log("Hello" + name);

}

//objects
const user ={
    name:"Pranjal",
    age:20,
    city:"Bareilly"
};

console.log(user.name);
console.log(user.age);


//why react loves objects? State and props are mostly objects.

const [user, setUser] = useState ({
    name: "Pranjal",
    age: 20
});

//never use for loop in jsx 
//instead go for map()

students.map(student => {
    console.log(student);
})

//spread operator 
//react does not allow mutation (direct change)

const newUser = {
    ...user,
    age:21
};

// in React={
//     setUser(prev => ({
//         ...prev,
//         age:21
//     }))
// }

//ternary operator inside jsx
// <h1>{isLogin? "Welcome" : "pLEASE login"}</H1>

//truthy and falsy react magic
// {isLogin && <Dashboard/>} if isLogin is true - component shows else nothign shows



//event handling in react

// button onClick={ClickMe}> Click Me</button>

//PROPS

// props= data sent from a parent component to a child component

//Normal js fn

function greet(name){
    console.log("Hello" + name);
}
greet("Pranjal");

//in react component

function Greeting(props){
    return <h1>Hello {props.name}</h1>;
}

function Profile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

<Profile name="Rashmi" age={20} />
