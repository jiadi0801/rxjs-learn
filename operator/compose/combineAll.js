const Rx = require('rxjs/Rx');

/**
 * 等所有源observable完成时，对每个源生成的observable使用combineLatest
 */
const source = Rx.Observable.interval(1000).take(2);

const example = source.map(val => Rx.Observable.interval(1000).map(i => {return `Result (${val}): ${i})`}).take(5));

const combined = example.combineAll();

const subscribe = combined.subscribe(val => console.log(val));