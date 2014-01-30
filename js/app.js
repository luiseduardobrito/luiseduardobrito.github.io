var resumeApp = angular.module("resumeApp", [
	'ngRoute',
	'ngSanitize',
	'firebase',
	'resumeApp.controllers',
	'resumeApp.services',
	'resumeApp.directives'
]);

resumeApp.config(['$routeProvider', '$locationProvider',

	function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl'        
			})
			.when('/post/:id', {
				templateUrl: 'partials/single_post.html',
				controller: 'SinglePostCtrl'
			})
			.when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'ContactCtrl'
			})
			.when('/admin/post', {
				templateUrl: 'partials/create_post.html',
				controller: 'CreatePostCtrl'
			})
			.otherwise({
				redirectTo: '/not_found'
			});

		$locationProvider
			.html5Mode(false)
			.hashPrefix('!');
	}
]);