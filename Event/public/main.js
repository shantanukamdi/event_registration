var eventModule = angular.module("EventModule", ['ngRoute','RegistrationModule', 'SuccessModule', 'AdminModule']);

eventModule.config(function($routeProvider){
   $routeProvider
        .when('/',{
            templateUrl: 'partials/registration/registration.tpl.html',
            controller: 'RegistrationController'
        })
        .when('/success',{
            templateUrl: 'partials/success/success.tpl.html',
            controller: 'SuccessController'
        })
        .when('/admin',{
            templateUrl: 'partials/admin/admin.tpl.html',
            controller: 'AdminController'
        })
        .when('/admin/users',{
            templateUrl: 'partials/admin/user.tpl.html',
            controller: 'UserController',
            resolve: {
                "check": function($rootScope, $location){
                    if(!$rootScope.auth){
                        $location.path('/');
                    }
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});


