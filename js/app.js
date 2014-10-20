(function() {
	var app = angular.module('store', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});
	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(selectedTab) {
			this.tab = selectedTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}

	});

	var gems = [
		{
			name: "Dodecahdron",
			price: 2.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false,
			createDate: new Date(),
			images: [
				{
					full: "images/Dodecahdron.png",
					thumb: "images/Dodecahdron-thumb.png"
				},
				{
					full: "images/Dodecahdron-2.png",
					thumb: "images/Dodecahdron-thumb-2.png"
				}
			]
		},
		{
			name: "Pentagonal gem",
			price: 5.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false,
			createDate: new Date(),
			images: [
				{
					full: "images/Pentagonal.png",
					thumb: "images/Pentagonal-thumb.png"
				},
				{
					full: "images/Pentagonal-2.png",
					thumb: "images/Pentagonal-thumb-2.png"
				}
			]
		},
		{
			name: "Pearl gem",
			price: 8.95,
			description: ". . .",
			canPurchase: true,
			soldOut: false,
			createDate: new Date(),
			images: [
				{
					full: "images/Pearl.png",
					thumb: "images/Pearl-thumb.png"
				},
				{
					full: "images/Pearl-2.png",
					thumb: "images/Pearl-thumb-2.png"
				}
			]
		}
	];
})();