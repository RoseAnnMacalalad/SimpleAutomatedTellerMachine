app.controller('Name', ['$scope', function($scope){
	$scope.first = 'Rose Ann ';
	$scope.last = 'Macalalad ';
	
	$scope.onClickmainForm = function()
	{ $scope.showmainForm = true; }
}])

app.controller('deposits', ['$scope', function($scope){
	
	$scope.onClickdepForm = function()
	{$scope.deposit= true;}	

	$scope.depForm = function()
	{$scope.depsss= true;}

	$scope.bal = 12000;
	$scope.add = function(bal, num1){
			$scope.newbal = parseInt(bal) + parseInt(num1);}
}])


app.controller('balance', ['$scope', function($scope){
	$scope.bals = 12000;
	$scope.onClickbalForm = function()
	{$scope.bal = true;}	
}])

app.controller('withdraw', ['$scope', function($scope){
	$scope.onClickdrawForm = function()
	{$scope.draw= true;}	

	$scope.drawsForm = function()
	{$scope.drawsss= true;}

	$scope.bal = 12000;
	$scope.subtract = function(bal, num1){
			$scope.newbal = parseInt(bal) - parseInt(num1);}
}])













