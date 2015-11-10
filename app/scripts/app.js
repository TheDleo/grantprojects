'use strict';

/**
 * @ngdoc overview
 * @name grantprojectsApp
 * @description
 * # grantprojectsApp
 *
 * Main module of the application.
 */
var grantprojectsApp = angular.module('grantprojectsApp', ['ui.router']);
  
  grantprojectsApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });

  });
