const Rx = require('rxjs/Rx');
/**
 * 类似Array.prototype.filter
 */
const example = Rx.Observable.from([1,2,3,4,5,6]);

const target = example.filter(num => num % 2 === 0);

const subscribe = target.subscribe(val => console.log(val));