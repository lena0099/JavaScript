document.addEventListener("keypress",e =>{
    checkColor();
    switch(e.key.toLowerCase()) {
        case 'enter':
            let enter= document.getElementsByClassName("btn")[0];
            enter.style.backgroundColor="blue";
            break;
        case 's':
            let s = document.getElementsByClassName("btn")[1];
             s.style.backgroundColor="blue";
            break;
        case 'e':
            let e= document.getElementsByClassName("btn")[2];
            e.style.backgroundColor="blue";
            break;
        case 'o':
            let o= document.getElementsByClassName("btn")[3];
            o.style.backgroundColor="blue";
            break;
        case 'n':
            let n= document.getElementsByClassName("btn")[4];
            n.style.backgroundColor="blue";
            break;
        case 'l':
            let l= document.getElementsByClassName("btn")[5];
            l.style.backgroundColor="blue";
            break;
        case 'z':
            let z= document.getElementsByClassName("btn")[6];
            z.style.backgroundColor="blue";
            break;

    }

    })

function checkColor(){
    let list=document.getElementsByClassName("btn");
    for(let i=0;i<list.length;i++)
    {
        if(list[i].style.backgroundColor==="blue") {
            list[i].style.backgroundColor="black";
        }
    }
}

