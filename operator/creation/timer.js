const Rx = require('rxjs/Rx');
/**
 * 在多少延迟后，每隔多少时间发出值，从0开始
 */
const example = Rx.Observable.timer(1000, 2000);

const subscribe = example.subscribe(console.log);