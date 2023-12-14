import { cart } from "./shopping.js"

function displayBasketProduct() {
    const cartWrapper = document.querySelector(".cart-wrapper")
    const basket = document.querySelector(".basket")
    let results = ""
    cart.forEach((item) => {
        results += `
        <tr class="cart-item">
        <td></td>
        <td class="cart-image">
          <img
            src="img/categories/cat-1.png"
            class="w-25"
            alt=""
          />
          <i class="bi bi-x delete-cart text-black"></i>
        </td>
        <td class="text-black">${item.name}</td>
        <td>$80 $</td>
        <td class="product-quantity">1</td>
        <td class="product-subtotal">$80</td>
      </tr>
        
        `
        basket ? basket.innerHTML = results : ""

    })
}

displayBasketProduct()