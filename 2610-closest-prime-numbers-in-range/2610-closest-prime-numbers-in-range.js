/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
// var closestPrimes = function(left, right) {
//     let primeArr = [];
//     for(let i = left; i <= right; i++) {
//         let flag = false
//         for(let j = 2; j < left; j++) {
//             if(i % j === 0){
//                 flag = true;
//                 break;
//             }
//         }

//         if(!flag) primeArr.push(i)

//     }
//     let diff = +Infinity;
//     let index = -1;
//     for(let i = 0 ; i < primeArr.length-1;) {
//         if((primeArr[i+1] - primeArr[i]) < diff) {
//             diff = primeArr[i+1] - primeArr[i];
//             console.log(primeArr[i+1] , primeArr[i], diff)
//             index = i
//         }
//         i++;
//     }
//     // console.log(primeArr)
//     if(index === -1) return [-1, -1];
//     return [primeArr[index], primeArr[index+1]]
//     // return [-1,-1]
// };

const pow = (x, e, m) => { // O(log e)
    if (e === 0) return 1;
    if (e & 1) return (x * pow(x, e - 1, m)) % m;
    return pow((x * x) % m, e >> 1, m);
};

const isStrong = (n, a) => { // O(log n log n)
    let e = n - 1;
    let p = pow(a, e, n);
    if (p !== 1) return false;

    while (true) {
        e >>= 1;
        p = pow(a, e, n);
        if (p === n - 1) return true;
        if (e & 1) {
            if (p === 1) return true;
            break;
        }
    }

    return false;
};

// Miller test
const isPrime = (n) => isStrong(n, 2) && (n < 2047 || isStrong(n, 3));

const closestPrimes = (i, j) => {
    let x = -1;
    let y = -1;

    if (i < 3) {
        x = 2;
        i = 3;
    } else {
        i += ((i & 1) === 0);
        for (; i <= j; i += 2) {
            if (isPrime(i)) {
                x = i;
                i += 2;
                break;
            }
        }
    }
    for (; i <= j; i += 2) {
        if (isPrime(i)) {
            y = i;
            i += 2;
            break;
        }
    }
    for (let t = y; i <= j && y - x > 2; i += 2) {
        if (isPrime(i)) {
            if ((y - x) > (i - t)) {
                x = t;
                y = i;
            }
            t = i;
        }
    }
    return y > 0 ? [x, y] : [-1, -1];
};