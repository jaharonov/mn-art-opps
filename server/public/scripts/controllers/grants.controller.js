myApp.controller('GrantsController', function (GrantsService) {
    console.log('GrantsController created');
    var vm = this;
    vm.grantsService = GrantsService;
    vm.grantsObject = GrantsService.grantsObject;
});