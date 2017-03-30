let app = angular.module('galPhoto', ['ngRoute', 'ngResource', 'bootstrapLightbox']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/gallery', {
      templateUrl: 'views/gallery.view.html',
      controller: 'GalleryCtrl'
    })
    .otherwise({redirectTo: '/gallery'})
}]);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
