const selectmainarea = document.querySelectorAll('.selectmainarea');
const selectdownmenu = document.querySelectorAll('.selectdownmenu');
const items = document.querySelectorAll('.selectdownmenu .item');

for(let i = 0 ; i < selectmainarea.length ; i++){
    selectmainarea[i].addEventListener('click' , (e) => {
        selectdownmenu[i].classList.toggle("active")
    })
}

for(let i = 0 ; i < items.length ; i++){
    items[i].addEventListener("click" , (e) => {
        selectmainarea[0].value = items[i].value;
        selectmainarea[1].value = items[i].value;
        selectmainarea[0].querySelector('img').src = items[i].querySelector('img').src;
        selectmainarea[0].querySelector('p').innerHTML = items[i].querySelector('p').innerHTML
        selectmainarea[1].querySelector('img').src = items[i].querySelector('img').src;
        selectmainarea[1].querySelector('p').innerHTML = items[i].querySelector('p').innerHTML
    })
}

