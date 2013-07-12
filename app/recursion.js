if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var list = [];
      var fileItem;
      function getFile(fileItem, list){
        var i, len;
        if(typeof fileItem === "string"){
          list.push(fileItem);
        } else if(typeof fileItem === "object" && fileItem.files){
          for(i = 0, len = fileItem.files.length; i < len; i++){
            getFile(fileItem.files[i], list);
          }
        }
      }

      function findDir(item){
        if(item.dir && item.dir === dirName){
          return item;
        }

        if(item.files){
          for(var i = 0, len = item.files.length; i < len; i++){
            var result = findDir(item.files[i]);
            if(result){
              return result;
            }
          }
        }
      }

      if(dirName){
        fileItem = findDir(data);
      }

      getFile(fileItem || data, list);
      return list;
    },

    permute: function(arr) {

    }
  };
});
