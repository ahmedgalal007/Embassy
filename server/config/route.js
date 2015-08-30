
var passport = require('passport'),
    http = require('http');


module.exports = function(app){
    http.post = require('http-post');
    app.post('/login', function(req,res,next){
        console.log(req.params);
        //res.json({data:'You are testing Login post. !!!'});
        //res.json(req.body.username);

        //http.post('http://localhost:1337/api/oauth/token',{grant_type:'password', client_id:'android',
        //    client_secret:'SomeRandomCharsAndNumbers', username:req.param('username'), password:req.param('username')})
        //        .then(function(response){
        //                                    res.json(response);
        //                                    //passport.authenticate('local', function(err, user, info) {
        //                                    //    if (err) { return next(err); }
        //                                    //    if (!user) { return res.redirect('/login'); }
        //                                    //    req.logIn(user, function(err) {
        //                                    //        if (err) { return next(err); }
        //                                    //        return res.redirect('/users/' + user.username);
        //                                    //    });
        //                                    //})(req, res, next);
        //});

        http.post('http://localhost:1337/api/oauth/token', { grant_type:'password', client_id:'android',
                client_secret:'SomeRandomCharsAndNumbers', username:'myapi', password:'abc1234' }, function(response){
            response.setEncoding('utf8');
            response.on('data', function(chunk) {
                var token = JSON(chunk).access_token;
            res.json({"access_token":token});
            });
        });




    });

    app.get('/partials/*', function(req, res){
        console.log(req.params);
        res.render("../../public/app/" + req.params[0]);

    })



    app.get('*', function(req,res, next){
        res.render('index', {'myvar':'Hello World'});
    });
}