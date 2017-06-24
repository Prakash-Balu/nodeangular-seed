/**
 * Auth Services
 */

angular.module('RDash')
    .service('AuthServices', ['$http', AuthServices]);

function AuthServices($http) {   
	this.getUsers = function(userData) {
		/*return $http.get('data/login.json')
		.success(function(data){
			 return data;
		}).error(function(error){
			alert(error);
		});*/
		
		return $http.post('http://localhost:3000/users',  {username: userData.name, password: userData.password })
		.success(function(data){
			 return data;
		}).error(function(error){
			alert(error);
		});
	};
	
	this.setUsers = function(userData) {
		return $http.post('http://localhost:8080/register.php', userData)
		.success(function(data){
			 return data;
		}).error(function(error){
			alert(error);
		});
	};
	

}
