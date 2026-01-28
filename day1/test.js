let students=[
    "Pranjal Agarwa" , "Ankit Verma" , "Priya Singh" , "Neha Gupta" , "Aman Patel"
];


console.log("All students: ");
students.forEach(name => console.log(name));


console.log("printing first and the last name:");
students.forEach(name =>{
    let parts=name.split(" ");
    let firstname=parts[0];
    let lastname=parts[1];
    console.log(`first name: ${firstname} , LastName: ${lastname}`);

});

students.push("Rohan Sharma");
console.log("After adding Rohan Sharma:",students.length);
