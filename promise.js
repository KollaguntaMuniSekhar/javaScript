// let firstPromise = new Promise((resolve,reject)=>
// {
//     //console.log("Hello World");
//     //resolve(100);
//     //reject(new Error("Internal Server Error"));
//     setTimeout(function sayMyName(){
//         console.log('Kollagunta Muni Sekhar');
//     },10000);
//     resolve(1) ;
   
// });


//promise




// let promise1 =new Promise((resolve,reject)=>{
//     let success =0;
//     if(success){
//         resolve("10");
//     }
//     else{
//         reject("Internal Server Error");
//     }

// });
// promise1.then((message)=>{
//     console.log('first message'+message);
//     return"Promise fullfilled second message";


// }).then((message)=>{
//     console.log("second message"+message);
//     return"Promise fullfilled third message";
// }).then((message)=>{
//     console.log("Third Message"+message);//promise chaning or multiple then's
// }).catch((error)=>{
//     console.error(error);
// }       ).finally((message)=>{
//     console.log("May tho final i always run")
// })








// promise1.then((message) =>{
//     console.log("Then message is "+message);
// }).catch((error)=>{
//     console.log("Error"+error);
// }) //for single then catch







let promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'first');
})
let promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Second');
})
let promise3 =new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,'Third');
})
let promise4 =new Promise((resolve,reject)=>{
    setTimeout(reject,4000,'forth');
})
Promise.all([promise1,promise2,promise3,promise4])
.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error("Error"+error);
})