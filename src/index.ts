import { Product, ProductList } from './products.js'
import { productDetailsList } from './list.js'

let list = new ProductList()

list.addArrayToList(productDetailsList)
console.log(list);

let outputContainer = document.querySelector('.featured_products_container')

if (outputContainer instanceof HTMLDivElement) {
    outputContainer.innerHTML = list.generateHTMLnotFull()
}

document.querySelector('.hero_cta_button')?.addEventListener('click', () => {
    location.href = "#products_title"
})

document.querySelector('.brand_text')?.addEventListener('click', () => {
    location.href = "#"
})
