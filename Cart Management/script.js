const product = [
    {
        id: 0,
        image: 'image/bb-0.png',
        title: 'Book- We Could Be So Good',
        price: 500,
    },
    {
        id: 1,
        image: 'image/rr-1.png',
        title: 'Gold Ring',
        price: 17000,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 23000,
    },
    {
        id: 3,
        image: 'image/hh-2.jpg',
        title: 'Ear Buds',
        price: 5000,
    },
    {
        id: 4,
        image: 'image/gg-1.jpg',
        title: '250D DSLR Camera',
        price: 23000,
    },
    {
        id: 5,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 1000,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function clearCart() {
    cart = [];
    displaycart(); 
}

function displaycart(){
    let j = 0, total=0 ,sf = 0 ;

    for (const item of cart) {
        total += item.price;
    }

    if (total > 10000) {
        sf = 0;
    } else {
        sf = 500;
    }

    const gt = total + sf; 
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
        document.getElementById("sf").innerHTML = "₹ "+0+".00";
        document.getElementById("gt").innerHTML = "₹ "+0+".00";
    
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
          
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        document.getElementById("total").innerHTML = "₹ "+total+".00";
        document.getElementById("sf").innerHTML = "₹ "+sf+".00";
        document.getElementById("gt").innerHTML = "₹ "+gt+".00";
    }
 
}