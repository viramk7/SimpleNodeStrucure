app.controller('myCtrl', function ($scope, $http,myService) {
    
    $scope.init = function () {
        var promise = myService.getInitData();
        promise.then(function (res) {
            $scope.model = res.data;
        });
    }

    $scope.PostData = function(){
        var promise = myService.PostName($scope.model);
        promise.then(function (res) {
            if(res.data.Success){
                alert(res.data.Data);
            }
        });
    }

    $scope.init();
});