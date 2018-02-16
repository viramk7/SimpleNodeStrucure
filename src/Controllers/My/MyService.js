app.service('myService', function ($http) {

    var service = {};

    service.getInitData = function () {
        return $http.get('/GetInitData');
    }

    service.PostName = function (model) {
        return $http.post('/PostName',model);
    }

    return service;
});
