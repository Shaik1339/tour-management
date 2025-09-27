import express from 'express';
import { verifyUser } from '../utils/verifyToken.js'; 
import { createBooking,getBookings,getAllBookings } from '../controllers/bookingController.js';
 const router=express.Router(); 
 router.post('/booking',verifyUser,createBooking);
  router.get('/booking/:id',verifyUser,getBookings); 
  router.get('/booking',verifyUser,getAllBookings); 
  export default router;