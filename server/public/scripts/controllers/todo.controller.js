myApp.controller('TodoController', function ($scope, UserService, GrantService, ResService, $http, $mdDialog) {
    console.log('TodoController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.resService = ResService;
    vm.grantService = GrantService;
    vm.show = true;
});

vm.getRes = function () {
    $http.get('/todos').then(function (response) {
        vm.todos = response.data;
        // vm.showDelete();
        console.log(response);
    }).catch(function (error) {
        console.log('failure on GET route res controller');
    });
}
vm.getRes();