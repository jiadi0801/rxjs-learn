const Rx = require('rxjs/Rx');

/**
 * 类似Array.prototype.find, 不同之处在于，在不提供判定函数的情况下，rxjs的first将返回第一个发射值
 */

const source = Rx.Observable.from([1,2,3,4,5,6]);

const example = source.first(num => num % 2 === 0);

const subscribe = example.subscribe(val => console.log(val));