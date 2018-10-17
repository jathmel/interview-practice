// const sumMultiplesOfThreeAndFive = () => {
//    const numArr = [...Array(1001).keys()];
//     let count = 0;
//    for(num of numArr){
//        if (num % 3 === 0 || num % 5 === 0){
//            count += num;
//        }
//    }
//    console.log(count);
// }
const sumMultiplesOfThreeAndFive = () => {
    // const numArr = [...Array(1001).keys()];
    let count = 0;
    for (let i = 1; i <= 1000; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    }
    console.log(count);
}
sumMultiplesOfThreeAndFive()
