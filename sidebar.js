function sidebarFunc() {
    //! home sidebar start
    const btnOpenSidebar = document.querySelector("#btn-menu")
    const sidebar = document.querySelector(".sidebar-left ")
    const btnCloseSidebar = document.querySelector("#close-sidebar")
    const collapse = document.querySelector(".collapse")
    //? click outside start
    btnOpenSidebar.addEventListener(("click"), () => {
        sidebar.style.left = "0"
        sidebar.style.visibility = "visible"
        collapse.style.display = "block"
        btnCloseSidebar.classList.add("close-sidebar")

    })
    btnCloseSidebar.addEventListener(("click"), () => {
        sidebar.style.left = "-50%"
        btnCloseSidebar.classList.remove("close-sidebar")

    })
    document.addEventListener(("click"), (e) => {
        if (!e.composedPath().includes(sidebar) && !e.composedPath().includes(btnOpenSidebar)) {
            sidebar.style.left = "-50%"
            btnCloseSidebar.classList.remove("close-sidebar")
        }
    })
}

sidebarFunc()