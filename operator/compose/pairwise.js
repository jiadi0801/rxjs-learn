const Rx = require('rxjs/Rx');
/**
 * 输出当前值和前一个值组成的数组
 */
const interval = Rx.Observable.interval(1000);

interval.pairwise()
    .take(5)
    .subscribe(console.log);