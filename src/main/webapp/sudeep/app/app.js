var app = angular.module('app', ['ui.router', 'dashboard']);


app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',

			views: {
				'nav': { templateUrl: 'app/common/app.html', 
					 controller: 'HomeController',
					 controllerAs: 'vm'
			 	},

				'header': { templateUrl: 'app/common/views/header.html' },

				'footer': { templateUrl: 'app/common/views/footer.html' }
			}
		});
	$urlRouterProvider.otherwise('app');
});