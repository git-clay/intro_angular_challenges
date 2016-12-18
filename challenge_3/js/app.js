console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet

}



function loanController($scope){
	this.amount = 0;
	this.apr = 0;
	this.month = function(val){
		$scope.accrued_interest= accrued_interest(val,this.amount,this.apr);
		this.total_balance=total_balance(this.accrued_interest);
	};


}

function accrued_interest(val,amount,apr){
	var interest = val*amount*(apr/100);
	console.log(interest,'interest');
	return interest;
}
function total_balance(stuff){
console.log(stuff)
	// var interest = val*amount*apr;
	// console.log("balance")
	// return interest;
}
app.controller("loanController", loanController);