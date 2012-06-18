if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var i, len;
        for(i = 0, len = arr.length; i < len; i += 1){
            if(arr[i] === item) return i;
        }
        return -1;
    },

    sum : function(arr) {
        var itemSum = 0, i;
        for(i = 0; i < arr.length; i++){
            itemSum += arr[i];
        }
        return itemSum;
    },

    remove : function(arr, item) {
        arr.splice(this.indexOf(arr, item), 1);
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var i, count = 0;
        for(i = 0; i < arr.length; i+=1){
            if(arr[i] === item) count += 1;
        }
        return count;
    },

    duplicates : function(arr) {
        var sorted = arr.sort();
        var i;
        var last = sorted[0];
        var dups = [];
        for(i = 1; i < sorted.length; i++){
            if(sorted[i] === last && this.indexOf(dups, last) === -1){
                dups.push(last);
            }
            last = sorted[i];
        }
        return dups;
    },

    square : function(arr) {
        var squared = [], i = 0, len = arr.length;
        for(;i < len; i++){
            squared[i] = Math.pow(arr[i], 2);
        }
        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var i, occ = [];
        for(i = 0; i < arr.length; i += 1){
            if(arr[i] === target) occ.push(i);
        }
        return occ;
    }
  };
});
