// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set Imeout Block")

//     },3000);//async always returns a promise
// }
//  let op =getData();
//await 
//fetch API
// async  function getData(){
//     //get request
//      let response =await fetch('https://jsonplaceholder.typicode.com/posts');
//      //prase json
//      let data= await response.json();
//      console.log(data);
// }
// getData();
//scenario:
//prepare url//api endpoint ->sync
//fetch data-> network call -> async(await - after this line only it will go further)
//process data->sync


// data add

// const myHeaders =new  Headers();
// myHeaders.append("content-Type","application/json");
// const url ="https://jsonplaceholder.typicode.com/posts";
// const options ={
//     method:"POST",
//     body:JSON.stringify({username:"Kollagunta Muni sekhar"}),
//     headers:myHeaders,

// };
// async function getData(){
//     const response = await fetch(url,options);
//     let data =await response.json();
//     console.log("MyData",data);

// }
// getData(); 


const myHeaders =new  Headers();
myHeaders.append("content-Type","application/json");
const url ="https://jsonplaceholder.typicode.com/posts";
const options ={
    method:"POST",
    body:JSON.stringify({username:"Kollagunta Muni sekhar"}),
    headers:myHeaders,

};
async function getData(){
    //const url ="https://jsonplaceholder.typicode.com/posts/101";
    const response = await fetch(url);
    let data =await response.json();
    console.log("MyData",data);

}
async function postData(){
    const response = await fetch(url,options);
    let data =await response.json();
    console.log("MyData",data);

}
async function processData(){
 await postData();
 await getData();
}
processData();