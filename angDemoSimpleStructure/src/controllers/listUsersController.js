'use strict';
/*
 * Controller list users
 */
app.controller('listUsersController',function($scope, $rootScope,$http, restApiService){
	$rootScope.pageName = 'home';
	
	// Get lists of users
	restApiService.getListsUsers().then(function(result){
	
	}).catch(function(){
	 	
   });
      
});
