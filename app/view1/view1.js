'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$http", function($scope, $http) {
$scope.Search = function() {
  var client_id = "daf291f22aba688c64d0113e8ad87386bc3b7fbd3a85ef7f7e49772df669a9fe"
  $scope.images = function() {
    $http({
      
      method: "GET",
      header: {
        'Content-Type': "application/json",
      },
      url: "https://api.unsplash.com/search/photos?client_id="+client_id+"&query="+$scope.search+"&per_page=100&page=1",
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
        photos.push({
          full: full,
          regular: regular,
          raw: raw,
          small: small,
          thumb: thumb
        });
      }
        // // for (var i = 0; i < totalFound; i++) {
        //   var full = res.data.results[i].urls.full;
        //   var regular = res.data.results[i].urls.regular;
        //   var raw = res.data.results[i].urls.raw;
        //   var small = res.data.results[i].urls.small;
        //   var thumb = res.data.results[i].urls.thumb;

        // //   photos.push({
       
        // //   });
        // // }

        $scope.photos = photos;

      },
      function(res) {
        console.log('error', res);
      });
  }

  $scope.images();
}
}]).
filter('rangeFilter', function() {
  return function( items, rangeInfo ) {
      var filtered = [];
      var min = parseInt(rangeInfo.userMin);
      var max = parseInt(rangeInfo.userMax);
      // If time is with the range
      angular.forEach(items, function(item) {
          if( item.time >= min && item.time <= max ) {
              filtered.push(item);
          }
      });
      return filtered;
  };
});;