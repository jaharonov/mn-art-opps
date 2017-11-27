myApp.controller('TodoController', function (ResService, GrantService) {
    console.log('TodoController created');
    var vm = this;
    vm.todoService = TodoService;
    vm.todoObject = TodoService.resObject;
});