myApp.controller('ResController', function (ResService) {
    console.log('ResController created');
    var vm = this;
    vm.userService = ResService;
    vm.userObject = ResService.resObject;
});