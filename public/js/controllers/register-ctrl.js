/**
 * Register Controller
 */

angular.module('RDash')
    .controller('RegisterCtrl', ['$scope', '$location', '$http', 'AuthServices',  RegisterCtrl]);

function RegisterCtrl($scope, $location, $http, AuthServices) {
    $scope.users = [];
    $scope.init = function() {
        
    };

    $scope.registerUser = function(userData) {
        if(userData.password == userData.cpassword) {
			$scope.users.push({name:userData.name,password:userData.cpassword});
			$scope.setUsers();
			$location.path("/");
		}
    };
	
	$scope.getUsers = function() {
		AuthServices.getUsers()
		.success(function(data){
			$scope.users = data;
		}).error(function(error){
			alert(error);
		});
	};
	
	$scope.setUsers = function() {
		AuthServices.setUsers($scope.users)
		.success(function(data){
			console.log(data);
		}).error(function(error){
			alert(error);
		});
	};

    //Call function initialization
	$scope.init();
	$scope.getUsers();
}
