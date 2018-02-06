const { Subject } = require('rxjs/Subject');
const { filter } = require('rxjs/operators');
const scarce$ = require('./fixtures/17-scarce');
const createLoggingObserver = require('./helpers/createLoggingObserver');

const fizzObserver = createLoggingObserver('fizz');
const buzzObserver = createLoggingObserver('buzz');
const fizzbuzzObserver = createLoggingObserver('fizzbuzz');

/** TODO:
  `scarce$` will error if you subscribe to it more than once!!
  1. Notify `fizzObserver` of all values from `scarce$` divisible by 3.
  2. Notify `buzzObserver` of all values from `scarce$` divisible by 5.
  3. Notify `fizzbuzzObserver` of all values from `scarce$` divisible by 3 AND 5.
*/

const multi$ = scarce$.share();

// const subject = new Subject();

multi$.pipe(filter(n => n % 3 === 0)).subscribe(fizzObserver);
multi$.pipe(filter(n => n % 5 === 0)).subscribe(buzzObserver);
multi$.pipe(filter(n => n % 15 === 0)).subscribe(fizzbuzzObserver);

// scarce$.subscribe(subject);

/**
  NOTE: expected output
  fizz 0
  buzz 0
  fizzbuzz 0
  fizz 3
  buzz 5
  fizz 6
  fizz 9
  buzz 10
  fizz 12
  fizz 15
  buzz 15
  fizzbuzz 15
  fizz 18
  fizz done
  buzz done
  fizzbuzz done
*/
