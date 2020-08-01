const router = require("express").Router();
//const Transaction = require("../models/transaction.js");
var path = require("path");


//module.exports = function(router){
router.get("/exercise", function(req, res){
res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//};

module.exports = router;
