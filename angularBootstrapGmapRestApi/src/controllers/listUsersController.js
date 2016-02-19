'use strict';
/*
 * Controller list users
 */
app.controller('listUsersController',function($scope, $rootScope, $http, restApiService, $timeout, $interval){
	$rootScope.pageName = 'home';
	
    $scope.map = {
        center: {
                   latitude: 56.162939,
                   longitude: 10.203921
                 },
        zoom: 8
    };
		
	// Get lists of users
	restApiService.getListsUsers().then(function(result){
	
	}).catch(function(){
	 	
   });
      
});
