let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []




function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper")
  let result = ""
  cart.forEach((item) => {
    result += `
        <tr class="cart-item">
        <td></td>
        <td class="cart-image">
          <img
            src="${item.img.singleImage}"
            class="img-fluid"
            alt=""
          />
          <i class="bi bi-x delete-cart" data-id="${item.id}"></i>
        </td>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)} </td>
        <td class="product-quantity">${item.quantity}</td>
        <td class="product-subtotal">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
        `
    cartWrapper.innerHTML = result
    removeCartItem()
  })
}

displayCartProduct()

function removeCartItem() {
  let countItems = document.querySelector('.count')
  const btnDeleteCart = document.querySelectorAll(".delete-cart")

  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      const deleteDiv = document.querySelectorAll(".cart-item")

      cart = cart.filter((item) => item.id !== Number(id))

      localStorage.setItem("cart", JSON.stringify(cart))

      deleteDiv[0].remove()
      countItems.innerHTML = cart.length

      displayCartProduct()
      saveCartValues()
    });
  });
}

function saveCartValues() {
  const cartTotal = document.getElementById("cart-total")
  const subTotal = document.getElementById("sub-total")
  const fastCargo = document.getElementById("fast-cargo")
  const fastCargoPrice = 15;

  let itemsTotal = 0;

  cart.length > 0 && cart.map((item) => itemsTotal += item.price * item.quantity)
  console.log(itemsTotal);
  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`

  fastCargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
    } else {
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`

    }
  })

}

saveCartValues()


