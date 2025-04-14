//code 1
let time =performance.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('P'
    );
    para.textContent ="This is para"+i;//for this 100 reflow and 100 repaint
    document.body.appendChild(para);
}
const t2=performance.now();
console.log("Total time by code1:"+(t2-time));


let t3 =performance.now();
let mydiv =document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent ='This is para'+i;
    mydiv.appendChild(para);

}
document.body.appendChild(mydiv);//1 reflow and 1 repaint
let t4= performance.now();
console.log("The second code to run "+(t4-t3));



//code2
//code 3
//best code
let t5=performance.now();
let fargement =document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let para =document.createElement('p');
    para.textContent = "this is para"+i;
    //no reflow no repaint
    fargement.appendChild(para);

    
}
//below takes one reflow 1 and repaint 1
document.body.appendChild(fargement);
let t6=performance.now();
const t7=t6-t5;
console.log("the best code"+t7);