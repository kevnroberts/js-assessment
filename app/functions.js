if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ", " + str2;
        }
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var sum = 0;
        for(var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.apply(arguments);
        var fn = args.shift();
        fn.apply(this, args);
    },

    curryIt : function(fn) {
        var slice = Array.prototype.slice;
        var args = slice.apply(arguments);
        var func = args.shift();
        return function(){
            return func.apply(null, args.concat(slice.apply(arguments)));
        };
    },

    makeClosures : function(arr, fn) {
        var funcs = [];
        for(var i = 0; i < arr.length; i++){
            funcs.push(function(num){
                return function(){
                    return fn(num);
                }
            }(arr[i]));
        }
        return funcs;
    }
  };
});
