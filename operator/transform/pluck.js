const Rx = require('rxjs/Rx');

/**
 * 提取对象的属性，根据参数个数可提取嵌套属性
 */

const source = Rx.Observable.from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' }, arr: ['ab', 'dc'] },
    // 当找不到 job 属性的时候会返回 undefined
    { name: 'Sarah', age: 35 }
]);

// const example = source.pluck('job', 'title');
const example = source.pluck('arr', 0);

const subscribe = example.subscribe(val => console.log(val));