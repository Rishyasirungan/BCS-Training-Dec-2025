// Assignment 01
/*var weekday = prompt("Enter a Number");
if(weekday==1){
    console.log("Monday");
}
else if(weekday==2){
    console.log("Tuesday");
}
else if(weekday==3){
    console.log("Wednesday");
}
else if(weekday==4){
    console.log("Thursday");
}
else if(weekday==5){
    console.log("Friday");
}
else if(weekday==6){
    console.log("Saturday");
}
else if(weekday==7){
    console.log("Sunday");
}
else{
    console.log("Wrong Option");
}*/

// Assignment 02

var getName1=prompt("First Person Name");
var getHeight1=prompt("First Person Height")
var getName2=prompt("Second Person Name");
var getHeight2=prompt("Second Person Height");
// scenario-2
if(getHeight1==getHeight2){
    console.log(`${getName1} and ${getName2} are of same height`)
}
// scenario-1
else if(getHeight1>getHeight2){
    var defHeight=getHeight1-getHeight2;
    console.log(`${getName1} is taller than ${getName2} by ${defHeight}cm`);
}
else {
    var defHeight=getHeight2-getHeight1;
    console.log(`${getName2} is taller than ${getName1} by ${defHeight}cm`);
}



