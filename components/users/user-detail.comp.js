angular.module('app').component("usersDetail",{ //costruzione del componente users
    templateUrl: 'components/users/user-detail.tpl.html',  // collegamento al template  
    bindings: { user: '<' },
    controller : 'usersCtrl',   // riferimento al controller
});

angular.module('app').controller('usersCtrl', function($scope, UserService) {
    // UserService.list();

UserService.list().then(list => $scope.users = list);
    console.log('sono dentro a comp users');

                    console.log('aaaa', $scope.users);
})