myApp.controller('GrantController', function (UserService, $http) {
    console.log('GrantController created');
    var vm = this;
    vm.userObject = UserService.userObject;
    // vm.resService = ResService;
    // vm.resObject = ResService.resObject;
    vm.grantObject = {};
    vm.show = true;
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

    // vm.getThings = function () {
    //     $http.get('/info').then(function (response) {
    //         vm.things = response.data;
    //         vm.showDelete();
    //         console.log(response);
    //     }).catch(function (error) {
    //         console.log('failure on GET route info.controller');
    //     });
    // }
    // vm.getThings();

});