var admin = angular.module('AdminModule', ['firebase']);

admin.controller('AdminController', function($scope, $location, $http, $rootScope, $firebaseAuth){
    
    ///var ref = new Firebase("https://demoproject-e1f34.firebaseio.com");
   
    /*var ref = new Firebase("https://demoproject-e1f34.firebaseio.com");
    $rootScope.authObj = $firebaseAuth(ref);*/
   
    $scope.Login = function(admin){
      
        if(admin.email == 'admin' && admin.password == 'admin'){
            $rootScope.auth = true;
            $location.path('/admin/users');
        }else{
            alert('Check your email or password');
            $location.path('/admin');
            $scope.admin.email = '';
            $scope.admin.password = '';
        }
    }
});

admin.controller('UserController', function($scope, $location, $http, $rootScope){
    $http.get('/db/getInformation')
         .then(function success(response){
            $scope.list = response.data.message;
        }, function error(error){
            console.log(error);
        });
    
    $scope.logout = function(){
        $rootScope.auth = false;
        $location.path('/');
    }
    
    
});


