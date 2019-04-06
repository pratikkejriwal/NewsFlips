var sportsnewsApp = angular.module('NewsApp', []);

sportsnewsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top Sports news are as follows: ";
    $scope.sportsnewArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.sportsnewArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.sportsnewArticles);
    }, function errorCallback(response) {
        $log.error(response);
    });

}]);
