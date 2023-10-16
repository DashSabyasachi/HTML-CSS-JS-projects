let input = document.getElementById('input').value
let btn = document.getElementById('btn')
let word = document.getElementById('word')
let letter = document.getElementById('letter')

btn.addEventListener('click',()=>{
     let TotalWord = input.split().filter(Boolean).length;
     let TotalLetter = input.length;


    //  function countChars(countfrom,displayto) {
    //     var len = document.getElementById(countfrom).value.length;
    //     document.getElementById(displayto).innerHTML = len;
    //   }
     word.innerText = TotalWord;
     letter.innerText = TotalLetter;

})