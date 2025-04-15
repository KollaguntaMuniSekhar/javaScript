//closure is comnbination of function and lexical scope (it's required data)
//var name="macha"
// function OF(){
//     {
//         let name ="love"; //it will not print bcz of blockscoped

//     }
//     let name="Mar";
//     function InnerFu(){
//         //let name="Sekhar"
//         console.log(name);
//     }
//     InnerFu();
// }
// OF();





function outerFunction(){
    let name="Macha";
    function innerFunction(){
    console.log(name);
    }
    return innerFunction;
}
let inner =outerFunction();
inner();