/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-2.js
 * @description Array.prototype.some considers new value of elements in array after it is called
 */


function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    arr[4] = 6;
    if(val < 6)
      return false;
    else 
      return true;
  }

  var arr = [1,2,3,4,5];
  
  if(arr.some(callbackfn) === true)    
    return true;  
  
 }
runTestCase(testcase);
