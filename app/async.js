if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return {
    		then: function(func){
    			func(true);
    		}
    	};
    },

    manipulateRemoteData : function(url) {
		return {
			then: function(func){
				jQuery.get(url, function(data){
		    		var i;
		    		var result = []
		    		for(i = 0; i < data.people.length; i++){
		    			result.push(data.people[i].name);
		    		}
		    		result.sort();
    				func(result);
		    	});
			}
		};
    }
  };
});
