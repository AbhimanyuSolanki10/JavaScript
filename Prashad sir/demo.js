// ?console.log("hello from nodejs")
// ?let input = prompt("Enter something")
// ?console.log(input)
// ?console.error("tum u jo kar rahe ho sahi nahi hai")
// ?alert("kaha they ")
// ?console.warn("kyaaaaaaa")

// ?token are the smallest unit of programming language
// ?keywords are the predefined words which have some specific meaning 
// ?Idnetifiers are names given to the variables 
// !Rules for writing the identifiers
    // ?1: we can't write keywords as identifers
    // ?2: white space is not allowed and use Underscore or use camle case
    // ?3: we only use $ and _ no other specical caracter
    // ?4: It can't start with number but it can contain number 
    
// !Puntuaters are use for code sepration 


//todo  operators are special Symbol use to perform specific task between operands

//todo  TYPES OF OPERATORS
//! 1: arithmatic operators + - * / % 
//! 2: assignment operators  = , += ,-= ,/= ,*=
//! 3: comparision operators == , === , > ,< , >= , <= ,!=
// ? == is use for compare value and === is use for compare data types and value 
//! 4: logical operators  && if both are true then output is true || if any one is true the output is true
// ?console.log(10 !== '10')
// ?if(true && false){
// ?    console.log("both are same")
//! 5: Bitwise operators & ,| , ~,^, << ,>>
//! 6: String operators (+) , (+=)
// ? let first = "abhimanyu";
// ? first+="solanki";
// ? console.log(first)
//!  7: Conditional operators :- condition ? expression 1 : expression 2;
//!  8: Type operator :- 1: TypeOf() , 2: instanceof
// let a=[10];
// console.log(typeof(a))
// console.log(a instanceof Array)

//! 2: instanceof
//?  The instanceof operator in JavaScript is used to check the type of   an object at run time. It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 


// }
//todo   let and const are introduced in ES6 const is introduced in starting



// !            Declare and Intialization   ||  Declarization  || Initialization  || Redeclarization || Reinitialization
   
     
// !var             Yes var a=10                 Yes  var a;         Yes a=10          Yes var a;          Yes var a = 10;
// !                                                                                       var a;            a=20;


// !Let             Yes let a=10                 Yes  let a;         Yes a=10          No let a;          Yes let a= 10;
// !                                                                                      let a;               a=20;


// !const           Yes const a=10               No  const a;         NO a=10          No const a;          No const a = 10;
// !                                                                     const c           const a;            a=20;

//todo-------------------------------------------------------------------------Datatypes----------------------------------------------------------------------------- 
//  let a = 999999999999999999999
//  console.log(a)
//  number is divided in two category 10n is bigint -(2^53) - 1  to +(2^53) - 1  if number cross this limit then it comes under the bigint
//  console.log("type of a is ", typeof a )
//  let c = BigInt(15)
//  console.log(c)

// console.log(10/'a')
// !Nan is third type of number 
// console.log(typeof NaN)


//  let name  = "Tinku"
//  let friends = 'Tinki'
//  let Tinkikabf = `Pinku`
//  console.log(name)

//? template litteral means using multi line string inside backtiks ` ` and interpolation  is use to access any variable using ${} are advantages in backticks` 
// let intro = `my name is "abhimanyu" 
// and i live in  'Noida' and ${friends} is my friend`
// console.log(intro)

// let isLoggedin = true
// console.log(Boolean(()=>{})) 
//! " " , -1 , {} , [] , ()=>{}  get true except 0 , "" , undefined , Nan , Null
// let value = Boolean(0)
// console.log(value)

//? Null and undefined does not represent anything but we preffered Null

// let a = null; 
// console.log(a);


//todo when we select the cancel on promt it will show null in console
// let name = prompt("enter your name")
// console.log(name)


// let price = "100"
// let name = "Tshirt"

// let productInfo = (`the name of the product is ${name} . and its price is ${price} rupess` )
// console.log(productInfo)

//todo Primitive Datatypes they are 8 types
//! Number , NaN , null, Bigint , Boolean  , undefined, string , Symbol

// let s1 = Symbol(10)
// let s2 = Symbol(10)
// console.log(s1 == s2)

// Symbol is used when we have to use same value as different different representation
// let s12 = 10
// let s22 = 10
// console.log(s12 == s22)

// let a = true
// let b = false
// console.log(a == b)

//todo   Non Premitive Datatypes
//! Array , Object  and Function

//! Functions
//? Functions are nothing but the methods    
//? function are the reuseable block of code 

// function bookticket (location){
//     console.log(`Ticket booked for ${location}..|`)
// }
// bookticket("Manali")


// console.log("mai ghar se nikla ")
// function shadi(gift){
// console.log(`shadi me khana khane chala gaya ${gift} lekar .`)
// }
// console.log("dost k ghar gaya")

// shadi("flowers")

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* Default Parameters

// function introduction(name="JohnDoe",email="jonedoe@gmail.com",phone="9856321478",age="38") {
//     console.log(`My name is "${name}" , my email is "${email}" , my contact no is "${phone}" and my age is ${age}`)
// }
// introduction('Prashad', 'p@p.com',1723,20)
// introduction('Abhimanyu', 'xyz@p.com',99968553,22)
// introduction()


//* Arrow Function

// let functName  = (parameters)=>{
//     function body
// }
// functName(arguments)


// let  func = (name)=> {

//     console.log("hello from arrow function" +" " + name)

// }
// func("prasad")

// function for addition 
// let add = (a,b)=>{
//     console.log("addition of a and b is" + (a+b))
//? when we use , concetination is not happening when we use + it will merge 
//     console.log(`addition of ${a} and ${b} is`,(a+b))
// }
// add(10,2)

