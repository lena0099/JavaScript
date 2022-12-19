
function tooList(array, parent= document.body) {
    let ul = parent.appendChild(document.createElement('ul'));
    let liItems = array.map((item) => {
          // if (Array.isArray(item)) {
          //     return tooList(item);
          // } else {
             return ul.innerHTML+=  `<li> ${item} </li>`;
         // }
      });
       // liItems.forEach((item)=>{ul.appendChild(item)});
        return parent.appendChild(ul);
 }
 let div= document.querySelector("div")

tooList(["1", "2","3", "sea", "user", 23],document.body);
// window.onload = function () {
//     viewArray(test1);
// };


// let newarr=["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];;
//
// function tooList(arr, parent= document.body)
// {
//  parent.insertAdjacentHTML("beforebegin","ul");
//     let items = arr.map((item)=>{
//         if(Array.isArray(item)){
//             return tooList(item);
//         }
//         else {
//             let li=`<li> ${item} </li>`;
//            return  parent.createElement(li);
//
//         }
//     });
//     items.forEach((item)=>{ul.appendChild(item)});
//     return ul;
// }
//
// tooList(newarr);
//
//
// let newarr=["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];;
//
// //console.log(filterBy(['world', 23, '23', null],'string'));
//
// let friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Павел"];
// let ul="ul"
//
// document.body.innerHTML="<ul>";
// friends.forEach(function(item, i, arr) {
//     document.body.innerHTML=`<li> ${item} </li>`;
// });
// document.body.innerHTML="<ul>";

