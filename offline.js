var newsApp = angular.module('NewsApp', []);
var contactApp = angular.module('contactApp', []);
var db = new PouchDB('News');
newsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Offline news are as follows: ";
    $scope.newArticles=[];
    db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
            console.log(result);
            result.rows.forEach(function(data){
                $scope.newArticles.push(data.doc);
            });
            console.log($scope.newArticles);
            $scope.$apply();
      }).catch(function (err) {
        console.log(err);
      });
}]);

contactApp.controller('contact', ['$scope', '$log', function ($scope, $log) {
    $scope.email = {
        text: 'example@gmail.com'
    };
}]);

