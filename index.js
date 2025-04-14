
function alertPara(event){
   // alert("You have clicked on para:"+event.target.textContent);
    if(event.target.nodeName ==='SPAN'){
        alert("You have clicked on para:"+event.target.textContent);
    }
}
let mydiv =document.getElementById('wrapper');
document.addEventListener('click',alertPara);