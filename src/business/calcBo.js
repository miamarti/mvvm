app.business('calcBo', function($){
"use strict";
    _.name = 'Maria';
    _.fone = '33.33';
    
    /*
    * Return Test
    **/
    _.getTest = function(){
        return this.name + ' .\'. ' + this.fone;
    };
    
    _.setEnable = function(value){
        _.includes.statusBo.setStatus(value);
    };
    
    _.getEnable = function(){
        return _.includes.statusBo.enable;
    };
    
    return _;
});