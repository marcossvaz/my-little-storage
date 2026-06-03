import { Router } from "express";
import { ProductController } from "../controller/ProductController.js";

export const routes = Router()

const routesProduct = new ProductController()



// ABOUT PRODUCT
routes.post("/product", routesProduct.create);
routes.get('/products', routesProduct.getAll);