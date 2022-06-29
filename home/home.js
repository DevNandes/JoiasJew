const menu = document.querySelector('[data-menu]')
const menuContainer = document.querySelector('[data-menu-container]')
const menu_esquerda = document.querySelector('#menu-esquerda')

menu_esquerda.addEventListener('click', () => {
    menu.classList.toggle('-active');
    menuContainer.classList.toggle('-active');
})

const filtro = document.querySelector('[data-filtro]')
const filtroContainer = document.querySelector('[data-filtro-container]')
const buttonfiltro = document.querySelector('#filtro')

buttonfiltro.addEventListener('click', () => {
    filtro.classList.toggle('-active');
    filtroContainer.classList.toggle('-active');
})

const containerProducts = document.querySelector('.produtos')
const buttonFilter = document.querySelector('[data-filter]')
const produtos = document.querySelectorAll('.produto')

buttonFilter.addEventListener('click', () => {
    let activeMarca = document.querySelector('[name="filtrado"]:checked').value
    containerProducts.innerHTML = ''
    
    produtos.forEach(produto => {
        if(produto.dataset.marca == activeMarca) {
            containerProducts.appendChild(produto)
        }
    });
})

const buttonLimpador = document.querySelector('[data-limpador]')

buttonLimpador.addEventListener('click', () => {
    document.getElementById("todos").checked = true;
    let activeMarca = document.querySelector('[name="filtrado"]:checked').value
    containerProducts.innerHTML = ''

    produtos.forEach(produto => {
        if(activeMarca == 'todos') {
            containerProducts.appendChild(produto)
        }
    });
})

