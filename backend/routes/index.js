const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

let reviews =[];


router.post("/api/reviews",async (req,res)=>{

    try{
        const {companyName , rating, title, Description,email }=req.body;
        if(!companyName || !rating || !email || !title || !Description){
            res.json({
                msg : "Missed Some fields"
            })
        }
        const review = await prisma.review.create({
            data: {
              companyName,
              rating: Number(rating),
              title,
              description,
              email,
            },
          });
      
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

router.get("/api/reviews" , async(req,res)=>{
    try {
        const reviews = await prisma.review.findMany({
            orderBy: { createdAt: 'desc' },
          });
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