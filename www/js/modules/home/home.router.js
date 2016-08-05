(function() {
	'use strict';

	angular.module('foodApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.home',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'js/modules/home/index/home.template.html',
						controller: 'HomeCtrl',
						controllerAs: 'home'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
