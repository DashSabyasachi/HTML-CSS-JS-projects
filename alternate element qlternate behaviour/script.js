let arr = []
for(let i = 1; i<=10 ;i++){
    let h1 = document.createElement('h1');
    h1.innerText = `Heading ${i}`;
    arr.push(h1);  
}
// console.log(arr)
let contain = document.getElementById('container')
arr.forEach((h1,i)=>{  (i % 2 === 0)?h1.style.color = 'blue':h1.style.color = 'red'
    // if(i % 2 === 0){
    //     h1.style.color = 'blue'
    //     // h1.style.fontStyle ='italic'
    //     // h1.style.textAlign ='center'
    // }
    // else{
    //     h1.style.color = 'red'
    //     // h1.style.textAlign ='center'
    // }
    contain.append(h1)
})