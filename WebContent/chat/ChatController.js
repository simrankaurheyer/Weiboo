myApp.controller("ChatController",function($scope,$rootScope,ChatService)
		{
	alert("hello i m in chat");
		
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function()
	{
		ChatService.send($rootScope.CurrentUser.loginname+":"+$scope.message);
		$scope.message="";
	};
	
	ChatService.receive().then(null,null,function(message)
	{
		$scope.messages.push(message);
	});
});