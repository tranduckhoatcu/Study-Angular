'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
}])
.factory('myService', function(){
  var myjsonObj = null;//the object to hold our data
   return {
   getJson:function(){
     return myjsonObj;
   },
   setJson:function(value){
    myjsonObj = value;
   }
   }
});
;
