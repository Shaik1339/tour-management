import express from 'express';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userController.js';
import { verifyUser,verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();


//update user
router.put('/:id',verifyUser,updateUser);

//delete user
router.delete('/:id',verifyUser,deleteUser);


//get single user
router.get('/:id',verifyUser,getSingleUser);

//create new user
router.get('/', verifyAdmin, getAllUsers);


export default router;