// let add  = (a,b)=>{
//     let output = a+b
//     return output
// }
// add(20,40)

// console.log(add(20,20))
//? Prompt command is used to take input from the user and it takes input as a string
// let num1 = prompt("Enter num1")
// let num2 = prompt("Enter num2")
// console.log(typeof(num1))

//? String should have number only as the input othewise it will give NaN.
// let a = Number(num1)
// let b = Number(num2)
// console.log(a)
// console.log(b)

//! typecasting using Number 
// let a = Number(num1)
// typecasting using parseInt 
// let b = parseInt(num2)

//! parseInt :- Sting should start with number otherwise it will give NaN
// console.log(a+b)
// console.log(Number(num1) + Number(num2))


// taking input from user using promt and adding it using arrow function 

// let num1 = parseInt(prompt("Enter Num1"))
// let num2 = parseInt(prompt("Enter Num2"))

// let add = (a,b)=>{
//     return a+b , "Hello"
//? Whatever the last value given to the return statement it will give the output of that value not previous value you give before last satement.
// }
// console.log(`addition of ${num1} and ${num2} is =>>>>>`+ " " + add(num1,num2))

//todo------------------ Higer order function -------------------------------------------------------------------- 
//? higher order function is a function which is taking another function as an argument.
//todo------------------ Call Back function -------------------------------------------------------------------- 
//? callback is a function which is pass to another function as an argument.

// let hof = (cbf)=>{  
//     cbf()
// }
// let cbf = ()=>{
//     console.log("cbf executed")
// } 
// hof(cbf)


// let operation = (task,num1 , num2) =>{
//     task(num1,num2)
//     console.log(task)
// }           
// let add =(a,b) =>{
//     console.log(a+b)
// }
// operation(add,10,20)


// let operation = (task,a,b) =>{
//     task(a,b)
// }

// let multiply = (a,b) => {
//     console.log(a*b)
// }
// operation(multiply,10,20)


// let operation2 = (task,a,b) =>{
//     task(a,b)
// }

// let division = (a,b) =>{
//     console.log(a/b)
// }
// operation2(division,8,2)


// let operation3 = (task,a,b) =>{
//     task(a,b)
// }

// let sub = (a,b) =>{
//     console.log(a-b)
// }
// operation2(sub,8,2)


// let greeting =(person ,typeofGreeting) =>{
//    console.log(person(typeofGreeting)) 
// }

// let nani = (typeofGreeting) =>{
//     console.log(`hello nani with my ${typeofGreeting} greeting`)
// }

// let chacha =(typeofGreeting) =>{
//     console.log(`hello chahcha with ${typeofGreeting} greeting`)
// }

// let friend =(typeofGreeting) =>{
//     return `hello dost with ${typeofGreeting}`
// }

// greeting(nani,"Namste")
// greeting(chacha,"Ram Ram")
// greeting(friend,"BSDK")


// let greeting = (person,type)=>{
//     console.log(person(type))
    
// }

// let brother = (type) =>{
//     return `hello brother....${type}`
// }

// greeting(brother,"paise wapas kab dega....?")

//todo ---------------------------------------------  Anonymous function this is also called function as expression ----------------------------------------------------
// let demo = function(){
//     console.log("This is Anonymous function")
// }
// demo()

// let x=10
// let y=20
// let result = eval('x+y')
// console.log(result)


//! fuction assigned to a variable is called as function as an expression
// let func = () =>{

// }
// func()

//! This is named function
//  function demo1 (){
//     console.log("this is named function")
// }
// demo1()


//! types of function
//! Simple fucntion with function keywords
//! Arrow function
//! Higher Order function
//! Callback function 
//! Annonymous Function
//! Named fucntion 
//! Funciton as an Expression
//! Parametrized function 
//! Immediate Invoke function (() =>{}) ()
// (()=>{
//     console.log("iife = immediate invoke function")
// })()


//! Advantages
//! We dont have to give any name and it will call immediately  and we can't use multiple times


// console.log("x")
// let func = ()=>{
//     console.log("y")
// }
// console.log("z")
// func()


//* global execution context is created when any variable is declared it is two phases 
//* declaration phase and execution phase
// let a = 10

// let func1= ()=>{
//     console.log("func1")
// }
// func1()

//* Non primitive data types and  primitive data types start with var wale variables store honge heap area mai 
//* console , window , alert, document  is an object which is stored in Heap area or we can say default objects 
//* let and const wale variables store in call stak. 

// console.log("1")
// let func = (a)=>{
//     console.log(a)
// }
// console.log("2")
// func("xyz")
// console.log("3")

// console.log(window)
//* window object is the parent object in javascript
// alert("something")
//* first level object in window are direct accessible  nested objects are not directly accesible

// var a1 = 10
// let a2 = 20
// console.log(window)
//* variable declared with var are stored in window object 
//* whenever a fucntion calls new function execution context is created
//* global execution context is created in which it has two phases variable declartion and variable execution 
//* parameter within function also comes under declartion context
// let a = 10
// let func = ()=>{
//     let m = "m"
//     console.log("Hello")
    
// }
// console.log("xyz")
// func()

// let que = "kaisi ho tum ?"
// let call  = (que)=>{
//     console.log(que)
//     return "mai Badiya..! tum kaise ho..?"
// }
// let reply = call(que)
// console.log(reply)

//* this will point to window object 
// console.log(b)
// let a =10
// let b 
// const c =30
// console.log(b)
//todo the time span between var declaration and its Initialization its called temporal dead zone
//todo it is a phenomenon of sending the declaration to the top of the execution context is called hoisting
//todo  a,b,c ka send karna top of execution phase  hoisting hai 
//todo if a var within a temporal dead zone we get undefined
//todo if we want to access any variable start with let and const which is in tmp dead zone we get error but var wale variable give undefined because variable declare with var are stored in windows object 

