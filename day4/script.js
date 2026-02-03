// const order = [ 
//     {product : "Laptop" , price : 60000},
//     {product : "Mobile" , price : 20000},
// ]

// function showOrders(){
//     for(let i=0; i<order.length;i++){
//         console.log(`Product: ${order[i].product}, Price: ${order[i].price}`);
//     }
// }

function task1(){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Task 1 done"), 2000);
    })
}
function task2(){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Task 2 done"), 1000);
    })
}

async function runTasks(){
    const results =  await Promise.all([task1(), task2()]);
    console.log(results);
}
runTasks();