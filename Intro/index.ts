// Types

//infer or Implicity type

let userName = 'ajmal ea';
let subcribers = 30_000;


//Defining Types or Explicit Types

let userName2 : string = "ajmal ea";
let phone_number : number = 87654321;
let skills : string[] = ['html','css','js','ts'];
let count : number[] = [1,2,3,4];
let emptyArray : [] = [];
let userDetail : {name:string ; age:number} = {
    name:"ajmal",
    age:22
}


//interface
interface Details {
    name:string;
    age:number;
    salary:number;
}

let employeeDetails : Details = {
    name:"employee1",
    age:20,
    salary:100000
}
let managerDetails : Details = {
    name:"ajmal",
    age:22,
    salary:1000000
}