//
// let name= prompt("What is your name?",'noname' );
// let age= +prompt("How old are you", '18' );
//


function checkName(name) {
     name= prompt("What is your name?", "name");
    if (name==""){
        name = checkName(name);
    }
    return name;
}

function checkAge( age ) {
    age = +prompt("How old are you?", "18");
    if (!isNaN(age) && age!="") {
        return age;
    }
   else {age = checkAge(age)};

}

let name= checkName();
let age=checkAge();

if(age<18)
{
    alert("You are not allowed to visit this website");
}
else if (age>=18 && age<=22)
{
    let con = confirm("Are you sure you want to continue?");
    if (con == true )
    {
        alert( `Welcome, ${name}!` );
    }
    else { alert("You are not allowed to visit this website.")}
}
else if(age>22){
    alert( `Welcome, ${name}!` );
}