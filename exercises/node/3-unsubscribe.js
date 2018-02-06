// `data$` is an observable stream of 10 numbers.
const data$ = require('./fixtures/1-data.js');

// TODO: Get the subscription and unsubscribe it after 1 second

const subscription = data$.subscribe({
    next(value) { console.log(value) },
    complete() { console.log('done'); }
})

setTimeout(() => {
    subscription.unsubscribe();
}, 1000)