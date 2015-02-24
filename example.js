/*! Example.JS - v1.0
 *
 * Copyright (c) 2014 John Sterling
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

function testExample(val) {
    console.log('Test example', val, Date.now())
}

var Example = {
    test: testExample
};

if (typeof define == TYPE_FUNCTION && define.amd) {
    console.log('ExampleJS: AMD');
    define(function() {
        return Example;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Example;
    console.log('ExampleJS: CommonJS');
} else {
    console.log('ExampleJS: Global');
    window[exportName] = Example;
}

})(window, document, 'Example');
