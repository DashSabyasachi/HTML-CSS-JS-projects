let input = document.getElementById('input')
let btn = document.getElementById('btn')
let word = document.getElementById('word')
let letter = document.getElementById('letter')

const countWords = () =>{
     let words = input.value.split(' ').length;
     word.innerText = words
}
btn.addEventListener("click",countWords)

btn.addEventListener('click',()=>{
     let x = input.value.split(' ').join("").length 
     letter.innerHTML = x;
})