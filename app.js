var newsApp = angular.module('NewsApp', []);
var contactApp = angular.module('contactApp', []);
var db = new PouchDB('News');
newsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top news are as follows: ";
    $scope.newArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.newArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.newArticles);
        $scope.newArticles.forEach(function(element) {
            element.newType="General";   
        });
        db.bulkDocs($scope.newArticles).then(function (result) {
            console.log("SuccessFUL");
            db.allDocs({
                include_docs: true,
                attachments: true
              }).then(function (result) {
                    console.log(result);
              }).catch(function (err) {
                console.log(err);
              });
          }).catch(function (err) {
            console.log(err);
        });

    }, function errorCallback(response) {
        $log.error(response);
    });

    console.log($scope.newArticles);

}]);

contactApp.controller('contact', ['$scope', '$log', function ($scope, $log) {
    $scope.email = {
        text: 'example@gmail.com'
    };
}]);

