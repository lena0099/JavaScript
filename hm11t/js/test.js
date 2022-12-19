// let selectedTd;
// document.onclick= function(e)  {
//     let target = e.target; // где был клик?
//
//     if (target.className !=="btn") return; // не на TD? тогда не интересует
//
//     highlight(target); // подсветить TD
// };
//
// function highlight(target){
//     if (selectedTd) {
//         selectedTd.classList.remove('highlight');
//     }
//     selectedTd = target;
//     selectedTd.classList.add('highlight');
// }
let btn = document.querySelectorAll('.btn');

document.addEventListener("click",function (e){
    let target=e.target;
    if(target.classList.contains('btn'))
    {
       setColorMouse(target)
    }
})
document.addEventListener("keypress", function (e  ){
  let  key=e.key;
  setColor(key);
})
function setColorMouse(target)
{
    checkColor();
    target.style.backgroundColor="blue";
}

function setColor(key){
    for(let i =0; i<btn.length;i++){
        if(btn[i].innerHTML.toUpperCase()===key.toUpperCase()) {
            checkColor();
            btn[i].style.backgroundColor = "blue";
        }
    }
}
function checkColor(){
    for(let i=0;i<btn.length;i++)
    {
        if(btn[i].style.backgroundColor==="blue") {
            btn[i].style.backgroundColor="black";
        }
    }
}