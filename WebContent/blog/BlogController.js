myApp.controller("BlogController",function($scope,$http,$location,$rootScope, $route)
{
	
	$scope.Blog={blogid:'',blogname:'',blogcontent:'',bloglikes:'',email:'',blogcreatedDate:'',blogstatus:''}
	
	$scope.BlogComment={blogcommentid:'' , loginname:'',blogid:'' , comments:'' , commentedDate:''}
	
	$scope.blogs;
	
	$scope.insertblog=function()
	{
		
		console.log("adding blog");
		$http.post('http://localhost:8086/WeiboRestServices/insertblog',$scope.Blog)
		.then(function(response)
		{
			console.log('blog added');
			$location.path("/showblog");
		});
	}
	
	function bloglist()
	{
		console.log("listing blogs");
		$http.get('http://localhost:8086/WeiboRestServices/blog/list')
		.then(function(response)
				{ console.log(response.data);
					$scope.blogs=response.data;
				});
	}
	bloglist();
	
	
	$scope.deleteblog=function(blogid)
	{
		console.log("deleting blog");
		$http.delete('http://localhost:8086/WeiboRestServices/blog/delete/'+blogid)
		.then(function(response)
				{
			console.log("blog deleted");
			$route.reload();
			
				});
	}
	
	$scope.approveblog=function(blogid)
	{
		console.log("approving blog");
		$http.put('http://localhost:8086/WeiboRestServices/blog/approve/'+blogid)
		.then(function(response)
				{
			console.log("blog approved");
			$route.reload();
				});
	}
	
	$scope.rejectblog=function(blogid)
	{
		console.log("rejecting blog");
		$http.put('http://localhost:8086/WeiboRestServices/blog/reject/'+blogid)
		.then(function(response)
				{
			console.log("blog rejected");
			$route.reload();
				});
	}
	
	
	$scope.incrementlike=function(blogid)
	{
		console.log("incrementLike function");
		$http.get('http://localhost:8086/WeiboRestServices/blog/incrementLike/'+blogid)
		.then(function(response)
				{
			
			 $route.reload();
			 
						});
	}
	
	
	
	
	
	
	
/*------------------------------------------------	blog comment  ---------------------------------*/
	
	
	$scope.commentedblog = function(blogid)
	{
		$http.get('http://localhost:8086/WeiboRestServices/getblog/'+blogid)
		.then(function(response)
				{
					$rootScope.commentedblogid = blogid;
					$rootScope.commentedBlogData = response.data;
					$location.path("/blogcomment");
				});
		
	}
	
	$scope.commentblog = function()
	{
		alert("add blog comment")
		$http.post('http://localhost:8086/WeiboRestServices/blog/comment',$scope.BlogComment)
		.then(function(response)
				{
			alert("now blog comment")
					$route.reload();
					console.log("commented succesfully");
				});
	}
	
	$scope.removeBlogComment = function(blogcommentid)
	{
		console.log("deleting blog comment");
		$http.post('http://localhost:8086/WeiboRestServices/blog/comment/delete/'+blogcommentid)
		.then(function(response)
				{
					$route.reload();
				});
	}
	
	function commentlist()
	{
		$http.get('http://localhost:8086/WeiboRestServices/blog/listComments/'+$rootScope.commentedblogid)
		.then(function(response)
				{
					console.log("loading comments");
					$scope.commentedData = response.data;
				});
	}
	commentlist();

	
});