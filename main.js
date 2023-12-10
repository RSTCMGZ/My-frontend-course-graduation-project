import productFunc from "./shopping.js"



async function getData() {
    const photos = await fetch("./data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : []
    productFunc()
}
getData()

const countItems = document.querySelector('.count')
countItems.innerHTML = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : '0';


