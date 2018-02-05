const Rx = require('rxjs/Rx');

const source = Rx.Observable.from([1,2,3,4,5,6]);
/**
 * 将一个观测源变成两个，依据提供的判定条件
 * 像filter，但是不符合条件的值也保留了
 */

const [evens, odds] = source.partition(val => val % 2 ===0);

const subscribe = Rx.Observable.merge(
    evens.map(val => 'even ' + val),
    odds.map(val => 'odd ' + val)
).subscribe(val => console.log(val));

