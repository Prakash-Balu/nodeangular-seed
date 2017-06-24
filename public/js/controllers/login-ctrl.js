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
		angular.forEach($scope.users, function(value, key) {
			if(userData.name == value.name && userData.password==value.password){
				$scope.noError = true;
				$location.path('/home/dashboard');
			}
		});
		
		if(!$scope.noError) {
			toaster.pop({
                type: 'error',
                body: 'Enter Valid credentials',
                timeout: 1000
            });
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
	
    //Call function initialization
	$scope.init();
	$scope.getUsers();
	
}
