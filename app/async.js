define(function() {
  return {
    async : function() {
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