//  a =20
//  console.log(window)
//*  a = 20 is almost similar to var a = 20 because it is also stored in windos object
//*  var let const declare the behaviour of the variable
//*  var se declare wale variables in the windows object so they give undefined

// console.log(a)
//  let a = 10
//  console.log(a)
//  var b =20

//  let fucn = () =>{
//     console.log(a,b)
//  }
//  fucn()



//! scope
// *scope means where our variable is declare

// let a = 10
// console.log(a)

// if(true){
//     console.log(a)
//     let b = 20
// }
// console.log(b)



//*                 Scope 
//*                   |
//*                  |
//*   ----------------------------------
//*   |                                 |
//*                                   Local
//*   Global                        ------------------------------------
//*                                 |                                    |
//*                                Block scope                       Function scope (var is fucntion scoped)
//*          (let , const are blocked var will be accessed)            nothing accessible .let and const are also function scoped
//* (let/const we can't access outside block)

//* when we use if condition we can access var outside ==> {}

    // let a = "RRR"
    // if(true){
    //     console.log(a)
    //     let b = "Kantara"
    //     const c= "Munjya"
    //     var d = "kalki"
    // }
    // console.log(d)

// let a  = "Bahubali"                                
// let func = ()=>{
//     let b = "Pushpa"
//     const c = "Mirzapur"
//     var d = "Panchayat"
// }
// func()
// console.log(d)


// let a = () =>{
//     function b () {
//         console.log("hellooo")
//     }
//     b()
// }
// a()

// {
//     let a = 10
// }
// console.log(a)
    

//! Javascript Currying 
//* if we want any function in globally called then we have to return those fucntion and write ()() according to no of function we have to call 
//* if we have nested function then we can call them by parent function using ()() and those funcition should be return 

// let a = () =>{
//     console.log("a block executed")
//     let b=()=>{
//         console.log("b block executed")
//         let c = (value) =>{
//             console.log("c block executed with value  ==>", value)
//         }
//         return c
//     }
//     return b
// }
// a()()(10)


//! Closure
//* The ability of javascript engine to search for a variable into the another fucntion block (only parent function) is called as lexical scoping or Closure
// let minku =()=>{
//     let bike = "splender"
//     let mobile = "Iphone"
//     let tinku = ()=>{
//         console.log("the bike is ===>",bike,mobile)
//     }
//     return tinku
// }
// let returnedFu = minku();
// returnedFu();


//* ability of js engine to search for the variable from the function even the function are removed from the call stacks and these value are stored in closure


// let age = 18
// if("a"){
// console.log("You are eligible for vote")
// }else{
//     console.log("tum se naa ho paygea beta....!")
// }

// console.log("10" + 10)
// console.log("10" - 10)
// console.log("10" / 10)
// console.log("10" * 10)
// when we concatinate any string and proper a number and if we use any mathmatical operation like + this will give the priority to concatination and if we use any other - ,/, * it will typecast automatically 

// let  num  = prompt("Enter the Number")
// if(num %2==0){
//     console.log(`${num} is an Even Number`)
// }else{
//     console.log(`${num} is an Odd Number`)
    

// let isHungry= true
// let isFishAvailable = false
// if(isHungry){
//     console.log(`cat is hungry`)
//     if(isFishAvailable){
//         console.log(`Cat eats fish`)
//     }else{
//         console.log(`Cat drink Milk`)
//     }
// }else{
//     console.log(`cat is not hungry`)
// }

// let username = "Prashad123"
// let password = "12345"
// let u = prompt(`enter username`)
// let p = prompt(`enter password`)
// if(username == u){
//     if(password==p){
//         console.log("Logged in Successfully")
//     }else{
//         console.log("Wrong Password")
//     }
//     }else{
//         console.log("wrong username")
//     }
 

// let username = "Prashad123"
// let password = 12345
// let u  = prompt("enter username")
// let p  = prompt("enter password")
// if(username==u && password==p){
//     console.log("Loggedin Successfully ")
// }else{
//     console.log("Wrong Credentials")
// }

// let username = "Prashad123";
// let password = "12345";
// let u = prompt(`enter username`);
// let p = prompt(`enter password`);
// (username == u && password==p) ? console.log("Loggedin Successfully") : console.log("Wrong Credentials");


// let isHungry = false
// let isFishAvailable = false
// console.log(!isHungry ? "cat is not hungry" : isFishAvailable ? "cat eats fish" : "cat drinks milk");
// !isHungry ? console.log("cat is not hungry") : (
//     isFishAvailable ? console.log("cat eats fish") : console.log("cat drinks milk")
// )


// let takla = prompt("enter your name")
// switch(takla){
//     case "Sushant":console.log("9574896325"); break;
//     case "Deep":console.log("9574896325"); break;
//     case "Sant":console.log("9574896325"); break;
//     case "ant":console.log("9574896325"); break;
//     case "hant":console.log("9574896325"); break;
//     case "tanya":console.log("9574896325"); break;
//     default :console.log("tumhara naam is list mai nahi hai ")
// }



// for(let i = 0; i<=10;i++){
//     console.log("hello",i)

// }


// let i=0
// while(i>10){
//     console.log("hello",i)
//     i++
// }

// let i=0
// do{
//     console.log("hello",i)
//     i++
// }while(i<10)

// OBJECTS
// creating a object ==> let obj ={}
// let fruits = {
//     mango:'Yellow',
//     guava:'Green',
//     Apple:'Red',
//     tomate:'Red'
// }
// let students ={
//     naame:'Jatin',
//     age:22,
//     isFather:false,
//     WifeName:null,
//     GfMobNO:undefined,
//     driving:()=>{console.log(`Jatin is driving Thar`)}
// }
// console.log(students)
// console.log(students.age)
// console.log(students.isFather)
// console.log(students.WifeName)
// console.log(students.GfMobNO)
// console.log(students.driving())


