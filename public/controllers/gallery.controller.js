angular.module('galPhoto')

.controller('GalleryCtrl', ['$scope', 'instagram', 'Lightbox', function($scope, instagram, Lightbox) {

  $scope.images = [];
  let imgArray = [];

  // $scope.images = instagram.query();
  // angular.forEach($scope.images, function(value, key) {
  //   imgArray.push(value.images.standard_resolution);
  // });
  //
  // $scope.openLightboxModal = function(index) {
  //   Lightbox.openModal(imgArray, index);
  // }

  instagram.fetchPopular(function(data){
    console.log(data);
    $scope.images = data;
    angular.forEach(data, function(value, key) {
      imgArray.push(value.images.standard_resolution);
    });

    $scope.openLightboxModal = function(index) {
      Lightbox.openModal(imgArray, index);
    }
  });
}])
