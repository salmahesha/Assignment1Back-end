var createCounter = function (init) {
    let start = init;
    let obj = {
        increment: function () {
            return ++init;
        },
        reset: function () {
            return init = start;
        },
        decrement: function () {
            return --init;
        }
    }
    return obj;
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());