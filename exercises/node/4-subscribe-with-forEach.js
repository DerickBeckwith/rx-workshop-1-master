// `data$` is an observable stream of 10 numbers.
const data$ = require('./fixtures/1-data.js');

// TODO: Subscribe to `data$` and log out all values to console.


// NOTE: If `forEach` returns a promise, how an we unsubscribe?
//   We can't (yet! perhaps in the future of Rx?)

data$.forEach(v => console.log(v))
    .then(
        () => console.log('done'),
        err => console.log(err)
    );


async function foo() {
    await data$.forEach(x => doAThing(x));
}