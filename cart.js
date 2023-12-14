import { cart } from "./shopping.js"



function displayCartProduct() {
    const cartWrapper = document.querySelector(".cart-wrapper")
    let results = ""
    cart.forEach((item) => {
        results += `
        <tr class="cart-item">
        <td></td>
        <td class="cart-image">
          <img
            src="${item.img.singleImage}"
            class="img-fluid"
            alt=""
          />
          <i class="bi bi-x delete-cart"></i>
        </td>
        <td>${item.name}</td>
        <td>${item.price} $</td>
        <td class="product-quantity">1</td>
        <td class="product-subtotal">$80</td>
      </tr>
        
        `
        cartWrapper ? cartWrapper.innerHTML = results : ""

    })
}

displayCartProduct()