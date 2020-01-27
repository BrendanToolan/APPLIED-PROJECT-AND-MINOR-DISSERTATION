let express = require('express');
let router = express.Router();
let sql = require('../config/config.js');

//Class for all routers

var Location = {
    getLocation: function (callback) {
        // run query
        return sql.query('select * from location', callback);
    }
}
router.get('/locations', function (req, res) {
    console.log("inside the backend get method");
    Location.getLocation(function (err, data) {
        if (err) res.status(400).send(err)
        console.log("inside the backend get method");
        // Complete - send callback
        res.send(data);
        console.log(data);
    });
});

var Instructor = {
    getInstructor: function (callback) {
        // run query
        return sql.query('select * from instructor', callback);
    }
}

router.get('/instructors', function (req, res) {
    console.log("inside the backend get method");
    Instructor.getInstructor(function (err, data) {
        if (err) res.status(400).send(err)
        console.log("inside the backend get method");
        // Complete - send callback
        res.send(data);
        console.log(data);
    });
});

module.exports = router;