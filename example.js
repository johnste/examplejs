/*! Example.JS - v1.0
 *
 * Copyright (c) 2014 John Sterling
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

Function testExample() {
    console.log('Test example', Date.now())
}

var Example = {
    test: testExample
});

if (typeof define == TYPE_FUNCTION && define.amd) {
    define(function() {
        return Example;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Example;
} else {
    window[exportName] = Example;
}

})(window, document, 'Example');
