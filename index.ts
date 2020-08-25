import { Observable } from 'rxjs';
import { allBooks } from './data';

// Way 1
function subscribe(subscriber) {
    for(let book of allBooks) {
        subscriber.next(book);
    }
}
// let allBooksObservable$ = new Observable(subscribe);
// allBooksObservable$.subscribe(book => console.log(book.title));

// Way 2

let allBooksObservable$ = new Observable(subscriber => {
    if(document.title !== 'RxBookTracker') {
        subscriber.error('Incorrect Page Title');
    }
    for(let book of allBooks) {
        subscriber.next(book);
    }
    setTimeout(() => {
        subscriber.complete();
    }, 2000);

    return () => console.log('Executing tear down code');
});
// allBooksObservable$.subscribe(book => console.log(book.title));


// Way 3

let allBooksObservable1$ = Observable.create(subscriber => {
    if(document.title !== 'RxBookTracker') {
        subscriber.error('Incorrect Page Title');
    }
    for(let book of allBooks) {
        subscriber.next(book);
    }
    setTimeout(() => {
        subscriber.complete();
    }, 2000);

    return () => console.log('Executing tear down code');
});
allBooksObservable1$.subscribe(book => console.log(book.title));
