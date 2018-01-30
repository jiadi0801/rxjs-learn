
const Rx = require('rxjs/Rx');
/**
 * 输出值不会重复 ，重复的值会被忽略
 */
const filterDuplicatesInARow = Rx.Observable.from([1,1,1,3,3,3,2,2,2,1,2,3]).distinctUntilChanged();

const subscribe = filterDuplicatesInARow.subscribe(val => console.log(val));