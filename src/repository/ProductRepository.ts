import { includes } from "zod";
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
            }
        })
    }

    async getAll() {
        return await prisma.product.findMany({})
    }

    async findById(id: string) {
        return await prisma.product.findFirst({
            where: {
                id: id
            }
        })
    }

    async update(data: Product, id: string) {
        return await prisma.product.update({
            where: {id: id},
            data: {
                brand: data.name,
                name: data.name,
                quantity: data.quantity,
                value_unit: data.value_unit,
            }
        })
    }

    async delete(id: string) {
        return await prisma.product.update({
            where: {id:id},
            data: {
                status: false
            }
        })
    }
}