// !creating object using object literal 
// let obj ={
    //     namee:"prashad"
    // }
    // obj.add="Noida"
    // console.log(obj)
    // obj.namee="xyz"
    // console.log(obj)
    
    // !creating object with new keyword
    // let objWithNewKeyword = new Object({name:"tinku"})
    // console.log(objWithNewKeyword)
    // objWithNewKeyword.add = "Noida"
    // console.log(objWithNewKeyword)
    
    // !creating object with factory function
    
    // let student1 = {
        //     name:"Tinku",
    //     add:"Noida",
    //     mob:8785968423
    // }

    // let student2 = {
    //     name:"Tinku",
    //     add:"Noida",
    //     mob:8785968423
    // }
    // let student3 = {
        //     name:"Tinku",
        //     add:"Noida",
        //     mob:8785968423
        // }
        
//         function students(name, add, mob){
//             return{
//                 name:name,
//                 add:add,
//                 mob:mob
//         }
//     }

//   let student1= students("tinku","Noida",7845123698)
//   let student2= students("pinku","Noida",7845123698)
//   let student3= students("minku","Noida",7845123698)
//   let student4= students("tinku","Noida",7845123698)
//     console.log(student1)    
//     console.log(student2)    
//     console.log(student3)    
//     console.log(student4) 
    
 // !primitive are immutuable  & non primitve data type are mutable
 
 // !creating object using class
 
 //  class Car{
    //     constructor(name ,brand ,price){
        //         this.name = name
        //         this.brand =brand 
        //         this.price = price
        
        //     }
        //  }
        //  let car1 =new Car("Mustang","ford","1cr")
        //  let car2 =new Car("Fortuner","Toyota","0.5cr")
        //  let car3 =new Car("WagonR","Maruti","8L")
        //  console.log(car1)
        //  console.log(car2)
        //  console.log(car3)
        
        // !creating object using Constructor function 
        // here we don't use arrow function because we are using this keyword 
        // let Students = function(name,add){
        //     this.name = name,
        //     this.add = add
        // }
        // let student1 = new Students("tinku","Noida")
        // console.log(student1)




//  !delete the properties from an object
//  !delete is an unary operator and . is also a operator and typeof is also unary operator
// let obj = {
//     name:"tinku",
//     add:"Noida"
// }
// console.log(obj)
// delete obj.addlet country = {
//     name:"India",
//     state :{
//         name:"Uttarpradesh",
//         district :{
//             name:"GautamBudh Nagar",
//             city:{
//                 name:"Noida",
//                 sector:{
//                     name:"sector 16"
//                 }
//             }
//         }
//     }
// }

// console.log(obj)

// !we can creat nested objects

// 
// console.log(country.state.district.city.sector.name)


// let myApi =[{
//     name:"India",
//     state :{
//         name:"Uttarpradesh",
//         district :{
//             name:"GautamBudh Nagar",
//             city:{
//                 name:"Noida",
//                 sector:{
//                     name:"sector 16"
//                 }
//             }
//         }
//     }
// }
// ]
// console.log(myApi)

// !Object Methods

// let movie = {
//     name:"Student fo the year",
//     year:2012,
//     actor:"Siddharth Malhotra",
//     actress: "Alia Bhatt",
//     villain :"Ram Kapoor",
//     budget :"60cr",
//     income:"110cr"
// }

// key is used to get the only key of the object
// let allkeys = Object.keys(movie)
// console.log(allkeys)
// values is used to get the only values of the object
// let allvalues = Object.values(movie)
// console.log(allvalues)
// entries is used to get the all entries  of the object
// let allEntries = Object.entries(movie)
// console.log(allEntries)

// !assign objects to an object
// ! here obj1 is updated it will not creat new object after assigning

// let student1 = {
//     name:"tinku"
// }
// let student2 ={ add:"Noida"}
// let student3 ={contact:7896541236}
// let student4 ={age:22}
// student2 is assigned student1 
// Object.assign(student1,student2,student3,student4)
// console.log(student1)
// console.log(student2)

// let movie ={
//     name:"hera pheri",
//     year:2000,
//     actor:{
//         actor1:"Akashy kumar",
//         actor2:"Babu Bhiya" ,
//         actor3:"Sunil shety"},
//     actress:{
//         actress1:"Taboo"},
//     budget:"150rs",
//     income:"1cr"
// }

// console.log(movie.actor.actor1)
// console.log(movie["actor"]["actor3"])
// !haOwnProperty and in
// !these two will check is that property exist or not 
// console.log(movie.hasOwnProperty('income'))
// console.log("income" in movie)
// console.log(Object.movie.includes('income'))



// !By using freeze we cannot update or delete  or add any value in th object
// let obj = {
    //     name:"tinku"
    // }
    // Object.freeze(obj)
    // delete obj.name
    // obj.add="Noida"
    // obj.name="pinku"
    // console.log(obj)



    // !By using seal we cannot  delete  or add any value in th object but we can update existing properties
// let obj = {
//     name:"tinku"
// }
// Object.seal(obj)
// obj.add="Noida"
// obj.name="Pinku"

// console.log(obj)

// !To check if the object is freezed or sealed by using Object.isSealed or .Frozen
// let obj ={
//     name :"tinku"
// }
// Object.freeze(obj)
// console.log(Object.isFrozen(obj))
// Object.seal(obj)
// console.log(Object.isSealed(obj))





