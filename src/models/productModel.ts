import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
    product_name: string;
    price: number;
}

const ProductSchema: Schema = new Schema({
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

const Product = mongoose.model<Product>('Product', ProductSchema);

export default Product;