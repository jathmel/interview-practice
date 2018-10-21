// Fibonacci practice


//Iterative solution
function fib(n){
    let a = 1;
    let b = 1;

    while(n > 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}

// Recursive solution
function fib2(n){
    if (n <= 1) return 1;

    return fib2(n - 1) + fib2(n - 2);
}


//Optimized Recursive Solution
function fib3(n, cache){
    cache = cache || {};

    if(cache[n]) return cache[n];
    cache[n] = fib3((n - 1), cache ) + fib3((n - 2), cache);

    return cache[n];
}



// console.log('iterative solution:', fib(100))
console.log('optimized recursive solution:', fib3(10000, {0:1, 1:1}))
// console.log('recursive solution:', fib2(100))