const Rx = require('rxjs/Rx');

/**
 * 类似Array.prototype.reduce但是会发出每个发射值当前的计算值
 */

Rx.Observable.of(1,2,3,4).scan((acc, val)=> acc+val, 0).subscribe(val => console.log(val));