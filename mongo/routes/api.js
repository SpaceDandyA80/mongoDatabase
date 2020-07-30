const router = require("express").Router();
const Transaction = require("../models/transaction.js");


router.get("/api/workouts", (req, res)=>{
    Transaction.find({})
    .sort({date: -1 })
    .then(dbTransaction =>{
        res.json(dbTransaction)
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put("/api/workouts/undefined", ({body}, res)=>{
    Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.post("/api/workouts/undefined", ({body}, res)=>{
    Transaction.create(body)
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.json(400).json(err)
    });
});



module.exports = router;

