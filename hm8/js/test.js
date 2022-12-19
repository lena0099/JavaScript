let input=document.createElement("input")
input.type='text'

document.body.append(input)
input.style.marginTop="0px"
input.style.marginLeft="100px"
let slogan=document.createElement("h2")
slogan.textContent="Price"
slogan.style.paddingLeft="20px"
slogan.style.paddingTop="50px"
document.body.prepend(slogan)
let result=document.createElement("span")
document.body.before(result)
result.style.marginLeft="100px"
let button =document.createElement("button")
button.style.display="none"
button.style.width="15px";
button.style.height="20px";
button.textContent="X"
button.style.paddingLeft="1px"

document.body.before(button)
console.log(input.value);
input.onchange = function() {
    if (input.value>=0){
        result.innerHTML = "     Текущая цена: " + input.value;
        input.style.color="green"
        button.style.marginLeft="40px"
        button.style.display="inline";
        result.style.display="inline"
    }
    else {
        result.innerHTML="     Please enter correct price"
        input.style.border = "3px solid red";
        input.style.color="black"
        button.style.marginLeft="40px"
        button.style.display="inline";
        result.style.display="inline"
    }
};

function deleteMassage(){
    result.style.display="none";
    button.style.display="none";
    input.value= "0";
}


function borderColor() {
    this.style.borderColor = 'green';
     this.style.border = "4px solid green";

}
function border() {
    this.style.border = "1px solid black";
}

input.addEventListener("focus", borderColor)
input.addEventListener("mouseover", borderColor)
input.addEventListener("mouseleave",border)
button.addEventListener("click",deleteMassage )