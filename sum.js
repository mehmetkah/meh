"use strict";

const args = process.argv

let total = 0

for (let j = 2; j < process.argv.length; j++) {
    total += Number(process.argv[j]) 
    console.log(process.argv[2])
}
console.log( ( total ));

