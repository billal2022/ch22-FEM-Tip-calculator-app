const billSpan=document.getElementById("bill")
const numofpSpan=document.getElementById("numofp")

const persSpan=document.querySelectorAll(".percentage")
const customSpan= document.querySelector("custom")
const errorSpan= document.querySelector(".error")
const tipamountSpan= document.querySelector(".tipamount")
const totalSpan= document.querySelector(".total")
 
numofpSpan.value=1;
billSpan.value=0;



numofpSpan.addEventListener("input",()=>{
    const numofpvalue = numofpSpan.value;
    totalSpan.innerText="$"+ parseFloat(billSpan.value/numofpvalue);

})

billSpan.addEventListener("input",()=>{
    const billvalue = billSpan.value;
    const numofpvalue = numofpSpan.value;
    totalSpan.innerText ="$"+ parseFloat(billvalue/numofpvalue);

})
let valuetip = 1;

persSpan.forEach((e)=>{
    e.addEventListener("click",()=>{
        let valuetip = 1;
valuetip = parseFloat(e.innerText)/100    
  tipamountSpan.innerText="$"+ parseFloat(billSpan.value)*valuetip/parseFloat(numofpSpan.value);
    })
    })
 
    const reset = document.getElementById("reset")
