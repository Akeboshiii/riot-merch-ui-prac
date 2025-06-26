var _a, _b;
import { ProductList } from './products.js';
import { productDetailsList } from './list.js';
let list = new ProductList();
list.addArrayToList(productDetailsList);
console.log(list);
let outputContainer = document.querySelector('.featured_products_container');
if (outputContainer instanceof HTMLDivElement) {
    outputContainer.innerHTML = list.generateHTMLnotFull();
}
(_a = document.querySelector('.hero_cta_button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    location.href = "#products_title";
});
(_b = document.querySelector('.brand_text')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    location.href = "#";
});
