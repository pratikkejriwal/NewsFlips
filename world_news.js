var worldnewsApp = angular.module('NewsApp', []);

worldnewsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top International news are as follows: ";
    $scope.worldnewArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.worldnewArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.worldnewArticles);
    }, function errorCallback(response) {
        $log.error(response);
    });

}]);


