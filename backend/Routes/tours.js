import express from 'express'

import { createTour, deleteTour, getAllTours, getFeaturedTours, getSingleTour, getTourCount, getToursBySearch, updateTour } from '../controllers/tourController.js'

const router = express.Router();

//create new tour
router.post('/',createTour);

//update tour
router.put('/:id',updateTour);

//delete tour
router.delete('/:id',deleteTour);


//get single tour
router.get('/:id',getSingleTour);

//get all tour
router.get('/',getAllTours);

//get search tours
router.get('/search/getTourBySearch',getToursBySearch)

//get featured tours
router.get('/search/getFeaturedTours',getFeaturedTours)

///get count tours
router.get('/search/getTourCount',getTourCount)


export default router;