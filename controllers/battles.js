const express = require('express');
const Battle = require('../models/battles');
const router = express.Router();

/*
**@ GET api/gotb/list
*/
router.get('/list',async(req,res)=>{
    try{
        let battles = await Battle.find();
        return res.status(200).json(battles);
    }
    catch(err){
        return res.json(err);
    }
    
})

/*
**@ GET api/gotb/location
*/
router.get('/location',async(req,res)=>{
    try{
        let battles = await Battle.find();
        let location=[];
        battles.map(el=>{
            location.push(el.location);
        });        
        return res.status(200).json(location);
    }
    catch(err){
        return res.json(err);
    }
    
})

/*
**@ GET api/gotb/list/:id
*/
router.get('/list/:id',async(req,res)=>{
    try{
        let battles = await Battle.findById(req.params.id);
        return res.status(200).json(battles);
    }
    catch(err){
        return res.json(err);
    }
    
})

/*
**@ GET api/gotb/count
*/
router.get('/count',async(req,res)=>{
    try 
    {
        let count = await Battle.countDocuments({});
        return res.json(count);
    }
    catch(err)
    {
        return res.json(err);
    }
})

/* req.query.
**@ GET api/gotb/search
*/
router.get('/search',async(req,res)=>{
    try{
        let king = req.query.king;
        let attacker = req.query.attacker;
        let defender = req.query.defender;
        let size = req.query.size;
         delete req.query['king']
         delete req.query['attacker']
         delete req.query['defender']
         delete req.query['size']
        console.log(req.query)
            let result = await Battle.find({$or : [{attacker_king:king},{defender_king:king}],
                $or : [{attacker_1 :attacker},{attacker_2:attacker},{attacker_3:attacker},{attacker_4:attacker}],
                $or : [{defender_1 :defender},{defender_2:defender},{defender_3:defender},{defender_4:defender}],
                $or : [{attacker_size:size},{defender_size:size}] ,
            }).find(req.query);
        return res.json(result);
    }
    catch(err){
        return res.json(err);
    }
})

module.exports = router;