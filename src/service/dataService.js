cit.service('dataService', function($scope){
"use strict";
    var dataService = {
        getData : function(){
            console.log($scope);
        }
    };
    return dataService;
});
