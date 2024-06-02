
let base_url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_xb0QSFaaMOAxGCIxxxOZ6fnyTUQVQqe19CaaZkWN&currencies=INRhttps://api.currencyapi.com/v3/latest?apikey=cur_live_xb0QSFaaMOAxGCIxxxOZ6fnyTUQVQqe19CaaZkWN&`;
let select=document.querySelectorAll(".selection select");
let sel1=document.getElementById("select1");
let sel2=document.getElementById("select2");
let input=document.getElementById("three");
let img=document.getElementsByClassName("img");
let button=document.getElementById("button");
let msg=document.getElementById("message");
let val1=document.querySelector("#select1");
let val2=document.querySelector("#select2");

for (let x of select){
for (let key in countryList){
    let option=document.createElement("option");
    option.innerHTML=key;
    option.value=key;
    x.append(option);
}}
for (let x of sel1){
    if (x.value=="USD") {
        x.selected="selected";
    }
}
for (let y of sel2){
    if (y.value=="PKR") {
        y.selected="selected";
    }
}

sel1.addEventListener("change",(evt)=>{img1(evt.target)});
sel2.addEventListener("change",(evt)=>{img2(evt.target)});
function img1 (element){
    let x=element.value;
    let y=countryList[x];
    img[0].src=`https://flagsapi.com/${y}/flat/64.png`;
    return x;
}
function img2 (element){
    let x=element.value;
    let y=countryList[x];
    img[1].src=`https://flagsapi.com/${y}/flat/64.png`;
}

button.addEventListener("click",myfunction);
async function myfunction (){
    if (input.value<=0 || isNaN(input.value)){
        input.value=1;
    }
    let inpval=input.value;
    let url=`${base_url}currencies=${val2.value}&base_currency=${val1.value}`;
    let x=await fetch(url);
    let y=await x.json();
    let z=y.data[val2.value].value;
    let finalval=z*inpval;
    let str=`${inpval} ${val1.value} = ${finalval} ${val2.value}`;
    msg.innerHTML=str;
}