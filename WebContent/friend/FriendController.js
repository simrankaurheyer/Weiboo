myApp.controller("FriendController",function($http,$scope,$rootScope,$location,$route)
{ 
		$scope.Friend = {friendname:'' ,friendstatus:'' ,loginname:''}
		
		$scope.friendlist;
		$scope.suggestlist;
		$scope.pendinglist;
		
		function FriendList()
		{
			$http.get('http://localhost:8086/WeiboRestServices/friend/list')
			.then(function(response)
					{
						$scope.friendlist=response.data;
					},
					function(response)
					{
						$scope.friendlist=undefined;
					});
		}
		FriendList();
		
		function suggestpeople()
		{
			$http.get('http://localhost:8086/WeiboRestServices/friend/suggested')
			.then(function(response)
					{
						$scope.suggestlist=response.data;
					},
					function(response)
					{
						$scope.suggestlist=undefined;
					});
		}
		suggestpeople();
		
		function pendingrequest()
		{
			$http.get('http://localhost:8086/WeiboRestServices/friend/pendingRequest')
			.then(function(response)
					{
						$scope.pendinglist=response.data;
					},
					function(response)
					{
						$scope.pendinglist=undefined;
					});
		}
		pendingrequest();
		
		$scope.sendrequest=function(loginname)
		{
			$http.get('http://localhost:8086/WeiboRestServices/friend/sendRequest/'+loginname)
			.then(function(response)
					{
						console.log("friend request sent");
						$route.reload();
					});
		}
		
		$scope.acceptrequest=function(friendid)
		{
			$http.post('http://localhost:8086/WeiboRestServices/friend/acceptRequest/'+friendid)
			.then(function(response)
					{
			console.log("friend request accepted");
						$location.path("/myfriends");
					});
		}
		
		$scope.cancelrequest=function(friendid)
		{
			$http.delete('http://localhost:8086/WeiboRestServices/friend/delete/'+friendid)
			.then(function(response)
					{
						console.log("friend request cancelled");
						$route.reload();
					});
		}
		
		$scope.unfriend=function(friendid)
		{
			$http.delete('http://localhost:8086/WeiboRestServices/friend/delete/'+friendid)
			.then(function(response)
					{
						console.log("friend removed");
						$route.reload();
					});
		}
		
		
});