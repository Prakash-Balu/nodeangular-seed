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
    };

    $scope.loginUser = function(userData) {
        AuthServices.getUsers(userData)
            .success(function(data) {
                if (data.code == 200) {
                    $location.path('/admin/dashboard');
                } else {
                    toaster.pop({
                        type: 'error',
                        body: data.message,
                        timeout: 1000
                    });
                }
            }).error(function(error) {
                console.log(error);

            });
    };

    //Call function initialization
    $scope.init();
}
