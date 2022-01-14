const selectmainarea = document.querySelector('.selectmainarea');
const selectdownmenu = document.querySelector('.selectdownmenu');
const items = document.querySelectorAll('.item');

selectmainarea.addEventListener('click' , (e) => {
    selectdownmenu.classList.toggle("active")
})

for(let i = 0 ; i < items.length ; i++){
    items[i].addEventListener("click" , (e) => {
        selectmainarea.value = items[i].value;
        selectmainarea.querySelector('img').src = items[i].querySelector('img').src;
        selectmainarea.querySelector('p').innerHTML = items[i].querySelector('p').innerHTML
    })
}

