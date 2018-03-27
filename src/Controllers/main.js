var app = angular.module("myApp",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state({
        name: 'Page2',
        url: '/Page2',
        templateUrl: '/Views/Page2.html'
    });

    $stateProvider.state({
        name: 'Index',
        url: '/Index',
        templateUrl: '/Views/Page1.html'
    });

    $urlRouterProvider.otherwise('/Index');
});