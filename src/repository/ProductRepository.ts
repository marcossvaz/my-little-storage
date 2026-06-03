import { prisma } from "../lib/prisma.js";
import { Product } from "../models/Product.js";


export class ProductRepository {
    async create(data: Product) {
        return await prisma.product.create({
            data: {
                name: data.name,
                brand: data.brand,
                quantity: data.quantity,
                value_unit: data.quantity,
                sku: data.sku
            }
        })
    }
}