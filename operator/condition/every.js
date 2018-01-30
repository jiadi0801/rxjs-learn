const Rx = require('rxjs/Rx');

/**
 * 和Array.prototype.every功能类似
 */
const source = Rx.Observable.of(1,2,3,4,5);

const example = source.every(val => val % 2 === 0);

const subscribe = example.subscribe(console.log);