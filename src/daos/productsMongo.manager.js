import { productsModel } from "./../models/products.model";

export class ProductsManagerMongo{
    constructor(){
        this.productsModel = productsModel;
    }

    async createProduct(product){
        return await this.productsModel.create(product);
    }

    async getProductById(id){
        return await this.productsModel.find({ _id : id}); 
    }

    async getProductByName(name){
        return await this.productsModel.find((product) => product.name === name);
    }

    async getProducts(){
        return await this.productsModel;
    }
}