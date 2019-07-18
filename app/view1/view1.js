'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$http", function($scope, $http) {
  var client_id = "daf291f22aba688c64d0113e8ad87386bc3b7fbd3a85ef7f7e49772df669a9fe";
  var another_client_id = "1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a";
  var currentPage = 1 ;
$scope.Search = function() {
  currentPage = 1 ; 
  $scope.images = function() {
    $http({
      
      method: "GET",
      header: {
        'Content-Type': "application/json",
      },
      url: "https://api.unsplash.com/search/photos?client_id="+client_id+"&query="+$scope.search+"&per_page=15&page="+currentPage,
    }).then(function(res) {
        var totalFound = res.data.results.length;
        
        $scope.length = totalFound  ;

        var photos = [];
        for (var i = 1; i < totalFound; i++) {
        
          var full = res.data.results[i].urls.full;
          var regular = res.data.results[i].urls.regular;
          var raw = res.data.results[i].urls.raw;
          var small = res.data.results[i].urls.small;
          var thumb = res.data.results[i].urls.thumb;
          var number1 = Math.floor(Math.random() * 2) + 1;
          var number2 = Math.floor(Math.random() * 2) + 1;
          var test = true
          while(test){
            if(number1 == number2 == 2){
              number1 = Math.floor(Math.random() * 2) + 1;
              number2 = Math.floor(Math.random() * 2) + 1;
            }
            else{
              photos.push({
                number1: number1,
                number2: number2,
                full: full,
                regular: regular,
                raw: raw,
                small: small,
                thumb: thumb
              });
              test = false;
            }
      }
    }
        $scope.photos = photos;

      },
      function(res) {
        console.log('error', res);
      });
  }

  $scope.images();
}
$scope.nextPage = function() {
  currentPage++ ; 
  $scope.images();
}
}])
;