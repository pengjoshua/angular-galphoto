angular.module('galPhoto')

// .factory('instagram', ['$resource', function($resource) {
//   let userid = '3584565980';
//   let access_token = '3584565980.548e6ca.1ca01fd08f75469e94adad173df6c652';
//   // let endpoint = 'https://api.instagram.com/v1/users/'+userid+'/media/recent/?access_token='+access_token;
//   let endpoint = 'https://api.instagram.com/v1/users/3584565980/media/recent/?access_token=3584565980.548e6ca.1ca01fd08f75469e94adad173df6c652';
//   return $resource(endpoint, {}, {
//     query: {method: 'JSONP'}
//   });
// }]);

.factory('instagram', ['$resource', function($resource) {
  return {
    fetchPopular: function(callback){
      // let client_id = '548e6ca074be430495eb8843026ca353';
      let userid = '3584565980';
      let access_token = '3584565980.548e6ca.1ca01fd08f75469e94adad173df6c652';
      // let api = $resource('https://api.instagram.com/v1/users/'+userid+'/media/recent/?access_token='+access_token,
      let api = $resource('https://api.instagram.com/v1/users/3584565980/media/recent/?access_token=3584565980.548e6ca.1ca01fd08f75469e94adad173df6c652',
      {
        // userid: '3584565980',
        // access_token: '3584565980.548e6ca.1ca01fd08f75469e94adad173df6c652'
      }, {
        fetch:{method:'JSONP'}
      });

      api.fetch(function(response) {
        callback(response.data);
      });
    }
  }
}]);
