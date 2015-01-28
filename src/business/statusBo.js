app.business('statusBo', function(_){
"use strict";
    _.enable = undefined;
    
    /*
    * Set enable value
    **/
    _.setStatus = function(value){
        this.enable = value;
    };
    
    return _;
});