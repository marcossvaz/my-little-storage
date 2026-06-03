import {Request, Response} from 'express'
import { productSchema } from './schemas/productSchemas.js'
import { ProductServiceFactories } from '../services/factories/ProductServiceFactories.js';


export class ProductController {
    create = async (req: Request, res: Response) => {
        try{
            const value = productSchema.parse(req.body);
            const result = await ProductServiceFactories.create(value);
            res.status(201).json(result);
        } catch(err: any) {
            res.status(400).json({error: err.massage});
        }
    }

}