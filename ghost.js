let _ = require('lodash')
// solution for question 2
function solution(K, A){
    let pairs = 0;
    let found = {};

    if (!A || !A.length) return 0;

    A.forEach(el => {
        if (!found[el]){
            found[el] = 1;
        }
        else {
            found[el]++;
        }
    });

    Object.keys(found).forEach(key => {
        let compliment = K - key;
        if (compliment in found){
            pairs += found[key] * found[compliment];
        }
    })

    return pairs; 
}

// test 

const arr1 = [1,8,-3,0,1,3,-2,4,5]
const arr2 = _.range(0, 100, 1)
// console.log(arr2)
console.log(solution(99, arr2))