

function Grandchild({user}){
    return (
        <div>
            <h1>This is Grandchild Component</h1>
            <p>Name: {user.name}</p>
            <p>City: {user.city}</p>
        </div>
    )
}
export default Grandchild;