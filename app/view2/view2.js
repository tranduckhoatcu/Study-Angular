'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", "$http",'myService', function($scope, $http,myService) {
  $scope.myreturnedData = myService.getJson();
  console.log($scope.myreturnedData);
  // console.log($scope.myreturnedData[myreturnedData[dda]])

}]);