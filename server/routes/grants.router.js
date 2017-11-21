var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var grantObject = require('../models/grants.js');

router.post('/', function (req, res) {
    console.log('trying to post grant');
    if (req.isAuthenticated()) {
        // send back user object from database

        var grantToAdd = new grantObject(req.body);
        grantToAdd.user = req.user.username;
        console.log('user name to add:', grantToAdd.user);
        grantToAdd.save(function (err, data) {
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
