import { Request, Response } from 'express';
import * as service from '../services/productService';

const saveProduct = async (req: Request, res: Response) => {
    try {
        const result = await service.saveProduct(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
};

export {
    saveProduct
};