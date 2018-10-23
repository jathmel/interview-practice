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

    return addZeros(cache[n].toString());
}

//Fibonacci with Matrices Multiplication

function fib4(n){
    let F = [[1,1],[1,0]]

    if (n === 0) return 0;
    power(F, n - 1)
    console.log(addZeros(F[0][0].toString()))
    return addZeros(F[0][0].toString())
}

//helper function

function multiply(F,M){
    let x = (F[0][0] * M[0][0] + F[0][1] * M[1][0])
    let y = (F[0][0] * M[0][1] + F[0][1] * M[1][1])
    let z = (F[1][0] * M[0][0] + F[1][1] * M[1][0])
    let w = (F[1][0] * M[0][1] + F[1][1] * M[1][1])

    F[0][0] = x
    F[0][1] = y
    F[1][0] = z
    F[1][1] = w
}

function power(F, n){
    let M = [[1,1], [1,0]]
    if(n === 0 || n === 1) return;
    power(F, n / 2)
    multiply(F,F)
    if(n % 2 != 0){
        multiply(F, M)
    }
}

function addZeros(str) {
    str.length > 6 && (str = str.substr(str.length - 6))
    return parseInt(str)
}


function fib5(n){
    let max = 10
    let k = 0
    let f = [...Array(1000)]
    if(n === 0) return 0;
    if(n === 1 || n === 2){
        f[n] = 1
        return f[n]
    } 
    if(n && 1) {
        k = (n + 1) / 2
    }
    else{
       k  = n / 2
    }
    if(n && 1){
        f[n] = (fib5(k) * fib5(k) + fib5(k - 1) * fib5(k - 1))
    }
    else{
        f[n] = (2*fib5(k-1) + fib5(k))*fib5(k)
    }
    return f[n]
}
console.log(3 % 2 !== 0)
console.log(3 % 2 != 0)
// console.log('iterative solution:', fib(100))
// console.log('optimized recursive solution:', fib3(8, {0:1, 1:1}))
console.log('optimized recursive solution with Matrices:', fib5(4))
// console.log('optimized recursive solution with Matrices:', fib4(50))
// console.log('optimized recursive solution with Matrices:', fib4(100))
// console.log('optimized recursive solution with Matrices:', fib4(1000))
// console.log('optimized recursive solution with Matrices:', fib4(10000))
// console.log('optimized recursive solution with Matrices:', fib4(100000))
// console.log('optimized recursive solution with Matrices:', fib4(1000000))
// console.log('recursive solution:', fib2(100))