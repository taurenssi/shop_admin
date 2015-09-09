(function(){
	var app = angular.module('ShopAdmin', ['ngRoute']);
	
	app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
		$locationProvider.html5Mode({enabled: true, requireBase: false});
		$routeProvider
			.when('/', {templateUrl: '/customers.html'})
			.when('/customers', {templateUrl: '/customers.html'})
			.when('/products', {templateUrl: '/products.html'});
	}]);
	
	app.controller('ApplicationController', ['$location', function($location){
		this.hello = "Hello!";
		this.currentMenu = 'customers';
		this.categories = categories;
		this.products = products;
		
		this.changePath = function(path){
			$location.path(path);
			if (path == '/' || path == '/customers'){
				this.currentMenu = 'customers';
			} else if (path == '/products'){
				this.currentMenu = 'products';
			} else {
				this.currentMenu = 'products';
			}
		};
		
	}]);
	
	var categories = [
	{
		id: 1,
		name: "Baby"
	},
	{
		id: 2,
		name: "Electronics"
	},
	{
		id: 3,
		name: "Alcohol"
	},
	{
		id: 4,
		name: "Food"
	}
	];
	
	var products = [
	{
		id: 1,
		name: "iPhone 6",
		category: "Electronics",
		price: 500
	},
	{
		id: 2,
		name: "Pampers",
		category: "Baby",
		price: 30
	},
	{
		id: 3,
		name: "Singleton, 1l",
		category: "Alcohol",
		price: 50
	}
	];
	
})();
