'use strict';
/*
 * Controller details user
 */

app.controller('detailsUserController',function($scope, $rootScope, $http, restApiService, $routeParams){
	$rootScope.pageName = 'details';
	var currentId = $routeParams.id;

	restApiService.getDetailsUserById(currentId).then(function(result){
	
	}).catch(function(){
	 	
    });
});

