function getSrcImgInFolder(folder,nameImg,amountImg,format){
    let array = [];
    for(let i =0;i<amountImg;i++){
        array[i]=`img/${folder}/${nameImg}%20(${i+1}).${format}`;
    }
    return array;
}
//region work bock
workBlockButton = document.getElementById('work-block-button');
uploadingPictures = document.getElementById('uploading-pictures');
workBlockItems = document.getElementById('work-block-items');
containerLoad = document.querySelectorAll('.container-load');
//массив массивов всех путей к картинкам
allImg = [
    getSrcImgInFolder('graphic_design','graphic-design',36,'jpg'),
    getSrcImgInFolder('landing_page','landing-page',36,'jpg'),
    getSrcImgInFolder('web_design','web-design',36,'jpg'),
    getSrcImgInFolder('wordpress','wordpress',36,'jpg')
];
//region work block
ourServices = document.getElementById('ourServices');
//событие на выбор табки
function selectTabs(targetElement,activeClass){
    let lastActiveElement = document.querySelector(`.${activeClass}`);
    if(lastActiveElement){
        lastActiveElement.classList.remove(activeClass);
        targetElement.classList.add(activeClass);
    }
}
//событие на выбор категории
workBlockItems.addEventListener('click',function (event) {
    let target = event.target;
    selectTabs(target,'work-block-link-check');
    dataSetNumberCurrent = +target.dataset.number;
    workBlockButton.style.display = "flex";
    if(dataSetNumberCurrent===0){
        removeChild(uploadingPictures);
    }
    addImages();
    event.preventDefault();

});
//событие на клик кнопки подгрузки фото
workBlockButton.addEventListener('click', function () {
    eventButtonGeneralLoad(0,countNumberWork,workBlockButton,function(){
        countNumberWork++;
        addImages();
    });
});
//загрузка фото при первой загрузке фото
generationAllCategoryImg();
//end region work block






function addImages() {
    //оставить только 1 категорию стальные удалить
    if (dataSetNumberCurrent===0){
        generationAllCategoryImg();
    }
    else {
        let remove = filter();
        if(remove>12){
            remove = 12 - uploadingPictures.children.length;
        }
        if(remove<=0){
            remove=12;
        }
        for (let i =0;i<remove;i++){
            uploadingPictures.append(addImg());
        }
    }
}