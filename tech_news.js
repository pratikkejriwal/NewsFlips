var technewsApp = angular.module('NewsApp', []);

technewsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top Technology news are as follows: ";
    $scope.technewArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.technewArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.technewArticles);
    }, function errorCallback(response) {
        $log.error(response);
    });

}]);
