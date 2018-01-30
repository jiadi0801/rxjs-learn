const Rx = require('rxjs/Rx');
/**
 * 一开始就发出一个给定的值
 */
Rx.Observable.of(1,2,3).startWith(3).subscribe(console.log);

Rx.Observable.of('world', 'goodbye', 'world!')
    .startWith('hello')
    .scan((acc, curr) => `${acc} ${curr}`)
    .subscribe(console.log);