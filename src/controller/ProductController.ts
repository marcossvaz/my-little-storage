import { Request, Response } from 'express'
import { productIdSchema, productSchema } from './schemas/productSchemas.js'
import { ProductServiceFactories } from '../services/factories/ProductServiceFactories.js';


export class ProductController {
    create = async (req: Request, res: Response) => {
        try {
            const value = productSchema.parse(req.body);
            const result = await ProductServiceFactories.create(value);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.massage });
        }
    }

    getAll = async (_req: Request, res: Response) => {
        try {
            const result = await ProductServiceFactories.getAll();
            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    findById = async (req: Request, res: Response) => {
        try {
            const value = productIdSchema.parse(req.params);

            const result = await ProductServiceFactories.findById(value);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const { id } = productIdSchema.parse(req.params);
            const valueBody = productSchema.parse(req.body);

            const result = await ProductServiceFactories.update(valueBody, { id });
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = productIdSchema.parse(req.params);
            const result = await ProductServiceFactories.delete(id);
            res.status(201).json(result);
        } catch(err: any) {
            res.status(401).json({error: err.message});
        }
    }

}