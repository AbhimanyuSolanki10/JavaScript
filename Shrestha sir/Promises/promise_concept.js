//PROMISE 
//1:- It is an Object 
//2:- In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
// A promise may have one of three states.
//! Pending
//! Fulfilled
//! Rejected

// todo    task 1

//todo How to create a Promise
// let promiseOne=new Promise(function(resolve,reject){
//         console.log("Promis task-1")
//! jo pehle mil jayga vo stateresult mai ayge like if we call first resolve then promise will be resolved vise versa
//         resolve();
//         reject();
// });
// console.log(promiseOne)

// todo    task 2

// let promise2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("mai apse kuch maang sakta hu kya....!")
//         resolve();
//         reject();
//     }, 5000);
// })
// console.log(promise2)


// todo    task 3

// let promise3 = new Promise(function(resolve,reject){
//     console.log("asy task-3")
//     resolve("Successfull.....!!!");
// })
// console.log(promise3)

// promise3.then(function(response){
//     console.log(response)
// })


// let promise4 = new Promise((resolve,reject)=>{
//     console.log("async task-4")
//     let reply = "Yes";
//     if (reply=="Yes") {
//         console.log("angel Priya fall in love");
//         resolve("Mele babu ne thana thaya....");
//     } else {
//         console.log("angel Priya replied NO...")
//         reject("I have a Boyfriend")
//     }
// })
// console.log(promise4)

// promise4
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })

// .finally(function(){
//     console.log("Vo stree h kuch bhi kar sakti hai....!!")
// })
