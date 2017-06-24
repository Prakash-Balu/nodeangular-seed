/**
 * Login Controller
 */

angular.module('RDash')
    .controller('LoginCtrl', ['$scope', '$location', 'AuthServices', '$http', 'toaster', LoginCtrl]);

function LoginCtrl($scope, $location, AuthServices, $http, toaster) {
    $scope.users = [];
	
    $scope.init = function() {
        $scope.user = {
			name: '',
			password: ''
		};
		$scope.noError = false;
    };

    $scope.loginUser = function(userData) {
		/*angular.forEach($scope.users, function(value, key) {
			if(userData.name == value.name && userData.password==value.password){
				$scope.noError = true;
				$location.path('/home/dashboard');
			}
		});*/
		
		$scope.getUsers(userData);
		AuthServices.getUsers(userData)
		.success(function(data){
			$scope.users = data;
			
			
			if(data.code == 200) {
				$scope.noError = true;
				$location.path('/home/dashboard');
			} else {
				toaster.pop({
					type: 'error',
					body: data.message,
					timeout: 1000
				});
			}
		}).error(function(error){
			console.log(error);
			
		});
		
		
    };
	
	$scope.getUsers = function(userData) {
		
	};
	
    //Call function initialization
	$scope.init();
	//$scope.getUsers();
	
}
