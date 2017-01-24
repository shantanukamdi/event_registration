var reg = angular.module('RegistrationModule', []);

reg.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }]);



reg.controller('RegistrationController', function($scope, $http, $location, $rootScope){
    var fd = new FormData();
    $scope.adminModal = function(){
        $location.path('/admin');    
    }    
    $scope.saveToDb = function(user){
               
        var data = user;
        $http.post('/db', data)
             .then(function success(response){
                $rootScope.registrationId = response.data;
                $location.path('/success');
            }, function error(reason){
                console.log(reason);
            });
    }
});