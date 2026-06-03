import { Router } from "express";
import { ProductController } from "../controller/ProductController.js";

export const routes = Router()

const routesProduct = new ProductController()




routes.post("/product", routesProduct.create)