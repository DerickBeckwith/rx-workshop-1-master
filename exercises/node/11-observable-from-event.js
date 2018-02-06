import { Subscriber } from 'rxjs/Subscriber';

const Resource = require('./fixtures/6-Resource');
const Rx = require('rxjs/Rx');

// TODO: create an observable with the `Observable.fromEvent` over the same
// `Resource` we used in exercise 6.

/**
NOTE: `Resource` usage:

const resource = new Resource(); // start the resource;
resource.addEventListener('data', handler); // listen for data events
resource.removeEventListener('data', handler); // stop listening for data events

HINT: You'll probably have to create the `Resource` first.
*/
const resource = new Resource();
const source$ = Rx.Observable.fromEvent(resource, 'data');

const subscription = source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

setTimeout(() => subscription.unsubscribe(), 4000);

/**
NOTE: output should be:

Resource: started
Resource: event listener added
0
1
2
3
Resource: event listener removed
Resource: closed
*/

// cold observable is unicast - one producer for one consumer
// hot observable is multicast - one producer for n consumers



// cold observable since it's creating the data you subscriber to inside of the observable itself.
const cold = new Observable(subscriber => {
  const ws = new WebSocket(url);
  ws.onmessage = e => subscriber.next(x);
})

const hot = new Observable(subscriber => {
  const producer = new producer(); 
})