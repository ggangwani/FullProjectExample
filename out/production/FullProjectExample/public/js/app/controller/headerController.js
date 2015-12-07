/**
 * Created by gunjan on 11/15/2015.
 */

angular.module("mainApp").controller("headerController", ["$scope","$timeout", function($scope, $timeout) {
    $scope.counterVal = 0;

    $scope.$on("header.counter", function(event, val){
        $scope.counterVal = val;
    });

    $scope.$watch("counterVal", function(newData, old){
        $timeout(function(){
            alert(old +"->" + newData);
        }, 3000);

    });
}]);