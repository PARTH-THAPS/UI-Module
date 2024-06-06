import express from 'express';

export const non_large_router=express.Router(); 

non_large_router.get('/rate_card_creation',(req,res)=>{
    res.render("NonLargeRate");
});