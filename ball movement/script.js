let up = document.getElementById('top')
let right = document.getElementById('right')
let bottom = document.getElementById('bottom')
let left = document.getElementById('left')
let ball = document.getElementById('ball')

 up.addEventListener('click',()=>{
    ball.style.transform = "translateY(-150px)" 
    ball.style.transition = " all 1s ease 0.1s "   
})

right.addEventListener('click',()=>{
    ball.style.transform = "translateX(150px)" 
    ball.style.transition = " all 1s ease 0.1s "
    })

bottom.addEventListener("click",()=>{
    ball.style.transform = "translateY(150px)" 
    ball.style.transition = " all 1s ease 0.1s "
})

left.addEventListener("click",()=>{
    ball.style.transform = "translateX(-150px)" 
    ball.style.transition = " all 1s ease 0.1s "
})

setTimeout(() => {
    window.location.reload();
  }, 3000);