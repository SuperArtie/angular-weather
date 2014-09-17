/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope', 'wu', function($scope, wu){
    $scope.title = '10 day Forecassst';
    $scope.getForecast = function(){
      wu.getForecast($scope.zip).then(function(response){
        //debugger;
        //console.log(response);
        $scope.forecasts = response.data.forecast.simpleforecast.forecastday;
      });
    };
  }]);
})();
