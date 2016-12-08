goog.module('test_files.functions.untyped.functions');var module = module || {id: 'test_files/functions.untyped/functions.js'};/**
 * @param {?} a
 * @return {?}
 */
function Test1(a) {
    return a;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function Test2(a, b) { }
/**
 * @ngInject
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function Test3(a, b) { }
/**
 * @param {?} a
 * @return {?}
 */
function Test4(a) {
    return "a";
}
/**
 * @this {?}
 * @param {...?} params
 * @return {?}
 */
function TestThisAndRest(...params) { }
TestThisAndRest.call('foo', 'bar', 3);
/**
 * @param {{a: number, b: number}} __0
 * @return {?}
 */
function Destructuring({ a, b }) { }
/**
 * @param {!Array<number>} __0
 * @param {!Array<!Array<string>>} __1
 * @return {?}
 */
function Destructuring2([a, b], [[c]]) { }
/**
 * @param {!Array<?, ?>} __0
 * @param {!Array<!Array<?>>} __1
 * @return {?}
 */
function Destructuring3([a, b], [[c]]) { }
Destructuring({ a: 1, b: 2 });
Destructuring2([1, 2], [['a']]);
Destructuring3([1, 2], [['a']]);
/**
 * @param {...?} a
 * @return {?}
 */
function TestSplat(...a) { }
/**
 * @param {...?} a
 * @return {?}
 */
function TestSplat2(...a) { }
/**
 * @param {...?} a
 * @return {?}
 */
function TestSplat3(...a) { }
TestSplat(1, 2);
TestSplat2(1, 2);
TestSplat3(1, 2);
