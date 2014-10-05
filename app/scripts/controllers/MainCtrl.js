angular.module('angularGmailApp')
    .controller('MainCtrl', ['$route', '$routeParams', '$location', function($route, $routeParams, $location) {
        'use strict';
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }]);