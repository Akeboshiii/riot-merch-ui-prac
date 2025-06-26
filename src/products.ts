export type productType = {
    title: string
    subtitle: string
    price: number
    rating: number
    imageNum: number
}

export class Product {
    title: string
    subtitle: string
    price: number
    rating: number
    imageNum: number
    constructor(title: string, subtitle: string, price: number, rating: number, image: number) {
        this.title = title
        this.subtitle = subtitle
        this.price = price
        this.rating = rating
        this.imageNum = image
    }
    
    returnPriceInString(): string {
        const price: string = this.price.toFixed(2)
        return `$${price}`
    }
}

export class ProductList {
    list: Array<Product>
    constructor() {
        this.list = []
    }

    addArrayToList(arr: Array<productType>): void {
        arr.forEach((product) => {
            this.list.push(new Product(product.title, product.subtitle, product.price, product.rating, product.imageNum))
        })
    }

    generateHTML(): string{
        let html = ''
        this.list.forEach((product) => {
            html += `
            <div class="product_card">
                <div class="product_image_container">
                    <img src="./assets/images/products/${product.imageNum}.jpg" alt="product_image" class="product_image">
                </div>
                <div class="product_info_container">
                    <p class="product_title">${product.title}</p>
                    <p class="product_description">${product.subtitle}</p>
                    </div>
                <div class="product_price_container">
                    <p class="product_price">${product.returnPriceInString()}</p>
                </div>
                <div class="products_ratings_container">
                    <img src="./assets/images/ratings/${product.rating}stars.png" alt="product_ratings" class="product_ratings">
                </div>
                <div class="buy_now_button_container">
                    <button class="product_buy">Buy Now</button>
                </div>
             </div>
            `
        })
        return html
    }

    generateHTMLnotFull(): string{
        let html = ''
        this.list.forEach((product, i) => {
            if (i >= 6) {
                return
            }
            html += `
            <div class="product_card">
                <div class="product_image_container">
                    <img src="./assets/images/products/${product.imageNum}.jpg" alt="product_image" class="product_image">
                </div>
                <div class="product_info_container">
                    <p class="product_title">${product.title}</p>
                    <p class="product_description">${product.subtitle}</p>
                    </div>
                <div class="product_price_container">
                    <p class="product_price">${product.returnPriceInString()}</p>
                </div>
                <div class="products_ratings_container">
                    <img src="./assets/images/ratings/${product.rating}stars.png" alt="product_ratings" class="product_ratings">
                </div>
                <div class="buy_now_button_container">
                    <button class="product_buy">Buy Now</button>
                </div>
             </div>
            `
        })
        return html
    }
}