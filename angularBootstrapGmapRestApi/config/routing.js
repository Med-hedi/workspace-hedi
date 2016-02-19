'use strict';

app.config(function($routeProvider){
    $routeProvider

        .when('/',
        {
            templateUrl : 'views/listUsers.html',
            controller : 'listUsersController'
        })
        
        .when('/details/user/:id',
        {
            templateUrl : 'views/details_user.html',
            controller : 'detailsUserController'
        })
        
        .when('/gmap',
        {
            templateUrl : 'views/gmap.html',
        })
        
        .when('/databinding',
        {
            templateUrl : 'views/databinding.html',
        });
});     