const Rx = require('rxjs/Rx');

/**
 * retry会在发生错误的时候重复执行发射序列，从最初始的值开始重新发射
 */

const source = Rx.Observable.interval(1000);

const example = source
    .flatMap(val => {
        if (val > 5) {
            return Rx.Observable.throw('error!');
        }
        return Rx.Observable.of(val);
    })
    .retry(2);

const subscribe = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: retried 2 times then quit`)
})