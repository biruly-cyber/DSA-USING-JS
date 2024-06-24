function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

function addUpTo2(n){
    return n * (n + 1) / 2;
}

//which one is better mean?
// faster 
// less memory intensive 
// more readable

let time1 = performance.now();
addUpTo(6);
let time2 = performance.now();

console.log(`Time Elapsed: ${time2 - time1} ms`);

time1 = performance.now();
addUpTo2(6);
time2 =  performance.now();
console.log(`Time Elapsed: ${time2 - time1} ms`);


console.log(`Time Elapsed: ${time2 - time1} ms`);
