import productsFunc from "./shopping.js"




//! add product to localStorage
(async function () {
    const photos = await fetch("./data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    productsFunc();
})();



const countItems = document.querySelector('.count')

countItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";


