let button1 = document.getElementById('black')
let card = document.querySelector('.card')

function cardChanger1(){
   card.style.backgroundColor = 'black'
}

button1.addEventListener('click',cardChanger1)

let button2 = document.getElementById('blue')
function cardChanger2(){
   card.style.backgroundColor = 'blue'
}
button2.addEventListener('click',cardChanger2)


let button3 = document.getElementById('red')
function cardChanger3(){
   card.style.backgroundColor = 'red'
}
button3.addEventListener('click',cardChanger3)


let button4 = document.getElementById('orange')
function cardChanger4(){
   card.style.backgroundColor = 'orange'
}
button4.addEventListener('click',cardChanger4)