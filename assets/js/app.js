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

const mobileopenmenu = document.querySelector('.mobileopenmenu');
const haburgermenuicon = document.querySelector('.haburgermenuicon');
const header = document.querySelector('.header');

haburgermenuicon.addEventListener('click' , (e) => {
    mobileopenmenu.classList.toggle('active')
    haburgermenuicon.classList.toggle('is-active')
    header.classList.toggle('active')
})

const filtertarget = document.querySelector('.recomendedproperties .filtertarget')
const filteritems = document.querySelectorAll('.realfiltercontents .item')
const targetbtns = document.querySelectorAll('.recomendedproperties .filtertarget .tragetbtn')

filtertarget.addEventListener('click' , (e) => {
    if(e.target.classList.contains('tragetbtn')){
        for(let i = 0 ; i < targetbtns.length; i++){
            targetbtns[i].classList.remove('active')
        }
        for(let i = 0 ; i < filteritems.length; i++){
            filteritems[i].classList.remove('active')
        }
        console.log(e.target.getAttribute('data-target'))
        e.target.classList.add('active')
        if(e.target.getAttribute('data-target') == 'all'){
            for(let i = 0 ; i < filteritems.length; i++){
                filteritems[i].classList.add('active')
            }
        }
        else{
            for(let i = 0 ; i < filteritems.length ; i++){
                if( e.target.getAttribute('data-target') === filteritems[i].getAttribute('data-kind')){
                    console.log(filteritems[i].getAttribute('data-kind'))
    
                    filteritems[i].classList.add('active');
                }
            }
        }
    }
})