const input = document.getElementById("input");
const para = document.getElementById("par");
const butn = document.getElementById("butn");
const Cbutn = document.getElementById("Cbutn");

 


butn.addEventListener('click', () =>{

let a = parseInt(input.value)
for(let i = 1 ; i <= 10 ; i++){
if (!isNaN(a)) {
    let result = number(a);
  para.innerHTML += `${a} x ${i} = ${i*a} <br>` 
//   para.style.backgroundColor = "silver";
  para.style.borderRadius = "20px"
  para.style.padding = "10px";
  para.style.textAlign = "center";
    // console.log('this is a ',a);

}
// else if(!isNaN(a) ){


// }


else{
    // alert('Please enter a number');
    para.innerHTML = "you have entered a wrong data type"  ;
    // para.style.color = "red";
    // para.style.fontWeight = "bolder";
    // para.style.wordSpacing = "2px";
    // para.style.textShadow = "2px 2px 10px white";
}

}
});
function number(a){
    return a
}




Cbutn.addEventListener('click', ()=> {
para.innerHTML = null ;
input.value = null;




})
















// table of  11
let multi11 = document.getElementById("multi_11");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('11 *', i ,'=', i*11);
    multi11.innerHTML += `11 * ${i} = ${i*11} <br>`;
    multi11.style.backgroundColor = "silver";
}






// table of  12
let multi12 = document.getElementById("multi_12");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('12 *', i ,'=', i*12);
    multi12.innerHTML += `12 * ${i} = ${i*12} <br>`;
    multi12.style.backgroundColor = "orange";
}







// table of  13
let multi13 = document.getElementById("multi_13");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('13 *', i ,'=', i*13);
    multi13.innerHTML += `13 * ${i} = ${i*13} <br>`;
    multi13.style.backgroundColor = "pink";
}








// table of  15
let multi14 = document.getElementById("multi_14");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('14 *', i ,'=', i*14);
    multi14.innerHTML += `14 * ${i} = ${i*14} <br>`;
    multi14.style.backgroundColor = "red";
}



// table of  15
let multi15 = document.getElementById("multi_15");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('15 *', i ,'=', i*15);
    multi15.innerHTML += `15 * ${i} = ${i*15} <br>`;
    multi15.style.backgroundColor = "orange";
}





// table of  16
let multi16 = document.getElementById("multi_16");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('16 *', i ,'=', i*16);
    multi16.innerHTML += `16 * ${i} = ${i*16} <br>`;
    multi16.style.backgroundColor = "grey";
}







// table of  17
let multi17 = document.getElementById("multi_17");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('17 *', i ,'=', i*17);
    multi17.innerHTML += `17 * ${i} = ${i*17} <br>`;
    multi17.style.backgroundColor = "blue";
}








// table of  19
let multi18 = document.getElementById("multi_18");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('18 *', i ,'=', i*18);
    multi18.innerHTML += `18 * ${i} = ${i*18} <br>`;
    multi18.style.backgroundColor = "green";
}







// table of  19
let multi19 = document.getElementById("multi_19");

for(let i = 1 ; i <= 20 ; i++){

    // console.log('19 *', i ,'=', i*19);
    multi19.innerHTML += `19 * ${i} = ${i*19} <br>`;
    multi19.style.backgroundColor = "yellow";
}



   //table of 20 
   let multi20 = document.getElementById("multi_20");

   for(let i = 1 ; i <= 20 ; i++){

    // console.log('20 *', i,'=', i*20)
    multi20.innerHTML += `20 * ${i} = ${i*20}<br>`
    multi20.style.backgroundColor = "pink"
   
}


    //table of 21 
let multi21 = document.getElementById("multi_21");

   for(let i = 1 ; i <= 20 ; i++){

    // console.log('21 *', i,'=', i*21)
    multi21.innerHTML += `21 * ${i} = ${i*21}<br>`
    multi21.style.backgroundColor ="purple"
   
}