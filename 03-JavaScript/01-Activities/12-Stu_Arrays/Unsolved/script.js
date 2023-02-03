// WRITE YOUR CODE HERE
var students = ["Sarah", "Bob", "Amy"];

console.log(students.length);

console.log("Welcome to class, " + students[0]);
console.log("Welcome to class, " + students[1]);
console.log("Welcome to class, " + students[2]);

students[1] = "Jake";

if (students[1]=="Jake"){
    console.log(students[1]+" is in class");
}