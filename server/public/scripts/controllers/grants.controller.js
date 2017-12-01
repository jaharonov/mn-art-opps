myApp.controller('GrantController', function (UserService, $http, GrantService, $mdDialog) {
    console.log('GrantController created');
    var vm = this;
    vm.userObject = UserService.userObject;
    vm.userService = UserService;
    vm.grantService = GrantService;
    vm.grants = {};
    vm.show = true;
    vm.selectedIndex = GrantService.grantObj.selectedIndex;


    vm.addAGrant = function (newGrant) {
        console.log(newGrant);
        $http.post('/grants', newGrant).then(function (response) {
            console.log('Posted a grant!');
            vm.getGrant();
        }).catch(function (err) {
            alert('Please log in!');
            console.log('Can not post grant', err);

        });
    }


    vm.addGrantRev = function (grantId, newRev) {
        var newRev = { objectToSend: newRev };
        console.log('in reviews:', newRev, grantId);
        $http.put('/grants/' + grantId, newRev).then(function (response) {
            console.log('Posted a review!');
            vm.getGrant();
        }).catch(function (err) {

            console.log('Can not post review', err);

        });
    }

    vm.getGrant = function () {
        $http.get('/grants').then(function (response) {
            vm.grants = response.data;
            // vm.showDelete();
            console.log(response);
        }).catch(function (error) {
            console.log('failure on GET route grant controller');
        });
    }
    vm.getGrant();


    vm.showMore = function (ev, i) {
        console.log('Clicked showMore', i);
        console.log(GrantService.grantObj);
        $mdDialog.show({
            controller: 'GrantController as gc',
            templateUrl: 'views/templates/dialog2.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            // resolve: function () {
            //     return theObject;
            //     console.log(theObject);

            // }
        })
    }

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


vm.addTodo = function (id, grant) {


    console.log('Clicked addTodo', id);
    // var newTodo = { objectToSend: newTodo };
    // console.log('in reviews:', newTodo, resId);
    $http.put('/grants/todos/' + id, grant).then(function (response) {
        console.log('Posted a todo!');
        vm.getGrant();
    }).catch(function (err) {

        console.log('Can not post todo', err);

    })
}

}); 


   

    
    

