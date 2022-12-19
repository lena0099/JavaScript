debugger
let titleList = document.getElementById('list');
let titleListInformation = document.getElementById('list-information');
//
function hiddenElements(elements){
    for(let i =0;i<elements.childElementCount;i++){
        if(elements.children[i].hidden === false) {
            elements.children[i].hidden = true;
        }
    }
}

function lookElement(attribute) {
    hiddenElements(titleListInformation);
    let children = titleListInformation.children;
    for(let i = 0;i<children.length;i++){
        if(children[i].dataset.item===attribute){
            children[i].hidden = false;
        }
    }
}

hiddenElements(titleListInformation);

titleList.onclick = function (event) {
    let target = event.target;
    let children = titleList.children;
    let children2=titleListInformation.children;
    for(let i =0;i<children.length;i++){
        if(children[i].classList.contains("active")){
            children2[i].classList.remove("active");
            children[i].classList.remove("active");

        }
    }
    target.classList.add("active");

    lookElement(target.dataset.item);
};

