let name="Pranjal Agarwal";
let age=20;
let learn=false;
let data=null;
console.log(`My name is ${name} , and I am ${age} years old . I believe this is a ${learn} statement.`);
typeof null;

let x=10;
if(x==="10"){
    console.log("a");

}else{
    console.log("B");
}
for(let i=0;i<5;i++){
    console.log(i);
}

let nums=[10,20,30,40,50];
console.log(nums[0]);
console.log(nums.length);
console.log("printing using loop");

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);

}

let arr =[1,2,3];
arr[1]=100;
console.log(arr);
arr.push(400);
console.log(arr);
arr.pop();
arr.unshift(1000);
console.log(arr);
arr.shift();

let sum=0;
for(let i=0;i<arr.length;i++){
sum+=arr[i];

}
console.log("Sum is", sum);

console.log("session4)");

let students={
    name:"Pranjal Agarwal",
    age:20,
    isStudent:true
};
console.log(students.name);
console.log(students.age);
console.log(students["age"]);

for(let key in students){
    console.log(key,"is equals",students[key]);
}


let arr1=[1,2,2,3,1];
let freq={};
for(let i=0;i<arr1.length;i++){
    let num=arr1[i];
    freq[num]= (freq[num] ||0)+1;

}
console.log(freq);
let obj2={};
obj2[1]="one";
obj2["1"]="ONE";
console.log(obj2);

let map=new Map();
map.set(1,"one");
map.set("1","ONE");
console.log(map);

function greet(){
    console.log("Hello world");

}

greet();

function add(a,b){
    return a+b;
}

let sum1 = add(3,34);
console.log("Sum is",sum1);

const multiply =function(a,b){
    return a*b;

}
const subtract =(a,b) => a-b;


let x1=10;
function change(a){
    a=20;

}
change(x1);
console.log(x1);

let obj3={value:10};

function change(o){
    o.val=20;
}

change(obj3);
console.log(obj3.val);


let obj4={name:"Pranjal",age:20,}