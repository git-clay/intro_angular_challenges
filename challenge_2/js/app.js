console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController(){
  this.full_name = "Clay Smith";
  this.age = '25';
  this.city = 'Kernersville';
  this.state = 'NC';

}
app.filter('shout', function(){
	return function(input){
		input = input || '';
		var out = input +'!';
		return out;
	};
});

function ClassController($scope){
	this.class_name= "Big Nick's Cult of Zebulon";
	$scope.enrolled_students=[
	{
		lastName:'Ridge',
		firstName:'Brian'
	},	{
		lastName:'Issac',
		firstName:'Erik'
	},	{
		lastName:'Walter',
		firstName:'Gisella'
	},	{
		lastName:'Liechty',
		firstName:'Guy'
	},	{
		lastName:'Bloomquist',
		firstName:'Kevin'
	},	{
		lastName:'Kraus',
		firstName:'Larry'
	},	{
		lastName:'Schurr',
		firstName:'Merry'
	},	{
		lastName:'Leibowitz',
		firstName:'Nate'
	},	{
		lastName:'Wierenga',
		firstName:'Micha'
	},	{
		lastName:'Smith',
		firstName:'Clay'
	}
	];
	$scope.startDate = new Date(10,31,2016)
	$scope.endDate ='02/02/2017';
	$scope.daysRemaining = function(){

	};
}




