myApp.controller("UserController",function($scope, $http,$location,$rootScope,$route)
{
	$scope.User={email:'', name:'', password:'', address:'', mobile:'',role:'', loginname:''}
	
	$scope.CurrentUser;
	
	$scope.register=function()
	{
		alert("THIS IS REGISTER FUNCTION")
		console.log('Name:' +$scope.User.name);
		console.log('Password:' +$scope.User.password);
			
		$http.post('http://localhost:8086/WeiboRestServices/registerUser',$scope.User)
		.then(function(response)
				{
						console.log("registration successful");
						alert("user registered successfully")
						console.log(response.statusText);
						$location.path("/login");
				});
	}
	
	
	
	$scope.login=function()
	{
	$http.post('http://localhost:8086/WeiboRestServices/uservalidate',$scope.User)
	.then(function(response)
			{
				console.log("logged in successful");
				$rootScope.CurrentUser=response.data;
				alert("Welcome, "+$rootScope.CurrentUser.loginname)
				$location.path("/home");
				
			},
			function(reponse)
			{
				alert("invalid credentials")
			});
	}
	
	$scope.logout=function()
	{
		delete $rootScope.CurrentUser; //will remove the logged in User
		alert("User logged out ...")
		$location.path("/login");
		$window.location.reload();
	}
	});
