var express = require('express');
var router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in', req.user);
    var userInfo = {
      username : req.user.username,
      todos: req.user.todos
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

// router.put('/:id', (req, res) => {
//   console.log("req.params", req.params)
//   console.log('resRouter - put /review');
//   var resId = req.params.id;
//   var review = { text: req.body.objectToSend, userId: req.user._id };


//   resObject.findByIdAndUpdate({ "_id": resId }, { $push: { review: review } }, function (err, foundResObject) {
//     // if (err) { return handleError(err) };

//     if (err) {
//       console.log('error', err);
//       res.sendStatus(500);
//     }
//     else {
//       console.log('success');
//       //                 res.sendStatus(201);
//     }

//   });
// });

module.exports = router;
