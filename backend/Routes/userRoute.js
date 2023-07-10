const router = require('express').Router();
let User = require('../models/user')

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+ err));
})

router.route('/add').post((req,res)=>{
    const userName = req.body.userName;

    const newUser = new User({userName});

    newUser.save()
    .then(()=> res.json('USer Added'))
    .catch((err)=>res.status(400).json('Error'+err))
})


module.exports = router;