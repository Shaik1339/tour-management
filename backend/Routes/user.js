import express from 'express';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();


//update user
router.put('/:id',updateUser);

//delete user
router.delete('/:id',deleteUser);


//get single user
router.get('/:id',getSingleUser);

//create new user
router.get('/',getAllUsers);


export default router;