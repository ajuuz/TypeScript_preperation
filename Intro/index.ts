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
    age:number|string;  // UNION   - we can insert either number or string . just like or operator
    salary?:number;     //OPTIONAL  - these fields are optional . even if we omit there will be no error
    getName?:()=>void;
}

let employeeDetails : Details = {
    name:"employee1",
    age:"20",
    getName() {
        console.log(this.name)
    },
}
let managerDetails : Details = {
    name:"ajmal",
    age:22,
    salary:1000000,
    
}

//type
type DetailsType = {
    name:string,
    age:number | string,
    salary?:number,
}

let employeeDetails1 : DetailsType={
    name:"ajmal",
    age:22,
    salary:500000000
}


//how to specify that the array contains multiple types
let array : (string|number|boolean)[]=[1,2,3,"string1",true]


// function

function getUserName(employeeDetails1:DetailsType):string{   //=> here we have to mention string as the return type 
        return employeeDetails1.name;
}

console.log(getUserName(employeeDetails1));


function getUserDetails(userDetails:{name:string,age:number}){
            return userDetails.name;
}

getUserDetails({name:"ajmal",age:22})