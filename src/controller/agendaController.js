app.controller('agendaController', [ '$scope', 'service/dataService', 'model/userBean', 'business/statusBo', 'business/calcBo', function($scope, $service, $userBean, $statusBo, $calcBo) {
"use strict";
    $scope.test = 50;
    $service.getData();

    $calcBo.setEnable(true);
    console.log($calcBo.getEnable());
    console.log(new $userBean());
} ]);
