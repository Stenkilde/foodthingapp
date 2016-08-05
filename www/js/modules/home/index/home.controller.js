(function () {
    'use strict';

    angular
    	.module('foodApp')
    	.controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {
    	var vm 		= this;

    	activate();

    	function activate() {
    	   console.log('test');
        }
    }

})();
