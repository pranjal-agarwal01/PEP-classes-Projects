console.log("Start");
    setTimeout(function(){
        console.log("Timeout Finished");

    }, 0);
console.log("End");



var count =1;
var intervalId = setInterval(function(){
    console.log("Interval Count: " + count);
    count++;

}, 1000);
