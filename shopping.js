const basket = document.querySelector(".basket")
const tikla = document.querySelector(".tıkla")

function showHide() {

    tikla.addEventListener("click", (event) => {

        if (!event.composedPath().includes(basket)) {
            basket.classList.toggle("hide")
        } else {
            document.addEventListener("click", () => {
                basket.classList.add("d-none")
            })

        }
        event.preventDefault()
    })

}
showHide()