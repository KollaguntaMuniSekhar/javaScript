var x=8;
function example(){
    var x=10;
    console.log(x);
    //var can be accessed with in a block
    console.log("Hello World");
}//by using we can re assignment is possible
example();
console.log(x); // for this it will not excute if we uncomment it
{
    let a=10;//no re-assignment
    a=12;
    a=13;
    a="Code";
    console.log(a);

}
const d=25;
console.log(d);
// vaeiable is named Memory Location
    //no re-define no reassignment
/* we cannot use var
we can use generally let
for constant value we use const
variable naming covention 
 starting with number,_,$
 no space
 camel case:like eg: ageOfStudent
 make Meaning full variable Not like var a,var b, var c like var marksOfStudent
 No reserved Keyword*/
 /*Datatypes primitive datatypes and non-primitive datatypes
 p types
 Number: 1,2,1.5,1.7
 String; seqence of characters
 boolean:True or  False
 undefined:
 null:null is a object when we use typeof()
 BigInt--> (2)53-1
 symbol*/
 let marks=20.12345;
 marks="Words";
 marks= true;
 console.log(marks);
 let Buttowski;
 console.log(Buttowski);
 let kick=null;
 console.log(kick);
 let Tom=12347271897482789478127487238479827482738478237487284723874828498230472303479823748373847238473834734727423747472347374837
 2462342428390489284098948239489234923848098230948238938423840923482309823849238988348248938889483094928489837777232438423773424436;
 console.log(typeof(Tom));
//  // Creating a Symbol
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");

// Symbols are unique
console.log(symbol1 === symbol2); // Output: false

// Using Symbols as object properties
let myObject = {};
let mySymbol = Symbol("myProperty");

myObject[mySymbol] = "Value";
console.log(myObject[mySymbol]); // Output: Value




