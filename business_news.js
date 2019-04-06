var businessnewsApp = angular.module('NewsApp', []);

businessnewsApp.controller('newsSection', ['$scope', '$log','$http', function ($scope, $log,$http) {
    $scope.newsHeading = "Today's top Business news are as follows: ";
    $scope.businessnewArticles=[];
    
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=10537835e6f949508a927f0a6df56ed3'
    }).then(function successCallback(response) {
        $scope.businessnewArticles = response.data.articles;
        $log.info('Hello!');
        $log.log($scope.businessnewArticles);
    }, function errorCallback(response) {
        $log.error(response);
    });

}]);
