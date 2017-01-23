function foo() {
    console.log('Hello');
    return 42;
}

var x = foo.call(); // same as foo()
console.log(x);
var y = foo.call(); // same as foo()
console.log(y);

// using observables
var foo = Obserbale.create(function (observer) {
    console.log('Hello');
    observer.next(42);
});

foo.subscribe(function (x) {
    console.log(x);
});
foo.subscribe(function (y) {
    console.log(y);
});

var foo = Obserbale.create(function (observer) {
    console.log('Hello');
    observer.next(42);
    observer.next(100); // "return" another value
    observer.next(200); // "return" yet another


    setTimeout(function () {
        observer.next(300); // happens asynchronously
    }, 1000);
});

console.log('before');
foo.subscribe(function (x) {
    console.log(x);
});
console.log('after');
