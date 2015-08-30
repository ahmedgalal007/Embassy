angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mainCtrl' })
        .when('/login', { templateUrl: '/partials/account/login' , controller: 'mvAccountCtrl'})
        .when('/signup', { templateUrl: '/partials/account/signup' , controller: 'mvAccountCtrl' });
});

angular.module('app').controller('mainCtrl', function($scope){
    $scope.myVar = "Hello Angular";
});
