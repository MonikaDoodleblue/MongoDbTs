import Info from '../models/infoModel';
import Order from '../models/orderModel';
import Product from '../models/productModel';

const getUser = (req: any) => {
    try {
        return Info.find(req.query);
    } catch (e) {
        return e;
    }
};

const saveUser = (req: any) => {
    try {
        const users = new Info(req.body);
        return users.save();
    } catch (e) {
        return e;
    }
};

const updateUser = (req: any) => {
    try {
        return Info.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
};

const deleteUser = (req: any) => {
    try {
        return Info.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
};

const getUserById = (req: any) => {
    try {
        return Info.findById(req.params.id);
    } catch (e) {
        return e;
    }
};

const search = async (searchQuery: any, page: any, limit: any) => {
    try {
        page = parseInt(page);
        limit = parseInt(limit);

        const searchResults = await Info.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { email: { $regex: searchQuery, $options: 'i' } },
            ],
        })
            .skip((page - 1) * limit)
            .limit(limit);

        return searchResults;
    } catch (e) {
        return e;
    }
};

// const saveOrder = async (user_id: any, product_id: any) => {
//     try {
//         const product = await Product.findById(product_id);
//         const user = await Info.findById(user_id);

//         if (!product || !user) {
//             throw new Error('not found');
//         }

//         const order = new Order({
//             user_id,
//             name: user.name,
//             product_id,
//             product_name: product.product_name,
//         });

//         return order.save();
//     } catch (error) {
//         throw error;
//     }
// };

const saveOrder = async (user_id: any, product_id: any) => {
    try {
        const product = await Product.findById(product_id);
        const user = await Info.findById(user_id);

        if (!product || !user) {
            throw new Error('not found');
        }

        const order = new Order({
            user_id,
            name: user.name,
            product_id,
            product_name: product.product_name,
        });

        return order.save();
    } catch (error) {
        throw error;
    }
};

export {
    saveUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    search,
    saveOrder
};