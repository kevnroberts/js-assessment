if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
        var sayIt = function(greeting, name, punctuation) {
          return greeting + ', ' + name + (punctuation || '!');
        };
        return sayIt.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(hello) {
        return function(world){
            return hello + ", " + world;
        }
    },

    partial : function(fn, greeting, name) {
        return function(punctuation){
            return fn(greeting, name, punctuation);
        }
    },

    useArguments : function() {
        var sum = 0;
        for(var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function() {
        var args = Array.prototype.slice.apply(arguments);
        var fn = args.shift();
        fn.apply(this, args);
    },

    curryIt : function() {
        var slice = Array.prototype.slice;
        var args = slice.apply(arguments);
        var func = args.shift();
        return function(){
            return func.apply(null, args.concat(slice.apply(arguments)));
        };
    },

    makeClosures : function(arr, doSomeStuff) {
        var funcs = [];
        for(var i = 0; i < arr.length; i++){
            funcs.push(function(num){
                return function(){
                    return doSomeStuff(num);
                }
            }(arr[i]));
        }
        return funcs;
    }
  };
});
