const Rx = require('rxjs/Rx');

/**
 * from接收observable，数组，promise或者实现迭代器的对象转换成observable
 * 只接收一个参数，并拆解这个参数得到发射值，这个不同于of，of接收任意参数，每个参数就是发射值
 */
const example = Rx.Observable.from(Rx.Observable.of(1,2,3))

const subscribe = example.subscribe(console.log);