// let name = "tinku"
// let phone = 9886596586
// let add = "Noida"
// let person = {
//     name:name,  //! here name is key : and name is variable
//     phone : phone,
//     add : add
// }
// let person = {
//     name,  //! simplified method we can write in this form also only the variable should be declared 
//     phone,
//     add 
// }
// console.log(person)




//! we creat the copy of obj1  and this will only point to the address of obj1 and this copy is called shallow copy.

// !Shallow copy:- copy and orignal objects points towwards same memory address
// let obj1 = {
//     name: "tinku",
//     add:"Noida"
// }
// let obj2 = obj1
// console.log(obj2)
// obj2.phone=78936541236
// console.log(obj1)


// ! Deep copy:- copy and orignal objects points towwards different  memory address

//! 1
// let obj1 = {
//     name: "tinku",
//     add:"Noida"
// }
// let copy = {
//     name:"tinku",
//     add:"Noida"
// }
// console.log(obj1)
// console.log(copy)

// copy.phone =1234
// console.log(copy)
// console.log(obj1)



// ! 2 using for in loop
// let obj = {
//     name:"Tinku",
//     add:"noida"
// }
// ! we can only use for in loop for object

// for(value in obj){    // !here value means key of object 
//     console.log(value)      //! iteration always points to key only
// }


// let obj ={
//     name :"tinku",
//     add:"noida"
// }

// let copy ={}
// for(a in obj){
//     copy[a]=obj[a]
// }
// console.log(copy)
// copy.phone = 7845123698
// console.log("obj ===>",obj)
// console.log("copy ===>",copy)


// ! 3 using parse and stringify

// let obj ={
//     name : "Tinku",
//     add : "Noida"
// }

// !to convert obj to json
// let jsonObje = JSON.stringify(obj)
// console.log(jsonObje)

// !to convert json to obj
// let jsonObj = JSON.parse(jsonObje)
// let copy = JSON.parse(JSON.stringify(obj))
// copy.phone = 7896541236
// console.log("obj ==>" , obj)
// console.log("copy ==>" , copy)



// ! this keyword inside Arrow function will always points towards the window object
// ! this keyword inside Global scope will always points towards the window object
//! writing this keyword inside arrow is useless 
// let a =10
// var obj = {
//     test:()=>{
//         console.log(this.a)
//     }
// }
// obj.test()



// let func =() =>{
//     console.log(this)
// }
// func()


// console.log(this)

// var a = "I am variable declared with var keyword"
// let func = () =>{
//     console.log(window.a)
// }
// func()

//! this keyword will point towards the current object within normal function
// let obj = {
//     a :10,
//     test:function(){
//         console.log(this)
//     }
// }
// obj.test()

//! What is call, apply ,bind method?

//!answer :-  we just have to pass the refference of object in that function 
//! Purpose: Invokes a function with a specific this value and individual arguments.
//! When to Use: Use call() when you want to immediately invoke a function and specify what this should refer to, while passing the arguments individually.

// ! CALL MEHTOD 
// let obj = {
//     name:"tinku",
//     age:22,
//     add:"Noida"
// }

// function info(){
//     console.log(this.name)
// }
// info.call(obj)


// let student ={
//     name:"Tinku",
//     age:22,
//     add:"Noida"
// }
//  function info(a,b){
//     console.log(`my name is ${this.name} and my age is ${this.age} i live in ${this.add} `)
//     console.log(a+b)
//  }
//  info.call(student,10,20)


// ! APPLY MEHTOD 
// ! It is used to call more than one argument 
//! Purpose: Invokes a function with a specific this value and arguments provided as an array or array-like object.
//! When to Use: Use apply() when you want to immediately invoke a function and specify what this should refer to, while passing the arguments as an array.
// let obj ={
//     name:"Tinku",
//     age:22,
//     add:"Noida"
// }
// function info(a,b){
//     console.log(`my name is ${this.name} and my age is ${this.age} i live in ${this.add} `)
//     console.log(a+b)
// }
// info.apply(obj,[10,20])
 

// ! BIND MEHTOD 
// !IT WILL NOT CALL IMMEDIATLY 
// !Purpose: Creates a new function that, when called, has its this value set to a specific object. It does not invoke the function immediately but returns a new function that you can call later.
// !When to Use: Use bind() when you want to create a new function with a preset this value and possibly some initial arguments, which you can call later.

let obj ={
    name:"Tinku",
    age:22,
    add:"Noida"
}
 function info(a,b){
    console.log(`my name is ${this.name} and my age is ${this.age} i live in ${this.add} `)
    console.log(a+b)
 }

let returnedFunc= info.bind(obj)
returnedFunc(10,20)

// !ARRAY 
// !it is a continous block of memory which contain hetrogenous data .

// let demo = [10,20,30,40,"tinku",undefined , null , NaN , ()=>{} , {}, [5,10,15,20,25 [4,58,5,6,[10,20]]]]
// console.log(demo)
// !creating new array using array constructor and new keyword
// let arr = new Array(10,20,30,40)
// console.log(arr)

//! if you want to add new element  inside array in the last index we can use push method
// let nums = [675,837,735,643,53,243,0,64]
// nums.push(100)
// console.log(nums)

//! if you want to remove  elements  from an array from the last index (using pop mehtod)
// let nums = [675,837,735,643,53,243,9,64]
// nums.pop()
// console.log(nums)


//! how to add new elements in an array in the starting index (using unshift mehtod)
// let nums = [675,837,735,643,53,243,9,64]
// nums.unshift(1000)
// console.log(nums)


//! how to remove first elements in an array  (using shift mehtod)
// let nums = [675,837,735,643,53,243,9,64]
// nums.shift()
// console.log(nums)

