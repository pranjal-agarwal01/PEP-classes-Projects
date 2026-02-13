//const fs=require("fs");

//fs.writeFile("output.txt","Hello world", (error) => {
//fs.appendFile("output.txt","New log entry \n",(error) =>{
//fs.rename("output.txt","newoutput.txt",(error) =>{
//fs.copyFile("newoutput.txt","copyFile.txt",(error) => {

const pt = require("path");
const fp= "C:\Users\agarw\Desktop\PEP classes stuff\class\day13node\copyFile.txtcopyFile.txt";

if(pt.extname(fp)==".jpg" || pt.extname(fp)==".png"){
    console.log("valid file");
}else{
    console.log("invalid file");
}