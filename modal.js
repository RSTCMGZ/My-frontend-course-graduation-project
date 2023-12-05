let modal = document.querySelector(".modal")
let modalWrapper = document.querySelector(".modal .modal-wrapper")
let btnClose = document.getElementById("close")

btnClose.addEventListener("click", function () {
    modal.classList.remove("show")
})

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modal)) {
        modal.classList.remove("show")
    }
})

setTimeout(() => {
    modal.classList.add("show");
}, 3000);