//! how to find an index number of an array  element  (using indexOf mehtod)
// let nums = [675,837,735,643,53,243,9,64]
// let indexval =nums.indexOf(643)
// console.log("index value of 53 is ",indexval)


//! how to access array element if we have its index value
// let nums = [675,837,735,643,53,243,9,64]
// console.log(nums[4])



//! how to check whether the element is included in an given arrary or not
// let nums = [675,837,735,643,53,243,9,64]
// let isIncluded = nums.includes(8)
// console.log(isIncluded)

//! slice[first , second) and it will not affect the orignal array
// let nums = [675,837,735,643,53,243,9,64]
// let slicedArray = nums.slice(3,10)
// console.log(slicedArray)
// console.log(nums)

// !if we try to access any index value which doesn't exist in an array , instead of getting error we will get undefined
// let nums = [675,837,735,643,53,243,9,64]
// console.log(nums[14])


//! splice[element staring index , no of element you want to remove) and it will  affect the orignal array and 
// let nums = [675,837,735,643,53,243,9,64]
// let splicedArray = nums.splice(0,2)
// console.log(splicedArray)
// console.log(nums)

// let arr=[10,20,30,40]
// arr.splice(2,1)
// console.log(arr)


//! reverse and it will  affect the orignal array
// let nums = [675,837,735,643,53,243,9,64]
// console.log("nums (orginal array)",nums)
// let arr = nums.reverse()
// console.log("nums (reversed array)",nums)

// ! through entries method we can convert object into array of arrays
// let obj = {
//     name:"tinku",
//     add:"Noida"
// }
// let arr = Object.entries(obj)
// console.log(arr)

// !we can convert only array of arrays into object by using  fromEntries
// let newObj = Object.fromEntries(arr)
// console.log(newObj)

// let arr1 = [
    //     ["name" ,"Tinku"],
//     ["add" ,"Noida"]
// ]
// let obj1 = Object.fromEntries(arr1)
// console.log(obj1)




// let nums = [675,837,735,643,53,243,9,64]
// let nums = [1,8,7,4,5,2,9,6]
// let arr = nums.sort() 
// !it will sort in lexical shorted order means first sorted according to first digit in multiple digit numbers but it will work in single digit  
// ! a-b will give accending 
// ! b-a will give descending

// let arr = nums.sort((a,b) =>{
    //     return a-b
    // })
// console.log(arr)

// !FOREACH LOOP

// !foreach method (HOF)
// !this method does not return anything and we get undefined on console.log()
// !forEach will not affect the orignal array

// let nums = [7,3,4,9,1,4,6,8]
// nums.forEach((it) =>{
    //     console.log(it)
    // })
    
    // let nums = [7,3,4,9,1,4,6,8]
    // let a = nums.forEach((value,index,arr) =>{
        //         console.log(index + "," +(value+100) , arr)
        //     })
        // console.log(a)
        
        // let arr = [2,3,4,5,6]
        // let newarr =[]
        // arr.forEach((val,ind)=>{let arr = [
            //     {name:"Tinki" , age:22},
            //     {name:"Pinki" , age:24},
            //     {name:"Rinki" , age:26},
            //     {name:"Minki" , age:28},
            // ]
            // console.log(arr[1].name,arr[3].age)
            // console.log(`My name is ${arr[0].name} , and my age is ${arr[0].age}`)
            // arr.forEach((val)=>{
                //     console.log(`my name is ${val.name} , and my age is ${val.age}`)
                // })
                //     console.log(val*val)
                //     newarr.push(val*val)
                // })
                // console.log(newarr)
                

        // !FOR IN  LOOP

        // let nums = [675,837,735,643,53,243,9,64]
        // for(val in nums){
        //     console.log(val)
        // }
        // !FOR OF  LOOP

        // let nums = [675,837,735,643,53,243,9,64]
        // for(val of nums){
            //     console.log(val)
            // }
            
        // let nums = [675,837,735,643,53,243,9,64]
        // let sum = 0
        // for(val of nums){
        //     sum += val
        // }
        // console.log(sum)
        
        // !MAP
        // let nums = [675,837,735,643,53,243,9,64]
        // nums.map((val,i)=>{
            //     console.log(val)
            // })
            // let newArr = nums.map((val,i)=>{
        //     return val+100
        // })
        // let newArr = nums.filter((val,i)=>{
        //     return val>400
        // })
        // let newArr = nums.reduce((acc,val,i)=>{
            //     return acc +=val
            // })
        // let newArr =for(val of nums){
        //     return 
        // }
        // let newArr =for(val in nums){
        //     return 
        // }
        // let newArr= nums.sort((a,b)=>{
        //     return b-a
        // })
        
        // let newArr = nums.forEach((val,i)=>{
            //     return val+100
            // })
            // console.log(newArr)
            // console.log(nums)
            
            
            
            //  method name     isReturning    isModifying orignal array?   used in 
            // forEach      No              No                          we can access value indexes &b array on each iteration
            // map          yes             No                          returned an array updated array
            // filter       yes             No                          apply condition to filter the array
            // reduce       yes             No                          always return single valued
            // for in       No              No                          we can access only indexes
            // for of       No              No                          we can access only values
            // sort         Yes             Yes                         sorted array
        
    
            // !map method will return an array 
            // let nums = [675,837,735,643,53,243,9,64]
            // nums.map((val, i, arr)=>{
                //     console.log(val,i)
                // })
                // ! foreach  method will not return anything 
                // console.log(`------------------------------`)
                // let a =nums.forEach((element, i)=>{
                    //     console.log(element,i)
                    //     return element+100
                    // })
                    // console.log(a)
                
                    // ! foreach  method will not return anything 
                    // let nums1 = [675,837,735,643,53,243,9,64]
                    // let c= nums1.forEach((val,i,arr)=>{
                        //     return val +1000
                        // })
                        // !map method will return an array 
                        //    let b = nums1.map((val,i,arr)=>{
                            //         return val+1000
                            //     })
                            //     console.log(b)
                            //     console.log(c)
                            
                //  !Filter method :- It will filter out the data according to your given conditon    

            //   let nums = [675,837,735,643,53,243,9,64]
            //   let newArr = []
            //   for(let i =0;i<nums.length;i++){
            //     if(nums[i]>300){
                //         newArr.push(nums[i])
                //     }
            //   }
            //   console.log(newArr)
                            
                // !Using of inbuilt method   
                //   let nums = [675,837,735,643,53,243,9,64]
                //   let filteredArr =nums.filter((val)=>{
                    //     return 10
                    //   })
                    //   console.log(filteredArr)
                    
                    // let arr = [NaN , 10 , 10.10 , 10n ,"Hello"]
                    // let newArr =arr.filter((val,i)=>{
                        //     console.log(typeof val);
                        //     return (typeof val =='number')
                        // })
                        // console.log(newArr)
                        
                        
                        // !Reduce method :-  it will always return single value .
                        //   let nums = [675,837,735,643,53,243,9,64]
                        //   let sum = 0
                        //   for(let i =0;i<nums.length;i++){
                            //         sum+=nums[i]
                            //   }                 
                            //   console.log(sum)        
                            
                        // !Using Reduce Mehtod    :- it having 4 values inside call back function and syntax is given below here accumulator is use to store the value 
                    //     let nums = [675,837,735,643,53,243,9,64]
                    //    let singlValue = nums.reduce((accumulator ,value , index , arr)=>{
                    //         return accumulator += value
                    //     })
                    //     console.log(singlValue)

                    // ? we can give the default value to accumulator just after the call back function { like 10000 is given in below 
                    //     let nums = [675,837,735,643,53,243,9,64]
                    //    let singlValue = nums.reduce((sum ,value , index , arr)=>{
                    //         return sum += value
                    //     }, 10000000)
                    //     console.log(singlValue)

                        //? map return the new array
                        // ?filter return the filter out element of array
                        // ?reduce return the new single value
        
        
