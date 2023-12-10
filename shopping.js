// const basket = document.querySelector(".basket")
// const tikla = document.querySelector(".tıkla")

// function showHide() {

//     tikla.addEventListener("click", (event) => {

//         if (!event.composedPath().includes(basket)) {
//             basket.classList.toggle("hide")
//         } else {
//             document.addEventListener("click", () => {
//                 basket.classList.add("d-none")
//             })

//         }
//         event.preventDefault()
//     })

// }
// showHide()
async function getData() {
    const photos = await fetch("./data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : []
    productsFunc()
}
getData()



function productsFunc() {
    const products = JSON.parse(localStorage.getItem('products'));
    const productsContainer = document.getElementById("product-list")
    const productsContainer2 = document.getElementById("product-list2")
    const productsContainer3 = document.getElementById("product-list3")
    let results = "";
    products.forEach((item) => {
        results += `
        <div class="card"  style="width: 12rem">
        <img
          src="${item.img.singleImage}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">
           ${item.name}
          </h5>
          <div class="stars text-center">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>

          <div class="price text-center">
          $${item.price}
            <span class="text-decoration-line-through"> $${item.oldPrice}
            </span>
          </div>
          <a href="#" class="btn btn-success d-block mt-2">
            <i class="mx-lg-2 bi-cart3"></i>
            Add To Card
          </a>
        </div>
        </div>
        `;
    })
    productsContainer.innerHTML = results
    productsContainer2.innerHTML = results
    productsContainer3.innerHTML = results
}
productsFunc()