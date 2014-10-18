(function() {
	var app = angular.module('store', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: "Dodecahdron",
			price: 2.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Pentagonal gem",
			price: 5.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false
		}
	];
})();