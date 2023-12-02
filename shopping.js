

const wrapper = document.querySelector(".wrapper")
const basket = document.querySelector(".basket")
const tikla = document.querySelector(".tıkla")
let api = "https://dummyjson.com/products"
console.log(tikla);



function showHide() {
    tikla.addEventListener("click", (event) => {
        if (!event.composedPath().includes(basket)) {
            basket.classList.toggle("hide")
        } else {
            document.addEventListener("click", () => {
                basket.classList.add("d-none")
            })

        }
    })

}
showHide()