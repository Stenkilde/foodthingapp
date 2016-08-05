(function() {
	'use strict';

	angular.module('foodApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'js/modules/_application/application.template.html'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();
