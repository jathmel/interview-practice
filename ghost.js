let _ = require('lodash')
// solution for question 2
function solution(K, A){
    let pairs = 0;
    let found = {};

    if (!A || !A.length) return 0;

    // A.forEach(el => 
        for(let el of A){
        if (!found[el]){
            found[el] = 1;
        }
        else {
            found[el]++;
        }
    };

    Object.keys(found).forEach(key => {
        let compliment = K - key;
        if (compliment in found){
            pairs += found[key] * found[compliment];
        }
    })

    return pairs; 
}

// // test 

const arr1 = [1,8,-3,0,1,3,-2,4,5]
const arr2 = _.range(0, 100, 1)
// console.log(arr2)
// console.log(solution(6, arr1))



function solution2(A){
    let count = 0;
    let i = 0;
    let temp = 0;
    while (A[i] !== undefined){
        // console.log('i before if ', i);
        // console.log('A[i] before if ', A[i]);
        
        if (A[i] === null) return  count = -1
        count++;
        temp = A[i];
        A[i] = null;
        i += temp;}
    return count
}
const arr = [2,3,-1,1,3]
const arr2 = [1,1,-1,1]
const arr3 = [1,1,-4,1]
console.log(arr3.last);


console.log('solution to arr',solution2(arr));
console.log('solution to arr2',solution2(arr2));
console.log('solution to arr3',solution2(arr3));
