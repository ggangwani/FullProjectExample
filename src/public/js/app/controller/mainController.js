/**
 * Created by gunjan on 11/14/2015.
 */

angular.module("mainApp").controller("mainController",["$scope","$http","$rootScope", function($scope, $http, $rootScope){
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.address = "";
    $scope.rowData = [];
    $scope.showTable = function(){
        return     $scope.rowData.length === 0;
    };
    $scope.submit = function(){
        //alert("Submit clicked : " + $scope.firstName + " " + $scope.lastName + "," + $scope.address);
        $scope.rowData.push({firstName: $scope.firstName,lastName: $scope.lastName, address:$scope.address});
        $rootScope.$broadcast("header.counter", $scope.rowData.length);
    }
    $scope.save = function(){
        _.each($scope.rowData, function(val){
            $http.put("http://localhost:4567/save",val).success(function(result){
                alert(result);
            }).error(function(error){
                alert(error);
            });
        });
    }
}]);