if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeoutId;
      var num = start;

      function doCount(){
        console.log(num);

        num++;
        if(num <= end){
          timeoutId = setTimeout(doCount, 100);
        }
      }

      doCount();

      return {
        cancel: function(){
          timeoutId && clearTimeout(timeoutId);
        }
      }
    }
  };
});