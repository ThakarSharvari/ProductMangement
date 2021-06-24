import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { productData } from "src/assets/mock/productlist";
import { product } from "../models/product";
import { ProductService } from "../service/product.service";

@Injectable({
    providedIn: 'root'
})
export class productRemote {
    constructor(public productService: ProductService) {

    }

    getAllProducts() {
        return new Promise<product[]>((resolve, reject) => {
            this.productService.setProducts().then(() => this.productService.getProducts().then(() => {
                resolve(this.productService.products)
            }))
        })
    }

    getProduct(id: number) {
        return of(this.productService.products.filter(x => { return x.id === Number(id) }))
    }

    getAllTrashProduct() {
        return new Promise<product[]>((resolve, reject) => {
            resolve(this.productService.trash)
        })
    }

    addProduct(product: product) {
        return new Promise((resolve, reject) => {

            product.id = this.productService.products.length + 1;
            this.productService.products.push(product)
            this.productService.setProducts()
            resolve('Success')
        })
    }
}