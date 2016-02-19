'use strict';
/*
 * Author Mohamed Hedi KHEFACHA : Khefacha.hedi@gmail.com
 */
app.service('restApiService',['$rootScope', '$http', 'appSettings', function($rootScope, $http, appSettings){
    /*
     * Get List users
     */
    
    this.getListsUsers = function(){
	     return  $http({
	        url: appSettings.baseUrl+'/users' ,
	        method: "Get",
	     }).success(function (data, status, headers, config) {

	        $rootScope.listUsers = data;

	     }).error(function (data, status, headers, config) {
	        
	     });
    };
    
    /*
     * Get details user by ID
     */
    
    this.getDetailsUserById = function(id){
	     return  $http({
	        url: appSettings.baseUrl+'/users/'+id ,
	        method: "Get",
	     }).success(function (data, status, headers, config) {
             
             $rootScope.detailsUser = data;
 
	     }).error(function (data, status, headers, config) {
	        
	     });
    };
    
}]);



