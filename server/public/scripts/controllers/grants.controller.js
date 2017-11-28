myApp.controller('GrantController', function (UserService, $http, GrantService, $mdDialog) {
    console.log('GrantController created');
    var vm = this;
    vm.userObject = UserService.userObject;
    vm.userService = UserService;
    vm.grantService = GrantService;
    vm.grants = {};
    vm.show = true;
    vm.selectedIndex = GrantService.grantObj.selectedIndex;

    
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

    vm.addAGrant = function (newGrant) {
        console.log(newGrant);
        $http.post('/grants', newGrant).then(function (response) {
            console.log('Posted a grant!');
            // vm.thing.info = '';
            // vm.thing.imageUrl = '';
            // vm.getRes();
        }).catch(function (err) {
            alert('Please log in!');
            console.log('Can not post grant', err);

        });
    }


    vm.showMore = function (ev, i) {
        console.log('Clicked showMore', i);
        console.log(GrantService.resObj);
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
});

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


   

    
    

