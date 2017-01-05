angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.branches', {
    url: '/branches',
    views: {
      'side-menu21': {
        templateUrl: 'templates/branches.html',
        controller: 'branchesCtrl'
      }
    }
  })

  .state('menu.teachers', {
    url: '/teachers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teachers.html',
        controller: 'teachersCtrl'
      }
    }
  })

  .state('menu.students', {
    url: '/students',
    views: {
      'side-menu21': {
        templateUrl: 'templates/students.html',
        controller: 'studentsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/branches')

  

});