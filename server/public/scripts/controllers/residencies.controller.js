myApp.controller('ResController', function ($scope, UserService, ResService, $http, $mdDialog) {
    console.log('ResController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.resService = ResService;
    vm.resObject = ResService.resObject;

    vm.residencies = [];
    vm.show = true;
    vm.addARes = function (newRes) {
        console.log(newRes);
        console.log(vm.resObject);
        $http.post('/residencies', newRes).then(function (response) {
            console.log('Posted a residency!');
            // vm.thing.info = '';
            // vm.thing.imageUrl = '';
             vm.getRes();
        }).catch(function (err) {
            alert('Please log in!');
            console.log('Can not post residency', err);
            
        })
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

    vm.showMore = function (ev, res) {
        console.log('Clicked showMore');
        console.log('clicked', res);
        $mdDialog.show({
            controller: 'ResController as rc',
            templateUrl: 'views/templates/dialog1.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            resolve: function() {
                return theObject;
                console.log(theObject);

            }
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
    // .then(function (answer) {
    //     $scope.status = 'You said the information was "' + answer + '".';
    // }, function () {
    //     $scope.status = 'You cancelled the dialog.';
    




            

 



