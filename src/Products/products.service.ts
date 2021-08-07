import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";
@Injectable()
export class ProductService {
   private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId,title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }
    
    updateProduct(productId: string, title: string, desc: string, price: number){

    }
    
    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if(!product){
            throw new NotFoundException('Product not found');
        }
        return [product, productIndex];
    }
}