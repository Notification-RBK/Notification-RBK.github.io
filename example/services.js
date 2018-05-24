angular.module('exampleApp.services', [])
.factory('note', function ($http, $location, $window,exampleForm) {
  var submitIfno = function (name,status) {
    return $http({
      method: 'POST',
      url: '/sth',
      data:{ name:name,status:status}
    })
    .then(function (resp) {
      // return resp.data.token;
      console.log('fucks')
    });
  };
  return {
    name: name,
    status: status
   
  };
});
