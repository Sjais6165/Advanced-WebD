// const readline = require('readline');
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// a.question('Enter a Value: ', (userInput) => {
//     const num = parseFloat(userInput);
//     if (!isNaN(num)) {
//         // console.log('Your value: ', (userInput));
//         table(num);

//     }
//     else {
//         console.log('Invalid input value:');
//     }
//     a.close();
// });

// //----------------------------------------------------------------------------------//

//First way


// function table(fromNumber) {
//     let num = 0;
//     console.log("table: ");
//     let interval = setInterval(function () {
//         num++;
//         if (num < 11) {
//             console.log(fromNumber, "*", num, "=",
//                 fromNumber * num);
//         }
//         else {
//             console.log('End');
//             clearInterval(interval);
//         }
//     }, 1000);
// }


//Second way

// function cd(n, t) {
//     console.log(n, '*', t, '=', n * t);
//     t = t + 1;
//     if (t <= 10) {
//         setTimeout(function () { cd(n, t); }, 100);
//     }
//     else {
//         clearTimeout();
//     }
// }
// const prompt = require('prompt-sync')();
// const num = prompt('Enter the number: ');
// cd(num, 1);


//**************************************************************************//


const readline = require('readline');
const a = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
a.question('Enter a Value: ', (userInput1) => {
    a.question('Enter a Value: ', (userInput2) => {
        const num1 = parseFloat(userInput1);
        const num2 = parseFloat(userInput2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Invalid input value');
            a.close();
        }
        else {
            const sum = num1 + num2;
            const sub = num1 - num2;
            const mul = num1 * num2;
            const div = num1 / num2;
            console.log("Addition: ", sum);
            console.log("Subtraction: ", sub);
            console.log("Multiplication: ", mul);
            console.log("Division: ", div);
        }
        a.close();
    });
    
});