var entertainmentnewsApp = angular.module('NewsApp', []);

entertainmentnewsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top Entertainment news are as follows: ";
    $scope.entertainmentnewArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.entertainmentnewArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.entertainmentnewArticles);
    }, function errorCallback(response) {
        $log.error(response);
    });

}]);
