myApp.controller('ResController', function ($scope, UserService, ResService, $http, $mdDialog) {
    console.log('ResController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.resService = ResService;
    vm.residencies = [];
    vm.show = true;
    vm.selectedIndex = ResService.resObj.selectedIndex;
    

    vm.addARes = function (newRes) {
        console.log(newRes);
        $http.post('/residencies', newRes).then(function (response) {
            console.log('Posted a residency!', vm.residency.name);
            vm.residency.name = '';
            vm.residency.text = '';
            vm.residency.location = '';
            vm.residency.deadline = '';
            vm.residency.url = '';
            vm.residency.imageurl = '';
            
            
             vm.getRes();
        }).catch(function (err) {
            alert('Please log in!');
            console.log('Can not post residency', err);
            
        });
    }
    

    vm.addResRev = function (resId, newRev) {
        var newRev = {objectToSend: newRev};
        console.log('in reviews:', newRev, resId);
        $http.put('/residencies/' + resId, newRev).then(function (response) {
            console.log('Posted a review!');
            vm.getRes();
        }).catch(function (err) {
            
            console.log('Can not post review', err);

        })
    }

    vm.addTodo = function (resId, res) {
        
        
        console.log('Clicked addTodo', res);
        // var newTodo = { objectToSend: newTodo };
        // console.log('in reviews:', newTodo, resId);
        $http.put('/residencies/todos/' + resId, res).then(function (response) {
            console.log('Posted a todo!');
            vm.getRes();
        }).catch(function (err) {

            console.log('Can not post todo', err);

        })
    }


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
    vm.deleteARes = function (resId, res) {
        console.log('delete clicked', resId);

        $http.delete('/residencies/' + resId).then(function (response) {
            console.log('this is deleted');
            vm.getRes();
        }).catch(function (err) {
            alert('Please log in to delete stuff!');
            console.log('error', err);
        })
    }
            
        });




    