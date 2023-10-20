let plus = document.getElementById('plus')
let countElement = document.getElementById('countElement')
let minus = document.getElementById('minus')
let count = 0

    plus.addEventListener('click',()=>{
     count++
     countElement.innerText = count;
     minus.style.visibility='visible';
    })

    minus.addEventListener('click',()=>{
        if(count>0){
            count--
            countElement.innerText = count   
        }
        else if(count===0){
            minus.style.visibility ='hidden'
        }      
    })
    
    