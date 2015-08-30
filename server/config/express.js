
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan');

//var allowCrossDomain = function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//
//    // intercept OPTIONS method
//    if ('OPTIONS' == req.method) {
//        res.send(200);
//    }
//    else {
//        next();
//    }
//};

module.exports = function(app, config){
//    app.use(allowCrossDomain);
    //app.use(express.csrf());
    app.set('views', config.rootpath + '/server/views');
    app.set('view engine', 'jade');
//app.use(express.logger('dev'));
    app.use(morgan('dev'));
//app.use(express.bodyParser());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    app.use(express.static(config.rootpath + '/public'));

}