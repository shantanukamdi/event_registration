var express = require('express');
var router = express.Router();
var mongoOp = require('../model/mongoModel');
//var mongoAuth = require('../model/authenticationModel');

router.post('/', function(req, res, next) {
    var db = mongoOp();
    var response = {};
    
    var registrationId = req.body.name + req.body.mobile;
    
    db.RegistrationId = registrationId.replace(/\s/g, "").substr(0,6);
    db.FullName = req.body.name;
    db.Mobile = req.body.mobile;
    db.Email = req.body.email;
    db.IdCard = null;
    db.RegType = req.body.registrationtype;
    db.Tickets = req.body.numberoftickets;
    db.RegistrationDate = new Date();
    
    db.save(function(err){
        if(err){
            response = {'error': true, 'message': 'Error saving data'};    
        }else{
            response = {'error': false, 'message': 'successful'};    
            console.log('successful');
            res.json(db.RegistrationId);
        }
    });
});

router.get('/getInformation', function(req, res, next){
   var response = {};
        mongoOp.find({}, function(err, data){
           if(err){
               response = {'error': true, 'message': 'Error fetching data'};
           }else{
               response = {'error': false, 'message': data};
               
           } 
            res.json(response);
        }); 
});
/*
router.get('/authenticate', function(req, res, next){
    
    var response = {};
    console.log(req.body.username);
    console.log(req.body.password);
    
    mongoAuth.find({}, function(err, data){
        if(err){
           response = {'error': true, 'message': 'Authentication Failed'};
        }else{
            response = {'error': false, 'message': data};           
            console.log(data);
       } 
        res.json(response);
    });
});*/
module.exports = router;
