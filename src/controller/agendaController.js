cit.controller('agendaController', ['$scope', 'service/dataService', 'model/userBean', function($scope, $service, $userBean){
"use strict";
    $scope.test = 50;
    $service.getData();
    
    console.log(new $userBean());
}]);
