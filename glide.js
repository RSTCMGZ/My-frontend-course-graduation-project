const productsContainer = document.getElementById("product-list")

export function product1() {
    const config = {
        perView: 4,
        // gap: 20,
        // autoplay: 3000,
        bound: true,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            },
        },
    }

    productsContainer && new Glide(".product_carousel", config).mount()

}


