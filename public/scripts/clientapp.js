var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/entry', {
            templateUrl: '/views/templates/entry.html',
            controller: 'EntryController'
        })
        .when('/listing', {
            templateUrl: '/views/templates/listing.html',
            controller: 'ListingController'
        })
        .otherwise({
            redirectTo: 'entry'
        })


}]);