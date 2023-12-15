import { cart } from "./shopping.js"

function displayBasketProduct() {
    const basket = document.querySelector(".cart-wrapper1")
    let results = ""
    cart.forEach((item) => {
        results += `
        <tr class="cart-item">
        <td></td>
        <td class="cart-image">
          <img
            src="img/categories/cat-1.png"
            class="img-fluid"

            alt=""
          />
          <i class="bi bi-x delete-cart text-black"></i>
        </td>
        <td class="text-black">${item.name}</td>
        <td>${item.price.toFixed(2)}$</td>
        <td class="product-subtotal">$80</td>
      </tr>
        `
        basket ? basket.innerHTML = results : ""
    })
}

displayBasketProduct()