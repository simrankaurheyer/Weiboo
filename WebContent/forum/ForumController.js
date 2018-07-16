myApp.controller("ForumController",function($scope,$http,$location,$rootScope)
{
	
	$scope.Forum={forumname:'',forumcontent:'',email:''}
	
	$scope.forums;
	
	$scope.insertforum=function()
	{
		
		console.log("adding forum");
		$http.post('http://localhost:8086/WeiboRestServices/forum/add',$scope.Forum)
		.then(function(response)
		{
			alert('forum added')
			$location.path("/showforum");
		});
	}
	
	function forumlist()
	{
		console.log("listing forums");
		$http.get('http://localhost:8086/WeiboRestServices/forum/list')
		.then(function(response)
				{
					$scope.forums=response.data;
					
				});
	}
	forumlist();
	
	
	$scope.deleteforum=function(forumid)
	{
		console.log("deleting forum");
		$http.delete('http://localhost:8086/WeiboRestServices/forum/delete/'+forumid)
		.then(function(response)
				{
			alert("forum deleted")
			$location.path("/allforum");
				});
	}
	
	$scope.approveforum=function(forumid)
	{
		console.log("approving forum");
		$http.put('http://localhost:8086/WeiboRestServices/forum/approve/'+forumid)
		.then(function(response)
				{
			alert("forum approved")
			$location.path("/allforum");
				});
	}
	
	$scope.rejectforum=function(forumid)
	{
		console.log("rejecting forum");
		$http.put('http://localhost:8086/WeiboRestServices/forum/reject/'+forumid)
		.then(function(response)
				{
			alert("forum rejected")
			$location.path("/allforum");
				});
	}
	
	$scope.incrementlike=function(forumid)
	{
		console.log("incrementLike function");
		$http.get('http://localhost:8086/WeiboRestServices/forum/incLike/'+forumid)
		.then(function(response)
				{
			
			$location.path("/allforum");
				});
	}
});