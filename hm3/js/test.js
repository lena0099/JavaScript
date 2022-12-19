


let a = +prompt("введите число a" );
let b = +prompt("введите число b" );
let operation = prompt("введите операцию" );

function result (a, b, operation)
{

    switch (operation)
    {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "/":
            return a/ b;
        case "*":
            return a*b;
        default:
            return 0;
    }

    // if(operation=="+")
    // {
    //     return a+b;
    // }

}

console.log(result(a,b,operation));