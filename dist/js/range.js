// Range Input
const month = document.querySelector('.month')
const cashBack = document.querySelector('.cash-back')
const input = document.querySelector('.input')
// Range Input
input.addEventListener('input', ()=>{
    month.textContent = input.value
    cashBack.textContent = input.value *100
 })