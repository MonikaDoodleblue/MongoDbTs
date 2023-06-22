import mongoose, { Schema, Document } from 'mongoose';

interface Order extends Document {
    user_id: number;
    product_id: number;
    product_name: string;
}

const OrderSchema: Schema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Info',
        required: true,
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model<Order>('Order', OrderSchema);

export default Order;
