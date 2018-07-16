myApp.controller("JobController",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.Job={jobtitle:'' ,jobdescription:'' ,jobsalary:'' ,jobqualification:'' ,jobstatus:'' ,no_of_openings:''}
	
	$scope.JobApplication = {jobapplicationid:'' ,jobapplicationreason:''}
	
	
	function joblists()	
	{
		console.log("will display jobs");
		$http.get('http://localhost:8086/WeiboRestServices/joblist')
		.then(function(response)
		{
			$rootScope.joblist=response.data;
		});
	}
	joblists();
	
	$scope.applyforid = function(jobid)
	{
		$http.get('http://localhost:8086/WeiboRestServices/job/get/'+jobid)
		.then(function(response)
				{
					$rootScope.jobbid = jobid;
					$rootScope.jobb = response.data;
					$location.path("/apply");
				})
	}
	
	$scope.addjob=function()
	{
		console.log("add job");
		$http.post('http://localhost:8086/WeiboRestServices/addjob', $scope.Job)
		.then(function(response)
				{
					alert("added job");
					$location.path("/alljobs");
				});
	}
	
	$scope.applyjob = function()
	{
		console.log("application for job");
		$http.post('http://localhost:8086/WeiboRestServices/applyforjob', $scope.JobApplication)
		.then(function(response)
				{
					alert("job applied")
					$location.path("/appliedjobs");
				},
				function(response)
				{
					alert("already applied for this job");
					$location.path("/alljobs");
				});
	}
	
	function appliedjobs()
	{
		$http.get('http://localhost:8086/WeiboRestServices/appliedjobs')
		.then(function(response)
				{
					$rootScope.jobsapplied=response.data;
				});
	}
	appliedjobs();
	
	function allapps()
	{
		$http.get('http://localhost:8086/WeiboRestServices/allapplications')
		.then(function(response)
				{
					$rootScope.appliedjobsadmin=response.data;
				});
	}
	allapps();
	
	$scope.approveapplication = function(jobapplicationid)
	{
		$http.get('http://localhost:8086/WeiboRestServices/application/approve/'+jobapplicationid)
		.then(function(response)
				{
					$route.reload();
				});
	}
	
	$scope.rejectapplication = function(jobapplicationid)
	{
		$http.get('http://localhost:8086/WeiboRestServices/application/reject/'+jobapplicationid)
		.then(function(response)
				{
					$route.reload();
				});
	}
	
	
	
	
	
	
	$scope.deletejob=function(jobid){
		
		$http.delete('http://localhost:8086/WeiboRestServices/deletejob/'+jobid)
		.then(function (response){
			$route.reload();
			
		},
		
		function(response)
		{
			alert("someone applied for this job");
		});
	}
	
	
	
	
	
	
});