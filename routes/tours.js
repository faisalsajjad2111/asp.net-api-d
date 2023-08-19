import express from 'express'
import { createTour , deleteTour,getAllTour, getSingleTour,getTourCount,getTourBySearch, updateTour, getFeaturedTour} from './../controller/tourController.js'
import { verifyAdmin } from '../utils/verifytoken.js';

const router = express.Router()
router.post("/",verifyAdmin,createTour);
router.put("/:id" ,verifyAdmin,updateTour)
router.delete("/:id" ,verifyAdmin,deleteTour)
router.get("/:id",getSingleTour)
router.get("/",getAllTour);
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getTourCount",getTourCount);
router.get("/search/getFeaturedTours",getFeaturedTour);

export default router;