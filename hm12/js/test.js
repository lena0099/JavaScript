let showBtn=document.createElement("button");
showBtn.textContent="Возобновить показ";
document.body.append(showBtn);
let stopShowBtn=document.createElement("button");
stopShowBtn.textContent="Прекратить";
document.body.append(stopShowBtn);

let i=0;
let  img=document.getElementsByClassName("image-to-show")[i];
function timer(){

    if(i>=0){
        img.style.display="none";
    }
    img=document.getElementsByClassName("image-to-show")[i];
    img.style.display="flex";
    i ++;

    if (i >= 4) {
        i=0;
    }
}

let interval=setInterval(timer, 3000);

stopShowBtn.addEventListener("click", function (){
    clearInterval(interval);
})

showBtn.addEventListener("click",function (){
    interval = setInterval(timer, 3000);
})
