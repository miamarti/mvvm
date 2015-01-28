var mvvm = (function(window, document) {
"use strict";
    var greater = {

	/*
	 * Configuration settings
	 */
	config : {
	    path : 'src'
	},

	/*
	 * Charging method d code source module
	 */
	core : {

	    /*
	     * Global Scope
	     */
	    $scope : {},

	    /*
	     * Controller creation method
	     */
	    controller : function() {
		var innerArguments = '';
		var callbackFunction = arguments[0];
		this[callbackFunction] = arguments[1][arguments[1].length - 1];
		for (var i = 0; i < (arguments[1].length - 1); i++) {
		    var mapName = arguments[1][i].split('/')[arguments[1][i].split('/').length - 1];
		    if (arguments[1][i] != '$scope') {
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = greater.config.path + '/' + arguments[1][i] + '.js';
			document.head.appendChild(newScript);
		    }
		    innerArguments += ((i == 0) ? '' : ',') + 'arguments[0]["' + mapName + '"]';
		}
		setTimeout(function() {
		    (new Function('arguments[0]["' + callbackFunction + '"](' + innerArguments + ');'))(greater.core.get());
		}, 500);
	    },

	    /*
	     * Service creation method
	     */
	    service : function(name, callback) {
		this[name] = callback(this.$scope);
	    },

	    /*
	     * Model creation method
	     */
	    model : function(name, callback) {
		this[name] = callback(this.$scope);
	    },

	    /*
	     * Business creation method
	     */
	    business : function(name, callback) {
		this[name] = callback(new (function(_this) {
		    this.includes = _this;
		})(this));
	    },

	    get : function() {
		return this;
	    }
	},

	/*
	 * Application Creation Method
	 */
	create : function(name, $scope) {
	    this.core.$scope = ($scope != undefined) ? $scope : {};
	    var newScript = document.createElement("script");
	    newScript.type = "text/javascript";
	    newScript.innerHTML = 'var ' + name + ' = mvvm.core;';
	    document.head.appendChild(newScript);

	    [].map.call(document.querySelectorAll('[data-ng-controller]'), function(controller) {
		var newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.src = greater.config.path + '/' + controller.dataset.ngController + '.js';
		document.head.appendChild(newScript);
	    });
	}
    };
    return greater;
})(window, document);
