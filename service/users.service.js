app.service('UserService', function($http) { // costruisco il servizio service
	const url= 'https://reqres.in/api/users';
  var service = {
    list: function() {
      return $http.get(url, { cache: true }).then(resp => resp.data.data)  //ottendo i
    }
  };
  
  return service;
});