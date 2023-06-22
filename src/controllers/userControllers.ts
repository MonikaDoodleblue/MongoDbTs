import { Request, Response } from 'express';
import * as service from '../services/userService';

const saveUser = async (req: Request, res: Response) => {
    try {
        const result = await service.saveUser(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
};

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await service.getUser(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await service.getUserById(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await service.updateUser(req);
        res.status(200).send({
            result: result,
            msg: 'Updated Successfully',
        });
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await service.deleteUser(req);
        res.status(200).send({
            result: result,
            msg: 'Deleted Successfully',
        });
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

const search = async (req: Request, res: Response) => {
    try {
        const { searchQuery, page, limit } = req.query;
        const result = await service.search(searchQuery, page, limit);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

// const saveOrder = async (req: Request, res: Response) => {
//     try {
//         const { user_id, product_id } = req.body;
//         const order = await service.saveOrder(user_id, product_id);
//         res.status(200).send(order);
//     } catch (error) {
//         console.log("error---->", error);
//         res.status(500).send('Internal Server Error');
//     }
// };

const saveOrder = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id } = req.body;
        const order = await (await service.saveOrder(user_id, product_id))
            .populate('user_id', 'name')
            .populate('product_id', 'product_name');

        res.status(200).send(order);
    } catch (error) {
        console.log("error---->", error);
        res.status(500).send('Internal Server Error');
    }
};


export {
    saveUser,
    getUserById,
    getUser,
    updateUser,
    deleteUser,
    search,
    saveOrder
};