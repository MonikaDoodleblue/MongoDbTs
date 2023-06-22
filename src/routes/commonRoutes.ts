import { Router } from 'express';
import { saveUser, getUserById, getUser, updateUser, deleteUser, search, saveOrder } from '../controllers/userControllers';

import { saveProduct } from '../controllers/productController';
const router: Router = Router();

router.post('/create', saveUser);
router.get('/getId/:id', getUserById);
router.get('/getAll', getUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/search', search);

router.post('/createProduct', saveProduct);

router.post('/createOrder', saveOrder);

export default router;