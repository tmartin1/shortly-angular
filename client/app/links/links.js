angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);

  $scope.data = { links: [] };

  $scope.getLinks = function() {
    $scope.getAll(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();

});
