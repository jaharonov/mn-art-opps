var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var resObject = require('../models/residencies.js');

router.get('/', function (req, res) {
    resObject.find({}, function (err, foundObjects) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        } else {
            res.send(foundObjects);
        }
    });
});
router.post('/', function (req, res) {
    console.log('trying to post residency');
    if (req.isAuthenticated()) {
        // send back user object from database

        var resToAdd = new resObject(req.body);
        resToAdd.user = req.user.username;
        console.log('user name to add:', resToAdd.user);
        resToAdd.save(function (err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                console.log('logged in', req.user);
                var userInfo = {
                    username: req.user.username
                };
                res.send(userInfo);
            }
        })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.send(403);
    }


});

//review put route
router.put('/:id', (req, res) => {
    console.log("req.params", req.params)
    console.log('resRouter - put /review'); 
        var resId = req.params.id;
        var review = { text: req.body.objectToSend, userId: req.user._id};
        

        resObject.findByIdAndUpdate({"_id": resId}, {$push: {review: review}}, function (err, foundResObject) {
            // if (err) { return handleError(err) };
            
                if (err) {
                    console.log('error', err);
                    res.sendStatus(500);
                }
                else {
                    console.log('success');
        //                 res.sendStatus(201);
                    }
               
            });
    });

//delete review 
router.delete('/:id', function (req, res) {
    var userId = req.params.id;
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };

        reviewObject.findByIdAndRemove({ '_id': userId }, function (err, data) {
            if (err) {
                console.log('error' + err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.send(401);
    }
})


    
module.exports = router;
