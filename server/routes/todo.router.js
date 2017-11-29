var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var todoObject = require('../models/user.js');

router.get('/', function (req, res) {
    todoObject.find({}, function (err, foundObjects) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        } else {
            res.send(foundObjects);
        }
    });

router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database

        var todoToAdd = new todoObject(req.body);
        todoToAdd.user = req.user.username;
        console.log('user name to add:', todoToAdd.user);
        todoToAdd.save(function (err, data) {
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
})

module.exports = router;
