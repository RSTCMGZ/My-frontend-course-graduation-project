import productsFunc from "./shopping.js"




//! add product to localStorage
async function getData() {
    const photos = await fetch("./data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");

localStorage.setItem('cart', JSON.stringify([]))