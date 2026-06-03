import { ProductService } from "../ProductService.js";
import { ProductRepositoryFactories } from "./ProductRepositoryFactories.js";

export const ProductServiceFactories = new ProductService(ProductRepositoryFactories)