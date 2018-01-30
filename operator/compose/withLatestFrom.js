const Rx = require('rxjs/Rx');

/**
 * 源observable发出值时，拉去from的observable的最新值组成数组输出
 */

const source = Rx.Observable.interval(5000);

const secondSource = Rx.Observable.interval(1000);

const example = secondSource.withLatestFrom(source)
    .map(([first, second]) => `1s: ${first}, 5s: ${second}`)

const subscribe = example.subscribe(console.log);