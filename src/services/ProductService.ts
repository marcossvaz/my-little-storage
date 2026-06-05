import { IProduct, IProductIdSchema } from "../controller/schemas/productSchemas.js";
import { ProductRepository } from "../repository/ProductRepository.js";
import { generateSku } from "./utils/skuGenerate.js";

export class ProductService {

    constructor(private readonly _productRepository: ProductRepository) { }

    async create(data: IProduct) {

        const sku = generateSku(data.name, data.brand);

        const result = await this._productRepository.create({ ...data, sku });

        return result
    }

    async getAll() {
        return await this._productRepository.getAll();
    }


    async findById(data: IProductIdSchema) {
        return await this._productRepository.findById(data.id);
    }

    async update(data: IProduct, id: IProductIdSchema) {
        return await this._productRepository.update(data, id.id);
    }
}