const Rx = require('rxjs/Rx');

/**
 * of接收任意参数，每个参数均为发射值，参数是数组，发射值就是数组
 * 只接收一个参数，并拆解这个参数得到发射值，这个不同于of，of接收任意参数，每个参数就是发射值
 */
const example = Rx.Observable.of(1,Rx.Observable.of(1));

const subscribe = example.subscribe(console.log);