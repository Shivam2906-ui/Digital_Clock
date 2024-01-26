let hoursE1= document.getElementById("hours");
let minutesE1= document.getElementById("minutes");
let secondsE1= document.getElementById("seconds");
let ampmE1=document.getElementById("ampm");

function updateE1(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= "AM";

    if(h>12){
        h=h-12;
        ampm="PM";
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hoursE1.innerText=h;
    minutesE1.innerText=m;
    secondsE1.innerText=s;
    ampmE1.innerText=ampm;
    setTimeout(()=>{
        updateE1();
    },1000);

}
updateE1();