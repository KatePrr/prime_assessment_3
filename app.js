var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/iota');
mongoose.model(
    'New_Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    ));

var New_Hero = mongoose.model('New_Hero');

app.post('/heroes', function(req, res) {
    var newHero = new New_Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power
    });

    newHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        New_Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });
});

mongoose.model(
    'SuperPowers',
    new Schema({
            "power_name": String,
        },
        {
            collection: 'SuperPowers'
        }
    ));

var SuperPowers = mongoose.model('SuperPowers');

app.post('/superPower', function(req, res) {
    var newPowers = new SuperPowers({
        "power_name": req.body.power_name
    });
    newPowers.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        SuperPowers.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        });
    });
});










// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});