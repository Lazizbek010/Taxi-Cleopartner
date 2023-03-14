'use strict';
// Selectors
// Chat selectors close-chat-menu 
const chat = document.querySelector('.chat');
const chatMenu = document.querySelector('.chat-menu');
const closeChatMenu = document.querySelector('.close-chat-menu');
// FAQ
const faqInfoListItem = document.querySelectorAll('.faq__info__list-item');
const faqInfoListItemDesc = document.querySelectorAll('.faq__info__list-item-desc');
// ToTopBtn
const toTop = document.querySelector('.toTop')
// Bars
const bars = document.querySelector('.bars')
const resNav = document.querySelector('.resNav')
const resNavBars = document.querySelector('.resNav-bars')
bars.addEventListener('click', ()=>{
    bars.classList.toggle('showBars')
    resNav.classList.toggle('active')
})
resNavBars.addEventListener('click', ()=>{
    resNav.classList.remove('active')
    bars.classList.remove('showBars')
})



// ----------------------------------------------------
// Events
// Chat event
chat.addEventListener('click', ()=>{
    chatMenu.classList.toggle('scale')
})
closeChatMenu.addEventListener('click', ()=>{
    chatMenu.classList.remove('scale')
})
// FAQ
faqInfoListItem.forEach((li, i)=>{
    li.addEventListener('click', (e)=>{
        li.classList.toggle('show')
        faqInfoListItemDesc.forEach((pi, j)=>{
            if(i === j){
                pi.classList.toggle('show')
            }
        })
    })
})


window.addEventListener('scroll', ()=>{
    if(window.scrollY > 210){
        toTop.classList.add('fade')
    }else{
        toTop.classList.remove('fade')
    }
})
toTop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})