const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

let reviews =[];


router.post("/api/reviews",(req,res)=>{

    try{
        const {companyName , rating, title, Description,email }=req.body;
        if(!companyName || !rating || !email || !title || !Description){
            res.json({
                msg : "Missed Some fields"
            })
        }
        const newReviews = {
            companyName : companyName,
            rating : rating,
            title : title,
            Description : Description,
            email : email
        }
        reviews.push(newReviews);
        res.json({
            msg : "rewiew submitted"
        })


    }
    catch(e){
        console.log(e);
        res.json({
            mag : "error occurred"
        })
    }

})

router.get("/api/reviews" , (req,res)=>{
    try {
        res.json({
            data : reviews,
            msg : "reviews listed"
        })
    }
    catch(e){
        res.json({
            msg : "something error occured"
        })
    }

})


module.exports = router; 