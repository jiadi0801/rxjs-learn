const Rx = require('rxjs/Rx');

/**
 * 利用defaultIfEmpty给原有observable提供一个垫底输出值，当原有observable没有任何输出值而complete时，将输出这个垫底值
 */

const empty = Rx.Observable.of();

const exampleOne = empty.defaultIfEmpty('Observable.of() empty!');

const subscribe = exampleOne.subscribe(console.log)