var myApp=angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider)
		{
			
			$routeProvider
			
			.when('/home',{
				templateUrl:"frontpage.html"
				
			})
			.when("/",{
				templateUrl : "frontpage.html"
					
				})
			.when("/contactUs",{
				templateUrl : "pages/contactus.html"
					})
			.when("/aboutUs",{
				
				templateUrl : "pages/aboutus.html"
			})
			.when("/register",{
				
				templateUrl : "user/register.html"
			})
			.when("/login",{
				
				templateUrl : "user/login.html"
			})
			
			.when("/editprofile",{
				
				templateUrl : "user/Profile.html"
			})
			
			.when("/loggedin",{
				
				templateUrl : "pages/aboutus.html"
			})
			.when("/logout",{
				
				templateUrl : "user/logout.html"
			})
			.when("/addblog",{
				
				templateUrl : "blog/addblog.html"
			})
			.when("/showblog",{
				
				templateUrl : "blog/showblog.html"
			})
			.when("/allblog",{
				
				templateUrl : "blog/showblog.html"
			})
			.when("/myblog",{
				
				templateUrl : "blog/myblog.html"
			})	
			.when("/blogcomment",{
				
				templateUrl : "blog/blogcomment.html"
			})		
			.when("/alljobs",{
						
				templateUrl : "job/alljobs.html"
			})	
			.when("/addjob",{
						
				templateUrl : "job/addjob.html"
			})
			.when("/apply",{
						
				templateUrl : "job/applyjob.html"
			})
			.when("/appliedjobs",{
						
				templateUrl : "job/appliedjobs.html"
			})
			.when("/adminjoblist",{
						
				templateUrl : "job/adminjoblist.html"
			})
			.when("/addforum",{
				
				templateUrl : "forum/addforum.html"
			})			
			.when("/allforum",{
				
				templateUrl : "forum/showforum.html"
			})
			.when("/showforum",{
				
				templateUrl : "forum/showforum.html"
			})
			.when("/myfriends",{
				
				templateUrl : "friend/friend.html"
			})
			.when("/suggestedpeople",{
				
				templateUrl : "friend/suggestedpeople.html"
			})
			.when("/friendrequest",{
				
				templateUrl : "friend/friendrequest.html"
			})
			.when("/chat",{
				
				templateUrl : "chat/chat.html"
			})
			
			.when("/blogcomment",{
				templateUrl : "blog/blogcomment.html"
				
			})
			
	
		});