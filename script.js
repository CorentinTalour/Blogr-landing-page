// const ShowMenuProduct = (toggleId) => {
//     const toggle = document.getElementById(toggleId),
//         show_menu_product = document.querySelector('.dropdown-product'),
//         arrow_product = document.getElementById('arrow-product')
//
//     toggle.addEventListener('click', () => {
//         show_menu_product.classList.toggle('show-menu')
//         arrow_product.classList.toggle('animation-arrow')
//     })
// }
//
// ShowMenuProduct('Product');

const ShowMenuDropDown = (toggleId, showMenu, arrowAnimation) => {
    const toggle = document.getElementById(toggleId),
        show_menu = document.querySelector(showMenu),
        arrow = document.getElementById(arrowAnimation)

    toggle.addEventListener('click', () => {
        show_menu.classList.toggle('show-menu')
        arrow.classList.toggle('animation-arrow')
    })
}

const ShowMenu = (toggleId) => {
    const toggle = document.getElementById(toggleId),
        show_menu = document.querySelector('.container-nav')

    toggle.addEventListener('click', () => {
        show_menu.classList.toggle('show-menu-mobile')
    })
}

ShowMenuDropDown('Product', '.dropdown-product', 'arrow-product');
ShowMenuDropDown('Company', '.dropdown-company', 'arrow-company');
ShowMenuDropDown('Connect', '.dropdown-connect', 'arrow-connect');

ShowMenu('btn-hamburger');