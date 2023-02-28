const startBtn=document.getElementById("start");
const pauseBtn=document.getElementById("pause");
const resetBtn=document.getElementById("reset");
const castBtn=document.getElementById("cast");
const time=document.getElementById("time");
const casttime=document.getElementById("casttime");
startBtn.addEventListener('click',start);
pauseBtn.addEventListener('click',pause);
resetBtn.addEventListener('click',reset);
castBtn.addEventListener('click',cast);

let interval=null;
let millisecond=0;
let casttm=0;
function timeControl(){
    millisecond=millisecond+10;
    let m=millisecond%1000
    let sec=Math.floor(millisecond/1000);
    let min=Math.floor(sec/60);
    sec=sec%60
    let hrs=Math.floor(min/60);
    min=min%60
    hrs=hrs%24
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(m<10){
        m="00"+m;
    }
    time.innerHTML=`${hrs}:${min}:${sec}:${m}`
}

function start(){
    resetBtn.disabled=false;
    pauseBtn.disabled=false;
    startBtn.disabled=true;
    castBtn.disabled=false;
    if(interval){
        return
    }
    interval=setInterval(timeControl,10);
}
function pause(){
    clearInterval(interval);
    interval=null;
    if(pauseBtn.innerText=="Pause"){
       pauseBtn.innerText="Continue"
    }else{
        pauseBtn.innerText="Pause"
        start();
    }
}
function reset(){
    clearInterval(interval);
    interval=null;
    millisecond=0;
    if(pauseBtn.innerText=="Continue"){
        pauseBtn.innerText="Pause"
     }
    time.innerHTML="00:00:00:000";
    resetBtn.disabled=true;
    pauseBtn.disabled=true;
    startBtn.disabled=false;
    castBtn.disabled=true;
}
function cast(){
    if(interval){
           casttime.innerHTML='#cast1:'+time.innerHTML;
    }
}