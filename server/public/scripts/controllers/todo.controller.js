myApp.controller('TodoController', function (ResService) {
    console.log('TodoController created');
    var vm = this;
    vm.todoService = TodoService;
    vm.todoObject = TodoService.resObject;
});