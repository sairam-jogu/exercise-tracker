const router = require('express').Router();

const Exercise = require('../models/exercise');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch(err=>res.status(400).json('error: '+err))

})

router.route('/add').post((req,res)=>{
    
    const userName = req.body.userName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    

    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date,
        
    });

    newExercise.save()
    .then(()=>res.json("Exercise Added"))
    .catch((err)=>res.status(400).json("Error: "+err))

})

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Exercise Deleted"))
    .catch((err)=>res.status(400).json("Error"+err))
})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>res.json(exercise))
    .catch(err=>res.status(400).json(err))
})

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.userName = req.body.userName;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date)

        exercise.save()
        .then(()=>res.json("Updated"))
        .catch(err=>res.status(400).json("error"+err))
    })
    .catch(err=>res.status(400).json("error"+err))
})



module.exports = router