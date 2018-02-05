const Rx = require('rxjs/Rx');

/**
 * 怎么介绍好呢
 */

const people = [
    {name: 'Sue', age: 25},
    {name: 'Joe', age: 30},
    {name: 'Frank', age: 25},
    {name: 'Sarah', age: 35}
];

// const source = Rx.Observable.from(people);
const source = Rx.Observable.interval(1000).take(5);

const example = source.groupBy(person => person > 2)
    .mergeMap(group => group.toArray());

const subscribe = example.subscribe(val => console.log(val));