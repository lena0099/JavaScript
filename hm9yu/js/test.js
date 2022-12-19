
const filterBox = document.querySelectorAll('.box');
const filterElement=document.querySelectorAll(".filter-element");

function removeActive(){
    for(let i=0;i<filterElement.length;i++){
        filterElement[i].classList.remove("filter-active");
    }
}
let tooShow=12;
let c=24;

let count = 0;
let arr = [...document.querySelectorAll('.col-auto')];
function firstshow() {
    for (let i = 0; i < arr.length; i++)
    {
        arr[i].classList.add("hide");
    }
}

function show(arr)
{
    if (arr.length<=tooShow){
        document.getElementById("work-block-button").style.display="none";
    }

    for (let i = 0; i < tooShow; i++) {
        arr[i].classList.remove("hide");
    }
    for (let i = 0; i < tooShow; i++) {
        arr.shift();
    }

}


firstshow();
debugger
firsttooshow();

function firsttooshow(){

    for (let i = 0; i < tooShow; i++) {
        arr[i].classList.remove("hide");
    }
    for (let i = 0; i < tooShow; i++) {
        arr.shift();
    }
}
console.log(arr.length);

document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    removeActive();
    event.target.classList.add("filter-active");
    let filterClass = event.target.dataset['f'];
      arr=[];
     count=0;
    document.getElementById("work-block-button").style.display="flex";


    for (let i = 0; i < filterBox.length; i++) {
        filterBox[i].classList.add('hide');
        if (!filterBox[i].classList.contains(filterClass) && filterClass !== 'All') {
            filterBox[i].classList.add('hide');

        }
        else if (filterClass === 'All')
        {
            arr[count]=filterBox[i];
            count++;
        }
        else if((filterBox[i].classList.contains(filterClass)) && filterClass !== 'All') {

            arr[count]=filterBox[i];
            count++;
        }
    }
    show(arr);


});





document.querySelector('.load-img').addEventListener('click', (event) => {

   show(arr);
});




       function createbackforimage() {
           let card = document.getElementsByClassName("box")
           for (let i = 0; i < card.length; i++) {
               if (card[i].classList.contains("Graphic_Design"))
                   card[i].append(back("Graphic Design"));
               if (card[i].classList.contains("Web-Design"))
                   card[i].append(back("Web Design"));
               if (card[i].classList.contains("Landing_Pages"))
                   card[i].append(back("Landing Pages"));
               if (card[i].classList.contains("Wordpress"))
                   card[i].append(back("Wordpress"));

           }
       }

       function back(type) {

           let backImg = createElement('div', ['back']);

           // let faLink = createElement('a', ['fa', 'fa-link']);
           // faLink.setAttribute('aria-hidden', true);
           // backImg.append(faLink);
           //
           // let faSearch = createElement('a', ['fas', 'fa-search']);
           // backImg.append(faSearch);
           let icon = createElement("img", ["icon"]);
           icon.src = "img/icon/icon.png";
           backImg.append(icon);
           let cardBackTitle = createElement('p', ['card-back-title']);
           cardBackTitle.innerHTML = 'creative design';
           backImg.append(cardBackTitle);

           let cardBackText = createElement('p', ['card-back-text']);
           cardBackText.innerHTML = type;
           backImg.append(cardBackText);
           return backImg;


       }

       function createElement(tag, classesToCss, datasetName, dataset) {
           let element = document.createElement(tag);
           if (classesToCss) {
               classesToCss.forEach((cls) => {
                   element.classList.add(cls);
               });
           }
           if (dataset) {
               for (let i = 0; i < datasetName.length; i++) {
                   element.dataset[datasetName[i]] = dataset[i];
               }
           }
           return element;
       }

       createbackforimage();

