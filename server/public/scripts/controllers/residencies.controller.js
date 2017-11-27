myApp.controller('ResController', function ($scope, UserService, ResService, $http, $mdDialog) {
    console.log('ResController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.resService = ResService;
    // vm.resObject = ResService.resObject;
    // vm.resObj = null;
    vm.residencies = [];
    vm.show = true;
    vm.selectedIndex = ResService.resObj.selectedIndex;
    

    vm.addARes = function (newRes) {
        console.log(newRes);
        $http.post('/residencies', newRes).then(function (response) {
            console.log('Posted a residency!');
             vm.getRes();
        }).catch(function (err) {
            alert('Please log in!');
            console.log('Can not post residency', err);
            
        })
    }
    vm.addTodo = function (newToDo) {
        console.log('clicked addTodo!', vm.userObject);
    }
    // vm.deleteBtn = function (id) {
    //     console.log('delete clicked');

    //     $http.delete('/info/' + id).then(function (response) {
    //         console.log('this is deleted');
    //         vm.getThings();
    //     }).catch(function (err) {
    //         alert('Please log in to delete stuff!');
    //         console.log('error', err);
    //     })
    // }

    vm.getRes = function () {
        $http.get('/residencies').then(function (response) {
            vm.residencies = response.data;
            // vm.showDelete();
            console.log(response);
        }).catch(function (error) {
            console.log('failure on GET route res controller');
        });
    }
    vm.getRes();
    // vm.setRes = function(i) {
    //     vm.resObj = i;
    //     console.log('setting index', i);
    //     return vm.resObj;
    // }
    vm.showMore = function (ev, i) {
        ResService.resObj.selectedIndex = i;
        console.log('Clicked showMore', i);
        console.log(ResService.resObj);

        $mdDialog.show({
            controller: 'ResController as rc',
            templateUrl: 'views/templates/dialog1.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
            // resolve: function(i) {
            //         vm.resObj = i;
            //         console.log('getting a res?',i);
                

            // }
        })}
        

            vm.hide = function () {
                $mdDialog.hide();
            };

            vm.cancel = function () {
                $mdDialog.cancel();
            };

            vm.answer = function (answer) {
                console.log(answer);
                $mdDialog.hide(answer);
            };

            
        });


    