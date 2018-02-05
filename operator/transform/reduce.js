const Rx = require('rxjs/Rx');

/**
 * 类似Array.prototype.reduce
 */

Rx.Observable.of(1,2,3,4).reduce((acc, val)=> acc+val).subscribe(val => console.log(val));