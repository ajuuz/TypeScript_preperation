"use strict";
// Types
//infer or Implicity type
// let userName = 'ajmal ea';
// let subcribers = 30_000;
// //Defining Types or Explicit Types
// let userName2 : string = "ajmal ea";
// let phone_number : number = 87654321;
// let skills : string[] = ['html','css','js','ts'];
// let count : number[] = [1,2,3,4];
// let emptyArray : [] = [];
// let userDetail : {name:string ; age:number} = {
//     name:"ajmal",
//     age:22
// }
// //interface
// interface Details {
//     name:string;
//     age:number|string;  // UNION   - we can insert either number or string . just like or operator
//     salary?:number;     //OPTIONAL  - these fields are optional . even if we omit there will be no error
//     getName?:()=>void;
// }
// let employeeDetails : Details = {
//     name:"employee1",
//     age:"20",
//     getName() {
//         console.log(this.name)
//     },
// }
// let managerDetails : Details = {
//     name:"ajmal",
//     age:22,
//     salary:1000000,
// }
// //type
// type DetailsType = {
//     name:string,
//     age:number | string,
//     salary?:number,
// }
// let employeeDetails1 : DetailsType={
//     name:"ajmal",
//     age:22,
//     salary:500000000
// }
// //how to specify that the array contains multiple types
// let array : (string|number|boolean)[]=[1,2,3,"string1",true]
// // function
// function getUserName(employeeDetails1:DetailsType):string{   //=> here we have to mention string as the return type 
//         return employeeDetails1.name;
// }
// console.log(getUserName(employeeDetails1));
// function getUserDetails(userDetails:{name:string,age:number}){
//             return userDetails.name;
// }
// getUserDetails({name:"ajmal",age:22})
// //named type or custom type
// type statusType = 'pending' | 'completed' | 'failed' | '';
// let currentStatus : statusType = '';
// function hello(): void{
//     console.log(this)
// }
// //function overloading
// function add(num1:number,num2:number):number;
// function add(num1:string,num2:string):string;
// function add(num1:any,num2:any):any{
//     return num1+num2;
// }
// add(10,20)
// add("10","20")
// //generic
// function getAge<T>(age:T):T{
//     return age;
// }
// getAge<number>(20)
// getAge<string>("20")
// type UserDetails={
//     name:string;
//     age:number
// }
// type AdminDetails={
//     firstName:string;
//     role:string;
// }
// const userDetails : UserDetails = {
//     name:"ajmal",
//     age:22
// }
// const adminDetails : AdminDetails = {
//     firstName:"admin",
//     role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details;
// }
// getDetails<UserDetails>(userDetails)
// getDetails<AdminDetails>(adminDetails)
// // extending the Type !!
// type type1 ={
//     name: string,
//     age:number,
// }
// type type2 = type1 & {
//     role:string
// }
// // type 2 contains properties of type 1 and add on property role ..
// //extending the Interfaces
// interface type3 {
//     name:string,
//     age:number
// }
// interface type4 extends type3{
//     role:string
// }
// // type casting
// // mapping the type to const 
// let userName="ajmal" as const;
// // we can also use type cast to specify the type
// let email ="example@gmail.com" as string;
//Enums can be created using three ways
//1. named type or custom type
// type statusType = 'pending' | 'completed' | 'failed' | '';
//2. enum statusType {
//     PENDING,
//     COMPLETED,
//     FAILED
// }
// function getStatus(orderId:string,status:statusType){
//     console.log(orderId+" "+status)
// }
// getStatus("12324",statusType.COMPLETED);
//3.keyof typeof
// const statusType={
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed"
// } as const;
// function getStatus(orderId:string,status:keyof typeof statusType){
//     console.log(orderId+" "+status)
// }
// getStatus('1246',"PENDING")
//UTILITY TYPES
// 1. Read Only
// type User = {
//     readonly name:string,
//     age:number
// }
// const userDetails : User ={
//     name:"ajmal",
//     age:22
// }
// const adminDetails:Readonly<User>={
//     name:"admin",
//     age:40
// }
//  2. Partial
// type User = {
//     name:string,
//     age:number
// }
// const userDetails : Partial<User> ={
//     name:"ajmal",
// }
//  3. Required
// type User = {
//     name:string,
//     age?:number
// }
// const userDetails : Required<User> ={
//     name:"ajmal",
//     age:22
// }
//  4. Pick
// type User = {
//     name:string;
//     age?:number;
//     salary:number;
//     phone:number,
//     houseName:string,
//     pincode:number,
//     place:string
// }
// const userDetails : Pick<User,"name"|"age"|"pincode"> ={
//     name:"ajmal",
//     age:22,
//     pincode:653322
// }
//  5. Omit
// type User = {
//     name:string;
//     age?:number;
//     salary:number;
//     phone:number,
//     houseName:string,
//     pincode:number,
//     place:string
// }
// const userDetails : Omit<User,"name"|"age"|"pincode"> ={
//     salary:1000000000,
//     phone:987654321,
//     houseName:"ettukalil",
//     place:"kalamassery"
// }
// 6. Exclude
// type statusType = 'completed' | 'pending' | 'failed';
// const statuss : Exclude<statusType,"pending"> = 'completed';
// // any / unknown / never / void / null
//  let userName :unknown = "ajmal";
//  const newValue = userName as string;
//  //never - never used when the function throws an error or if the code runs in infinte loop
//  function throwError(message:string):never{
//     throw new Error(message)
//  }
//  //void - executes some codes but doesnot return anything
//  function logMessage(message:string):void{
//     console.log(message)
//  }
//  //tuple 
//  let sampleTuple:[number,string] = [1,"ajmal"];
//CLASS
// class Car {
//    license:number;
//    constructor(num:number=100){
//       this.license=num;
//    }
//    move(){
//    }
// }
// const car = new Car(10);
// console.log(car)
// class Car {
//    model:string;
//    year:number;
//    constructor(model:string,year:number){
//       this.model=model;
//       this.year=year;
//    }
//    display():void{
//       console.log(`Car model: ${this.model} & Year : ${this.year}`)
//    }
// }
// const car = new Car('Toyota',2022)
// car.display()
//Access Modifiers 
// public , private , protected
// class Person {
//    public name : string;
//    private age : number;
//    protected country : string;
//    constructor(name:string,age:number,country:string){
//       this.name = name;
//       this.age = age;
//       this.country = country;
//    }
//    public displayInfo():void{
//       console.log(`Name ${this.name} and Age ${this.age}`)
//    }
// }
// const person = new Person('ajmal',22,'India');
// console.log(person.name)
// person.displayInfo();
//Inheritance
// class Animal {
//     name : string;
//    constructor(name:string){
//       this.name = name;
//    }
//    makeSound():void{
//       console.log('animal makes a sound');
//    }
// }
// class Dog extends Animal {
//    age:number=22;
//   constructor(name:string){
//       super(name)
//   }
//   bark():void{
//    console.log(`${this.name} barks!`)
//   }
// }
// const dog1 = new Dog('jimmy');
// dog1.bark()
// dog1.makeSound()
// dog1.name="jkldfs";
// dog1.bark()
//Encapsulation 
// class BankAccount {
//    private balance : number=0;
//    deposite(amount:number):void{
//       if(amount> 0){
//          this.balance+=amount;
//          console.log(`deposite amount ${amount}`)
//       }
//    }
//    getBalance():number{
//      return this.balance
//    }
// }
// const account = new BankAccount();
// console.log(account.getBalance())
// account.deposite(100);
// console.log(account.getBalance())
class Animal {
    makeSound() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("bark");
    }
    defaultSound() {
        super.makeSound();
    }
}
const dog = new Dog();
dog.makeSound();
dog.defaultSound();
