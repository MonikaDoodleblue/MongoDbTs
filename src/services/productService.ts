import Product from '../models/productModel';

const saveProduct = (req: any) => {
    try {
        const products = new Product(req.body);
        return products.save();
    } catch (e) {
        return e;
    }
};

export {
    saveProduct
};