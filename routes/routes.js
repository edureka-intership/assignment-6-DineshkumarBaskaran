const express=require('express');
const restaurantController=require('../controller/restaurants');
const restaurantDetailsController=require('../controller/restaurantsDetails');



const router=express.Router();


router.get('/:pageNo',restaurantController.getAllRestaurantsDetails);
router.get('/details/:name/:pageNo',restaurantDetailsController.getAllRestaurantsDetails);





module.exports = router;  