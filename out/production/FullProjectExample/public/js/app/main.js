/**
 * Created by gunjan on 11/14/2015.
 */
angular.module("mainApp",["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "public/home.html",
            controller: "mainController"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "public/contact.html",
            controller: "contactController"
        });

    $urlRouterProvider.otherwise("/");

});