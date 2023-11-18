let container = document.getElementById('shop')
const database = JSON.parse(localStorage.getItem('products'))


let basket = JSON.parse(localStorage.getItem('data')) || []
async function fetchData() {
    const url = "https://dummyjson.com/products"
    let res = await fetch(url)
    let db = await res.json()
    // console.log(data)
    // console.log(data.products)
    localStorage.setItem('products', JSON.stringify(db.products))
    // return basket
    generateCards()
    calculation()
}
fetchData()

function generateCards() {
    console.log(database);
    return (container.innerHTML = database.map((value) => {
        let { id, title, description, price, thumbnail } = value
        let search = basket.find((value) => value.id === id) || []
        return `
        <div class="item" id=product-id-${id}>
        <img width="220" src=${thumbnail} alt="">
        <div class="details">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg" style="color: red;"></i>
                <div id=${id} class="quantity">
                ${search.item === undefined ? 0 : search.item} 
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg" style="color: green;"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""))
}

// generateCards()

let increment = (identity) => {
    let selectedItem = identity;
    let search = basket.find((value) => value.id == selectedItem)

    // console.log(selectedItem);
    if (search == undefined) {
        basket.push({
            id: selectedItem,
            item: 1
        })
    }
    else {
        search.item += 1
    }
    // console.log(basket)
    update(selectedItem);
    localStorage.setItem('data', JSON.stringify(basket))
    calculation()
}

let decrement = (identity) => {
    let selectedItem = identity
    // console.log(identity)
    let search = basket.find((value) => value.id == selectedItem)
    if (search === undefined) {
        console.log('Item not in cart!!!');
        return
    }
    else if (search.item === 0) {
        return
    }
    else {
        search.item -= 1
    }

    update(selectedItem);

    basket = basket.filter((value) => value.item != 0)
    // console.log(basket);
    localStorage.setItem('data', JSON.stringify(basket))
    calculation()
}

let update = (identity) => {
    // console.log(identity)
    let search = basket.find((value) => value.id === identity)
    // console.log(search)
    document.getElementById(identity).innerHTML = search.item
}

let calculation = () => {
    let cartIcon = document.getElementById('cartAmount')

    // console.log(cartIcon)
    cartIcon.innerHTML = basket.map((value) => value.item).reduce((value, acc) => acc + value, 0)
    // console.log(x);
}




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



