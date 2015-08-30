

var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport');

var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require( process.cwd() + '/server/config/config')['Development'];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(app);

app.use(passport.initialize());

require('./server/config/route')(app);





app.set('port', process.env.PORT || config.port);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});