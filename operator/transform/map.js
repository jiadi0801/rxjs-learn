const Rx = require('rxjs/Rx');

const source = Rx.Observable.from([1,2,3,4,5]);

const example = source.map(val => val + 10);

example.subscribe(val => console.log(val));
example.subscribe(val => console.log(val));
