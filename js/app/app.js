var linkCollaborator = angular.module('linkCollaborator',[]);


linkCollaborator.controller('AppController',function($scope){
	console.log("Initial controller");

    $scope.linkadd = {};


    $scope.addLink = function(){
        console.log($scope.linkadd);
    };
});
