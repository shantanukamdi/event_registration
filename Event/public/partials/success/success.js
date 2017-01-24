var success = angular.module('SuccessModule', []);

success.controller('SuccessController', function($scope, $rootScope){
   $scope.registrationId = $rootScope.registrationId; 
});