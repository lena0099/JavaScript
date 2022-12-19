
let submit=document.getElementById("submit");
let slogan =document.createElement("p");
slogan.className="slogan";
slogan.style.color="red";
slogan.style.width="300px";
slogan.style.marginTop="5px";
slogan.textContent="Нужно ввести одинаковые значения";
slogan.style.display="none";
document.getElementById("password2").insertAdjacentElement('afterend', slogan);

submit.onclick=function(event) {
    slogan.style.display="none";
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    if(password1===password2)
    {
        alert("You are welcome");
    }
    else {
        slogan.style.display="inline-block";
    }
}

function downIcon(password,icon)
{
    icon.className+=" fa-eye-slash";
    password.type="text";

}
function  upIcon (password,icon)
{
    icon.className = "fas fa-eye icon-password";
    password.type="password";

}

let icon1=document.getElementById("i1");
icon1.addEventListener("mousedown",(e) => { downIcon(document.getElementById("password1"),icon1); });
icon1.addEventListener("mouseup",(e) => { upIcon(document.getElementById("password1"),icon1) ;});

let icon2=document.getElementById("i2");
icon2.addEventListener("mousedown",() => { downIcon(document.getElementById("password2"),icon2); });
icon2.addEventListener("mouseup",() => { upIcon(document.getElementById("password2"),icon2) ;});
