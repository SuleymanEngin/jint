// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 11.3.3_L15
description: >
    Tests that Intl.NumberFormat.prototype.resolvedOptions meets the
    requirements for built-in objects defined by the introduction of
    chapter 17 of the ECMAScript Language Specification.
author: Norbert Lindenberg
includes: [isConstructor.js]
features: [Reflect.construct]
---*/

assert.sameValue(Object.prototype.toString.call(Intl.NumberFormat.prototype.resolvedOptions), "[object Function]",
                 "The [[Class]] internal property of a built-in function must be " +
                 "\"Function\".");

assert(Object.isExtensible(Intl.NumberFormat.prototype.resolvedOptions),
       "Built-in objects must be extensible.");

assert.sameValue(Object.getPrototypeOf(Intl.NumberFormat.prototype.resolvedOptions), Function.prototype);

assert.sameValue(Intl.NumberFormat.prototype.resolvedOptions.hasOwnProperty("prototype"), false,
                 "Built-in functions that aren't constructors must not have a prototype property.");

assert.sameValue(isConstructor(Intl.NumberFormat.prototype.resolvedOptions), false,
                 "Built-in functions don't implement [[Construct]] unless explicitly specified.");
