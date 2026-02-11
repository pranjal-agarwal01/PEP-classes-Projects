import GrandChild from "./GrandChild";

function Child({user}){
    return (
        <div>
            <h1>This is Child Component</h1> 
            <GrandChild user={user} />
        </div>
    )
}   

export default Child;