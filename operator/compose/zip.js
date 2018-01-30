const Rx = require('rxjs/Rx');

/**
 * zip会消耗一个next，如果某个observable complete了，那么其他observable也停止。各个observable的next是一一对应输出的。
 * 因此相当于批量打包
 */
const sourceOne = Rx.Observable.of('hello', 'h');
const sourceTwo = Rx.Observable.of('world', '11');
const sourceThree = Rx.Observable.of('goodbye', '22');
const sourceFour = Rx.Observable.of('world', '33', '332');

const example = Rx.Observable
    .zip(
        sourceOne,
        sourceTwo.delay(1000),
        sourceThree.delay(2000),
        sourceFour.delay(3000)
    );

const subscribe = example.subscribe(console.log);

function example2() {
    const interval = Rx.Observable.interval(1000);
    const example = Rx.Observable
        .zip(
            interval,
            interval.take(2)
        );
    example.subscribe(console.log);
}

example2();