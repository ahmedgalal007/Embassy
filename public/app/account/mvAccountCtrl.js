

angular.module('app').controller('mvAccountCtrl',function($scope,$http){
    $scope.signin=function(userName,Password) {
        console.log('You are here "' + userName + '"  , Password:"' + Password + '".');

        //$http.defaults.useXDomain = true;
        //delete $http.defaults.headers.common['X-Requested-With'];

        $http.post('/login', { username: 'myapi', password: 'abc1234'})
        .then(function (response) {

        });

        //$http.post('http://localhost:1337/api/oauth/token',{grant_type:'password', client_id:'android',
        //    client_secret:'SomeRandomCharsAndNumbers', username:'myapi', password:'abc1234'})
        //        .then(function(response){
        //                                    console.log(response);
        //                                    //passport.authenticate('local', function(err, user, info) {
        //                                    //    if (err) { return next(err); }
        //                                    //    if (!user) { return res.redirect('/login'); }
        //                                    //    req.logIn(user, function(err) {
        //                                    //        if (err) { return next(err); }
        //                                    //        return res.redirect('/users/' + user.username);
        //                                    //    });
        //                                    //})(req, res, next);
        //});
    }
});