// let arr =[]
// console.log(Array.isArray(arr))
// ! THIS IS HIGHLY RECOMMENDED TO USE TO REDUCE THE ERROR 
// let arr;
// Array.isArray(arr) && arr.map((val,i)=>{
//     console.log(val)
// })
// arr=[10,20,30,40]

// !SECOND EXAMPLE

// let arr = [10,20]
// arr.length > 0 && arr.map((val,i)=>{
//     console.log(val)
// })
// arr=[10,20,30,40]

// !join method 

// let name = ['T','I','N','K','U']
// console.log(name.join(""))


// let str =""
// for(let i =0;i<name.length;i++){
//     str +=name[i]
// }
// console.log(str)


//! Destructuring 
// ! in different different object if we give same keys and do destructuring then it will through error
// ? extracting out the values from array or object and it is the concept of ES6
// let bagpack ={
//     item1:"torch",
//     item2:"Tiffen",
//     item3:"Rope",
//     item4:"Knife",
//     item5:"Ist aid box",
//     item6:"Water bottle",
//     item7:()=>{
//         console.log("fishing")
//     }
// }
// let {item1 , item2, item7} = bagpack
// item7()
// let {item1 , item2 ,item3 , item4, item5} =bagpack
// console.log(bagpack.item1)
// console.log(item1)
// console.log(bagpack.item3)

// let arr= ["torch","water bottle","knife","tiffen","blanket"]
// let arr= ["torch","water bottle","knife","blanket" , {
//     menu1:"ghewar",
//     menu2:"petha"
// }]
// !We can give any name to arr as it does not have any key value pair as object holds.
// let [a,b,c,d,{menu1,menu2}] = arr
// console.log(menu1)


// !REST AND SPREAD are using ---> three dots (...)
//? Rest operator cannot use in middle 
// !  = ... spread
// ! ... rest =
// ! after using rest operator after 1,2 values then the remaing all the vlaues are stored in single variable (in array) which got ...
// 
// ? rest is used to pack the element 

// let arr = [10,20,30,40,{name:"tinku"},()=>{
//     console.log("function executed")
// }]
// let [a,b,...c]= arr;
// console.log(c)
// let [f,g,h,i] = c
// i()

// ? spread is used to unpack the element because we are using right side of = .
// !This is also one way of making deepcopy  because it makes the copy of array
// let arr=[10,20,30,40,50]
// console.log(...arr) 
// ? we are not assigning value we are just printing the value so it gives o/p 10 20 30 40 50
// let nums =[...arr]
// console.log(nums)
// nums.push(60)
// console.log(nums)
// console.log(arr)

//! here  IS NO LHS AND RHS then it will unpack and internally it work as spread 
// let arr=[10,20,30,40,50]
// let func = (a,b,c,d,e)=>{
//     console.log("func is executed",a)

// }

// !this is work as rest because internally it will assigning the value of like ...a=[10,20,30,40,50] 
// let func = (...a)=>{
//     console.log("func is executed",a)

// }
// func(...arr)

// func(10,20,30,40,50)


// !How to creat deep  copy
// let obj = {
//     name:"tinku"
// }
// let emptyobj = {...obj}
// emptyobj.age = 23
// console.log(emptyobj)
// console.log(obj)


//! Prototype is a blue print of data type .
// ! Array --> Array-->Object-->Prototype--> =(pointing to same point) <--Prototype<--Object

// let obj ={
//     name:"tinku"
// }
// console.log(obj)
 
