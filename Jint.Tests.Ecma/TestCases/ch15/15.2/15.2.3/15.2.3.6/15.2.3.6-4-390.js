/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-390.js
 * @description ES5 Attributes - [[Value]] attribute of data property is a Function object
 */


function testcase() {
        var obj = {};
        var funObj = function () { };

        Object.defineProperty(obj, "prop", {
            value: funObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === funObj && desc.value === funObj;
    }
runTestCase(testcase);
