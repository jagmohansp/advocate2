var dashboard = angular.module('dashboard', ['ui.router']);


dashboard.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app.dashboard', {
			url: '/dashboard',

			views: {
				'container@': { templateUrl: 'app/modules/dashboard/views/center.html' }
			}
		});
	$stateProvider
		.state('app.about', {
			url: '/about',

			views: {
				'container@': { template: 'Heeee!! What Should i Say?: I am Sudeep Singh!' }
			}
		});
});