// let arr = [10,20]
// console.log(arr)
//! We cannot see the prototype of Null , Number , undefined because they don't have any object they represent empty entity .
// let b = undefined.prototype
// let d = Function().prototype
// console.log(d)
// let d = Number.prototype
// let a = String.prototype
// let c = Boolean.prototype
// console.log(a)
// console.log(b)
// console.log(c)
//! Alternative way to see Prototype
// console.log([].__proto__);

// let obj ={
//     name:"abhimanyu",

// }
// console.log(obj.__proto__)
// console.log([])
// console.log([].__proto__)
// console.log([].length)
// console.log([].Prototype) // !we are unable to access the prototype by using this 
// console.log([].__proto__) // !we can access the prototype by using .__proto__ 


// let obj1 = {
//     name:"Tinku"
// }
// let obj2={
//     age:23
// }
// obj2.__proto__=obj1
// !child          parent
// console.log(obj2)


// ! Date Object
// let date = new Date()
// console.log(date.getDay())
// !days = [0,1,2,3,4,5,6]
// !                  f s
// let date = new Date()
// let key = date.getDay()
// switch(key) {
    //     case 0:console.log("Sun") ; break
    //     case 1:console.log("Mon") ; break
    //     case 2:console.log("Tue") ; break
    //     case 3:console.log("Wed") ; break
    //     case 4:console.log("Thur") ; break
    //     case 5:console.log("Fri") ; break
    //     case 6:console.log("Sat") ; break
    // }
    
    // let date = new Date()
    //! get todays date
    // let key = date.getDate()
    // console.log(key)
    
    //! get todays day
    // !days = [0,1,2,3,4,5,6]
    // let key= date.getDay()
    // console.log(key)
    
    
    //! get todays Month
    //! month = [0,1,2,3,4,5,6,7,8,9,10,11]
    // let key= date.getMonth()
    // console.log(key)

    // switch(key){
    //     case 0:console.log("Jan") ; break
    //     case 1:console.log("Feb") ; break
    //     case 2:console.log("Mar") ; break
    //     case 3:console.log("Apr") ; break
    //     case 4:console.log("May") ; break
    //     case 5:console.log("Jun") ; break
    //     case 6:console.log("Jul") ; break
    //     case 7:console.log("Aug") ; break
    //     case 8:console.log("Sep") ; break
    //     case 9:console.log("Oct") ; break
    //     case 10:console.log("Nov") ; break
    //     case 11:console.log("Dec") ; break
    // }

    // !Get current year
    // let date = new Date()
    // console.log(date.getFullYear())

    // !Get hours 
    // let date = new Date()
    // console.log(date.getHours())

    
    // !Get Milliseconds 
    // let date = new Date()
    // console.log(date.getMilliseconds())


    // !Get Minutes
    // let date = new Date()
    // console.log(date.getMinutes())


    // !Get Seconds
    // let date = new Date()
    // console.log(date.getSeconds())


    //? Get Time will give the unique value 
    // let date = new Date()
    // console.log(date.getTime())


    // ! Math Object
    //? find the absolute value
    // console.log(Math.abs(-10.100000))
    
    //? Ceil given higest value like 10.1 = 11
    // todo console.log(Math.ceil(10.1))
    //? floor given lowest value like 10.1 = 10
    // todo console.log(Math.floor(10.99))
    //? if value is >= than .5 then give higest value other wise lowest value
    // todo console.log(Math.round(10.99))
    // ? to find the cube root of the value
    // todo console.log(Math.cbrt(27))
    // ? to find the maximum value
    // todo console.log(Math.max(10,2,0,90,5,40,60))
    // ? to find the minimum value
    // todo console.log(Math.min(10,2,0,90,5,40,60))

    // let arr = [10,2,0,90,5,40,60]
    // todo console.log(Math.max(...arr))
    // console.log(d)
    // let [a,b,c,...d]=arr
    // let [x,...y]=[...d]
    // console.log()
    // let [l,m,n] = [...y]
    // todo find power
    // console.log(Math.pow(2,3))
    // todo it will give the random value between 0 and 1 
    //* console.log(Math.random()*1000)

    // !generate 4 digit OTP
    // *  let val =(Math.round(Math.random()*10000))
    // * if(val>999){
    // *     console.log(val)
    // * }else{
    // *     (Math.round(Math.random()*10000))
    // * }

//    todo find the square root
    // console.log(Math.sqrt(4))


    // !Asynchronous   js photo se apdna hai structure 6

// todo setTtimeout(Function code or function_name ,Timeout(in milliseconds))
// function printMeme(name="sanskar"){
//     console.log(name + " Gaddari Karbe..")
// }
// setTimeout(printMeme,2000)
// printMeme("sanskar")

//var a =1        //? Sync 
//console.log(a)  //? Sync
//console.log(a)  //? Sync
//console.log(a)  //? Sync
//setTimeout(()=>{console.log("Namstey Developer")},6000) //? Async
//console.log("line 13" + a)

// const heading = document.getElementById("root");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// let timer;
// startBtn.addEventListener("click",function(){
    // timer = setTimeout(function(){
        // document.body.style.cssText="background-color:black; color:white; border:1px solid yellow; ";
        // document.body.style.backgroundColor="black";
        // heading.style.color="white";
        // heading.style.color="white";
    // },2000)
// })
// 
// stopBtn.addEventListener("click",function(){
    // document.body.style.cssText="background-color:white; color:black;";
    // clearTimeout(timer)
// })

//! If we want to convert impure array or non array into array we use .from method
// const divs =document.querySelectorAll('div')
// const newArray=Array.from(divs)
// newArray.filter((val,i,array)=>{
//     const mid =Math.floor(array.length/2)
//     if(i>2){
//         val.style.color="deeppink"
//     }
// })










        
                            
                            


            
            
            
            
            
            
            










