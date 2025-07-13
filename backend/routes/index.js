const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const prisma = new PrismaClient();


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


router.get('/api/reviews/my', auth(), async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { email: req.user.email },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: reviews, msg: 'user reviews listed' });
  } catch (e) {
    res.status(500).json({ msg: 'something error occurred' });
  }
});


router.delete('/api/reviews/:id', auth('Admin'), async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.review.delete({ where: { id } });
    res.json({ msg: 'review deleted' });
  } catch (e) {
    res.status(500).json({ msg: 'something error occurred' });
  }
});

module.exports = router; 